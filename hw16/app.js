const photoCollection = document.querySelector(`.photo-collection`);
let photosList = [];

init();
function init() {
  fetchPhotos();
}
function fetchPhotos() {
  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1`).then(
    (resp) => {
      resp
        .json()
        .then((photos) => (photosList = photos))
        .then(renderPhotos);
    }
  );
}

function renderPhotos(list) {
  list.forEach((item) => renderPhoto(item));
}
function renderPhoto(photo) {
  const li = document.createElement(`li`);
  li.className = "photo";

  const img = document.createElement(`img`);
  img.id = photo.id;
  img.alt = photo.title;
  img.src = photo.url;
  img.setAttribute(`albumid`, photo.albumId);
  li.appendChild(img);

  photoCollection.appendChild(li);
}
