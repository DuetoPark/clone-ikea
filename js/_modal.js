const overlay = document.querySelector('.overlay');

const modal = {
  menu: document.querySelector('.sidebar'),
  search: document.querySelector('.search-modal'),
  carousel: document.querySelector('.carousel-modal'),
  sizeOption: document.querySelector('.size-option-modal'),
  colorOption: document.querySelector('.color-option-modal'),
  description: document.querySelector('.description-modal'),
  size: document.querySelector('.size-modal'),
  review: document.querySelector('.review-modal'),
};

const triggers = document.querySelectorAll('*[data-trigger]');
const closeButtons = document.querySelectorAll('.close-button');

function openModal() {
  modal[this.dataset.trigger].classList.add('is-active');
  overlay.classList.add('is-active');
}

function closeModal() {
  modal[this.dataset.close].classList.remove('is-active');
  overlay.classList.remove('is-active');
}

triggers.forEach((trigger) => {
  trigger.addEventListener('click', openModal.bind(trigger));
});

closeButtons.forEach((close) => {
  close.addEventListener('click', closeModal.bind(close));
});
