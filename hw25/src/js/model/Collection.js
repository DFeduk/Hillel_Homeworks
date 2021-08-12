export default class Collection {
  constructor(albumsUrl, photosUrl) {
    this._url = albumsUrl;
    this._altUrl = photosUrl;
    this.list = [];
  }
  fetchAlbum() {
    return fetch(this._url).then((resp) =>
      resp.json().then((data) => (this.list = data))
    );
  }

  fetchPhotos(id) {
    return fetch(this._altUrl.replace(`{{ID}}`, id))
      .then((resp) => resp.json())
      .then((data) => (this.list = data));
  }
}
