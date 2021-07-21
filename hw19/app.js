const stickerBox = $(`.sticker-box`);
const addBtn = $(`.btn`);

const MAIN_URL = `https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/`;
const STICKER_CLASS = `.sticker`;
const ICON_CLASS = `fa fa-remove`;

let stickerList = [];

init();

addBtn.on(`click`, addStickerBox);
stickerBox.click(onStickerBoxSubmit).focusout(editSticker);

function onStickerBoxSubmit(e) {
  let el = e.target;
  if ($(el).hasClass(ICON_CLASS)) {
    deleteSticker(e.target.closest(STICKER_CLASS).id);
  }
}
function editSticker(e) {
  let el = e.target;
  if ($(el).hasClass(`form-control`)) {
    let sticker = editStickerDescription(el);
    updateSticker(sticker);
  }
}

function init() {
  fetchStickers();
}

function fetchStickers() {
  fetch(MAIN_URL)
    .then((resp) => resp.json())
    .then(setStickers)
    .then(renderStickers);
}

function setStickers(data) {
  return (stickerList = data);
}
function renderStickers(data) {
  stickerBox.empty();
  data.map(renderSticker);
}
function renderSticker({ id, description }) {
  let div = createDiv(id);
  let textArea = createTextArea(description);
  div.append(textArea);
  let btn = createButton();
  div.append(btn);
  div.appendTo(stickerBox);
}

function createDiv(id) {
  let div = $(`<div/>`, { class: `sticker`, id: id });
  return div;
}
function createTextArea(description) {
  let textArea = $(`<textarea></textarea>`);
  textArea.addClass(`form-control rounded-0 border-0`);
  textArea.attr(`placeholder`, `Write something!`);
  textArea.html(description);
  return textArea;
}

function createButton() {
  let btn = $(`<a></a>`);
  btn.addClass(`remove-item`);
  let icon = $(`<i></i>`);
  icon.addClass(ICON_CLASS);
  btn.append(icon);
  return btn;
}

function addStickerBox() {
  const contact = getFormData();
  createSticker(contact);
}

function createSticker(sticker) {
  fetch(MAIN_URL, {
    method: `POST`,
    body: JSON.stringify(sticker),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then(addSticker);
}
function getFormData() {
  return {
    description: ``,
  };
}
function addSticker(sticker) {
  stickerList.push(sticker);
  renderStickers(stickerList);
}
function deleteSticker(id) {
  fetch(MAIN_URL + id, {
    method: `DELETE`,
  }).then(() => {
    stickerList = stickerList.filter((item) => item.id !== id);
    renderStickers(stickerList);
  });
}

function updateSticker(sticker) {
  fetch(MAIN_URL + sticker.id, {
    method: `PUT`,
    body: JSON.stringify(sticker),
    headers: {
      "Content-Type": "application/json",
    },
  });

  stickerList = stickerList.map((el) => (el.id != sticker.id ? el : sticker));
  renderStickers(stickerList);
}

function editStickerDescription(el) {
  let sticker = stickerList.find(
    (item) => item.id === el.closest(STICKER_CLASS).id
  );
  sticker.description = $(el).val();
  return sticker;
}
