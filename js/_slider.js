var recommandationsSlider = tns({
  container: '.recommandations .slider-list',
  items: 2.5,
  loop: false,
  controlsContainer: '.recommandations .slider-controls',
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
      items: 4.3,
    },
  },
})
