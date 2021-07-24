Fancybox.bind('[data-fancybox="gallery"]', {
  animated: false,
  showClass: false,
  hideClass: false,

  closeButton: "top",
  click: false,
  dragToClose: false,

  Carousel: {
    friction: 0,
    Panzoom: {
      touch: false,
    },

    Navigation: false,
  },

  Image: {
    zoom: false,
    wheel: false,
    click: false,
    fit: "contain-w",
  },

  Thumbs: {
    Carousel: {
      center: function () {
        return this.elemDimWidth > this.wrapDimWidth;
      },
    },
  },
});
