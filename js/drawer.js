const drawer = document.querySelector('.drawer')
const footerDrawer = document.querySelector('.footer-drawer')
const desc = document.querySelector('.description-info')
let open = false

function openDrawerHandler(e) {
  if (e.target.tagName === 'BUTTON') {
    const className = e.target.dataset.drawerOpen || e.target.dataset.open
    const target = document.querySelector(`.${className}`)

    target.classList.toggle('is-open')

    if (className === 'desc-hidden') {
      e.target.textContent = open ? '자세히 보기' : '간단히 보기'
      open = open ? false : true
    }
  }
}

drawer.addEventListener('click', openDrawerHandler)
footerDrawer.addEventListener('click', openDrawerHandler)
desc.addEventListener('click', openDrawerHandler)
