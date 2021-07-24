const container = $(`.container`);
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
  container.empty();
  list.map(renderPhoto);
}
function renderPhoto(list) {
  let img = createImg(list);
  img.appendTo(container);
}

function createImg(photo) {
  let link = createLink(photo);
  let img = $(`<img/>`, {
    src: photo.thumbnailUrl,
    class: `rounded`,
    alt: photo.title,
    id: photo.id,
  });
  img.appendTo(link);
  return link;
}

function createLink(photo) {
  let link = $(`<a/>`);
  link.attr(`class`, `fancybox`);
  link.attr(`data-fancybox`, `gallery`);
  link.attr(`data-src`, photo.url);
  return link;
}
