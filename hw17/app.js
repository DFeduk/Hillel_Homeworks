const photoCollection = document.querySelector(`.photo-collection`);
const pagination = document.querySelector(`.pagination`);
const modal = document.querySelector(`.modal-item`);

const photoItemTemplate =
  document.querySelector("#modalItemTemplate").innerHTML;

let MAIN_URL = `https://jsonplaceholder.typicode.com/photos`;

let photosList = [];

photoCollection.addEventListener(`click`, onImageClick);
pagination.addEventListener(`click`, onPaginationClick);

function onImageClick(e) {
  if (e.target.classList.contains(`photo`)) {
    getFullPicture(e.target.dataset.src);
  }
}

function getFullPicture(url) {
  modal.innerHTML = generateModal(url);
}
function generateModal(url) {
  return photoItemTemplate.replace("{{url}}", url);
}

function onPaginationClick(e) {
  if (e.target.classList.contains(`page`)) {
    getAlbumPhotos(e.target.id);
    savePageToLocalStorage(e.target.id);
  }
}

init();

function init() {
  getPhotos().then(getFirstAlbumPhotos).then(restorePageFromLocalStorage);
}
function getPhotos() {
  return fetch(MAIN_URL)
    .then((resp) => resp.json())
    .then((data) => (photosList = data))
    .then((data) => {
      getPagination(data);
      return data;
    });
}

function getPagination(photosList) {
  let pages = photosList.length / 50;
  for (let index = 1; index <= pages; index++) {
    createPagination(index);
  }
}

function createPagination(index) {
  link = document.createElement(`a`);
  link.className = `page`;
  link.href = `#`;
  link.innerHTML = index;
  link.id = index;
  pagination.appendChild(link);
}

function renderPhotos(list) {
  photoCollection.innerHTML = ``;
  list.forEach((item) => renderPhoto(item));
}
function renderPhoto(photo) {
  const li = document.createElement(`li`);
  li.className = `photo-wrapper`;
  const img = document.createElement(`img`);
  img.id = photo.id;
  img.className = `photo`;
  img.alt = photo.title;
  img.src = photo.thumbnailUrl;
  img.setAttribute(`data-src`, photo.url);
  li.appendChild(img);

  photoCollection.appendChild(li);
}

function getFirstAlbumPhotos(data) {
  if (data.length) {
    getAlbumPhotos(data[0].id);
  }
}
function getAlbumPhotos(number) {
  let newPhotoList = photosList.filter((item) => item.albumId === +number);
  renderPhotos(newPhotoList);
}

function savePageToLocalStorage(pageId) {
  localStorage.setItem(`pageId`, JSON.stringify(pageId));
}
function restorePageFromLocalStorage() {
  const data = localStorage.getItem(`pageId`);
  if (data !== null) {
    getAlbumPhotos(JSON.parse(data));
  }
}
