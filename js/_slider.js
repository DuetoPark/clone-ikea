var recommandationsSlider = tns({
  container: '.recommendations .slider-list',
  items: 2.5,
  loop: false,
  controlsContainer: '.recommendations .slider-controls',
  navPosition: 'bottom',
  gutter: '20',
  slideBy: 2,
  edgePadding: 10,
  responsive: {
    600: {
      items: 3.43,
      slideBy: 3,
      edgePadding: 32,
    },
    900: {
      items: 4.1,
      slideBy: 4,
    },
  },
})

const withSlider = tns({
  container: '.slider-group .with .slider-list',
  items: 2.5,
  loop: false,
  controlsContainer: '.slider-group .with .slider-controls',
  gutter: '20',
  slideBy: 2,
  edgePadding: 10,
  responsive: {
    600: {
      items: 3.43,
      slideBy: 3,
      edgePadding: 32,
    },
    900: {
      items: 4.1,
      slideBy: 4,
    },
  },
})

const matchSlider = tns({
  container: '.slider-group .match .slider-list',
  items: 2.5,
  loop: false,
  controlsContainer: '.slider-group .match .slider-controls',
  gutter: '20',
  slideBy: 2,
  edgePadding: 10,
  responsive: {
    600: {
      items: 3.43,
      slideBy: 3,
      edgePadding: 32,
    },
    900: {
      items: 4.1,
      slideBy: 4,
    },
  },
})

const moreSlider = tns({
  container: '.slider-group .more .slider-list',
  items: 2.5,
  loop: false,
  controlsContainer: '.slider-group .more .slider-controls',
  gutter: '20',
  slideBy: 2,
  edgePadding: 10,
  responsive: {
    600: {
      items: 3.43,
      slideBy: 3,
      edgePadding: 32,
    },
    900: {
      items: 4.1,
      slideBy: 4,
    },
  },
})
