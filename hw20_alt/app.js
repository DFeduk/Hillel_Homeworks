const $container = $(`.container`);
const photoTemplate = $("#photoTemplate").html();
const MAIN_URL = `https://jsonplaceholder.typicode.com/photos?_limit=20`;

let photosList = [];

init();

function init() {
  fetchPhotos();
}

function fetchPhotos() {
  fetch(MAIN_URL)
    .then((resp) => resp.json())
    .then(setPhotos)
    .then(renderPhotos);
}

function setPhotos(list) {
  return (photosList = list);
}
function renderPhotos(list) {
  $container.html(list.map(getPhotoHtml).join("\n"));
}
function getPhotoHtml(photo) {
  return photoTemplate
    .replace("{{url}}", photo.url)
    .replace("{{thumbnailUrl}}", photo.thumbnailUrl)
    .replace("{{title}}", photo.title)
    .replace("{{id}}", photo.id);
}
