const ALBUM_ITEM_CLASS = `.list-group-item`;
export default class AlbumsView {
  constructor(config = {}) {
    this.config = config;
    this._$album = this.initView();
  }
  initView() {
    return $('<div id="list-group"></div>').on(
      "click",
      ALBUM_ITEM_CLASS,
      this.onAlbumClick.bind(this)
    );
  }

  onAlbumClick(e) {
    return this.config.onItemClick($(e.target).attr("data-id"));
  }

  renderAlbums(list) {
    this._$album.html(list.map(this.getAlbumHtml).join("\n"));
  }
  getAlbumHtml(list) {
    return `<a href="#" class="list-group-item list-group-item-action" data-id="${list.id}">${list.title}</a>`;
  }
}
