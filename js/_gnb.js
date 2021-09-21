const gnb = document.querySelector('.gnb');
const gnbMenu = document.querySelector('.gnb-menu button');
const main = document.querySelector('main');

let lastScrollTop = 0;
const coords = {
  gnb: {
    top: gnb.offsetTop,
    bottom: gnb.offsetTop + gnb.offsetHeight,
    height: gnb.offsetHeight,
  },
};

function fixGNB() {
  gnb.classList.add('is-fixed');
  main.style.paddingTop = coords.gnb.height + 'px';
}

function breakGNB() {
  gnb.classList.remove('is-fixed');
  gnb.classList.remove('is-up');
  gnb.classList.remove('is-down');
  main.style.paddingTop = '0px';
}

function downScrollGNB() {
  gnb.classList.add('is-down');
  gnb.classList.remove('is-up');
}

function upScrollGNB() {
  gnb.classList.add('is-up');
  gnb.classList.remove('is-down');
}

function scrollHandler() {
  let scrollTop = window.pageYOffset;

  if (scrollTop > coords.gnb.bottom) {
    fixGNB();

    if (scrollTop > lastScrollTop) {
      downScrollGNB();
    } else {
      upScrollGNB();
    }
  } else if (scrollTop <= coords.gnb.top) {
    breakGNB();
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

window.addEventListener('scroll', scrollHandler);
