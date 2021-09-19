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
