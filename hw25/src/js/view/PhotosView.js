export default class PhotosView {
  constructor() {
    this.$el = this.initView();
  }

  initView() {
    return $('<div id="photos"></div>');
  }

  renderPhotos(list) {
    this.$el.html(list.map((photo) => this.getPhotoHtml(photo)).join("\n"));
  }

  getPhotoHtml(list) {
    return `<img class="photo-item" src="${list.thumbnailUrl}" alt="${list.title}"/>`;
  }
}
