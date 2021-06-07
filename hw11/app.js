const firstNameInput = document.querySelector("#firstName");
const secondNameInput = document.querySelector("#secondName");
const phoneInput = document.querySelector("#phoneNumber");
const tbodyEl = document.querySelector("#tbody");

document.querySelector(".btn").addEventListener("click", applyEl);
tbodyEl.addEventListener("click", removeTableRow);

function applyEl() {
  const tableEl = createEl();
  resetInputs();
  tbodyEl.appendChild(tableEl);
}

function createEl() {
  const tableRow = createTableRow();
  if (
    isInputValid(firstNameInput.value) &&
    isInputValid(secondNameInput.value) &&
    isPhoneInputValid(phoneInput.value)
  ) {
    tableRow.appendChild(addInputToTd(firstNameInput.value));
    tableRow.appendChild(addInputToTd(secondNameInput.value));
    tableRow.appendChild(addInputToTd(phoneInput.value));
    tableRow.appendChild(createRemoveButton());
  }
  return tableRow;
}

function createTableRow() {
  const tr = document.createElement("tr");
  tr.className = "person-info";
  return tr;
}

function addInputToTd(input) {
  const td = createTableData();
  td.innerText = input;
  return td;
}

function createRemoveButton() {
  const el = createTableData();
  const link = document.createElement("a");
  link.className = "remove-item";
  link.innerHTML = '<i class="fa fa-remove"></i>';
  el.appendChild(link);
  return el;
}

function createTableData() {
  const el = document.createElement("td");
  el.className = "text-center";
  return el;
}
function resetInputs() {
  firstNameInput.value = "";
  secondNameInput.value = "";
  phoneInput.value = "";
}
function removeTableRow(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    removeListElement(e.target.closest(".person-info"));
  }
}

function removeListElement(el) {
  el.remove();
}

function isInputValid(str) {
  return str.trim() !== "" && isNaN(str);
}
// Проверку на разные форматы телефона(регулярное выражение)  украл с stack overflow(вроде как не обязательное условие было)
function isPhoneInputValid(str) {
  const regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  return (valid = regex.test(str));
}
//  Valid formats
//  (123) 456-7890
// +(123) 456-7890
// +(123)-456-7890
// +(123) - 456-7890
// +(123) - 456-78-90
// 123-456-7890
// 123.456.7890
// 1234567890
// +31636363634
// 075-63546725
