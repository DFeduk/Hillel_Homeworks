const idInput = document.querySelector(`#ContactId`);
const nameInput = document.querySelector(`#name`);
const phoneInput = document.querySelector(`#phoneNumber`);
const emailInput = document.querySelector(`#email`);
const tbodyEl = document.querySelector(`#tbody`);
const btn = document.querySelector(`#addContactForm`);

const EDIT_CLASS = `edit-item`;
const REMOVE_CLASS = `remove-item`;
const TABLEROW_CLASS = `person-info`;

const CONTACTS_URL = `https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/`;

let contactList = [];

init();

btn.addEventListener(`submit`, onAddContactFormSubmit);
tbodyEl.addEventListener(`click`, editTableRow);

function onAddContactFormSubmit(event) {
  event.preventDefault();

  sumbitForm();
  resetInputs();
}
function init() {
  fetchContacts();
}

function sumbitForm() {
  if (!inputValidation()) {
    return;
  }
  const contact = getFormData();
  if (contact.id) {
    updateContact(contact);
  } else {
    createContact(contact);
  }
  //  delete contact.id;
}

function createContact(contact) {
  delete contact.id;

  fetch(CONTACTS_URL, {
    method: `POST`,
    body: JSON.stringify(contact),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then(addContact);
}
function addContact(contact) {
  contactList.push(contact);
  renderContacts(contactList);
}
function getFormData() {
  return {
    id: idInput.value,
    name: nameInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
  };
}

function inputValidation() {
  return (
    isInputValid(nameInput.value) &&
    isPhoneInputValid(phoneInput.value) &&
    isInputValid(emailInput.value)
  );
}

function createTableRow(id) {
  const tr = document.createElement(`tr`);
  tr.className = TABLEROW_CLASS;
  tr.id = id;
  return tr;
}

function createButtons() {
  const el = createTableData();
  el.className = `d-flex justify-content-evenly`;
  el.appendChild(createEditButton());
  el.appendChild(createDeleteButton());
  return el;
}
function createEditButton() {
  const edit = document.createElement("a");
  edit.className = EDIT_CLASS;
  edit.innerHTML = `<i class="fa fa-pencil-square-o"</i>`;
  return edit;
}
function createDeleteButton() {
  const link = document.createElement("a");
  link.className = REMOVE_CLASS;
  link.innerHTML = '<i class="fa fa-remove"></i>';
  return link;
}
function createTableData() {
  const el = document.createElement(`td`);
  el.className = `text-center`;
  return el;
}
function resetInputs() {
  idInput.value = ``;
  nameInput.value = ``;
  phoneInput.value = ``;
  emailInput.value = ``;
}
function editTableRow(e) {
  switch (true) {
    case e.target.parentElement.classList.contains(REMOVE_CLASS):
      deleteContact(e.target.closest(`.` + TABLEROW_CLASS).id);
      break;
    case e.target.parentElement.classList.contains(EDIT_CLASS):
      editContact(e.target.closest(`.` + TABLEROW_CLASS).id);
      break;
  }
}

function isInputValid(str) {
  return str.trim() !== "" && isNaN(str);
}

function isPhoneInputValid(str) {
  const regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]{7,16}$/g;
  return regex.test(str);
}

function fetchContacts() {
  fetch(CONTACTS_URL)
    .then((resp) => resp.json())
    .then(setContacts)
    .then(renderContacts);
}

function setContacts(data) {
  return (contactList = data);
}

function renderContacts(data) {
  tbodyEl.innerHTML = ``;
  data.map(renderContact);
}

function renderContact({ id, name, phone, email }) {
  const tableRow = createTableRow(id);
  tableRow.appendChild(addInputToTd(name));
  tableRow.appendChild(addInputToTd(phone));
  tableRow.appendChild(addInputToTd(email));
  tableRow.appendChild(createButtons());
  tbodyEl.appendChild(tableRow);
}

function addInputToTd(value) {
  const td = createTableData();
  td.innerText = value;
  return td;
}

function deleteContact(id) {
  fetch(CONTACTS_URL + id, {
    method: `DELETE`,
  }).then(() => {
    contactList = contactList.filter((item) => item.id !== id);
    renderContacts(contactList);
  });
}
function editContact(id) {
  const contact = contactList.find((item) => item.id === id);
  fillInputs(contact);
}

function fillInputs(contact) {
  idInput.value = contact.id;
  nameInput.value = contact.name;
  phoneInput.value = contact.phone;
  emailInput.value = contact.email;
}
function updateContact(contact) {
  fetch(CONTACTS_URL + contact.id, {
    method: `PUT`,
    body: JSON.stringify(contact),
    headers: {
      "Content-Type": "application/json",
    },
  });

  contactList = contactList.map((el) => (el.id != contact.id ? el : contact));
  renderContacts(contactList);
  resetInputs();
}
