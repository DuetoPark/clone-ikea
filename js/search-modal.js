const searchModal = document.querySelector('.search-modal')
const searchBarInput = document.querySelector(
  '.gnb-searchbar .input-group input'
)

const SCREEN_SIZE = 700
const PADDING_VALUE = 12

function handleLocation(event) {
  const target = event.currentTarget
  const screenWidth = target.innerWidth

  if (screenWidth < SCREEN_SIZE) {
    searchModal.style.top = 0
    searchModal.style.left = 0
    searchModal.style.width = '100%'

    return
  }

  const inputRect = searchBarInput.getBoundingClientRect()
  const inputTop = inputRect.top
  const inputX = inputRect.x
  const inputWidth = inputRect.width

  searchModal.style.top = `${inputTop - PADDING_VALUE}px`
  searchModal.style.left = `${inputX - PADDING_VALUE}px`
  searchModal.style.width = `${inputWidth + PADDING_VALUE * 2}px`
}

window.addEventListener('load', handleLocation)
window.addEventListener('resize', handleLocation)
