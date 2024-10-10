const hamburguerButton = document.querySelector('.btn-hamburguer')

const closeButton = document.querySelector('.btn-close')

const hamburguerMenu = document.querySelector('.header__menu-hamburguer')

const media = window.matchMedia('(min-width: 48rem)')


function openMenu() {
   hamburguerMenu.classList.toggle('is-open')
   hamburguerButton.setAttribute('aria-expanded', 'true')

   hamburguerMenu.removeAttribute('style')
}

function closeMenu() {
   hamburguerMenu.classList.toggle('is-open')
   hamburguerButton.setAttribute('aria-expanded', 'false')

   setTimeout( () => {
      hamburguerMenu.removeAttribute('style')
   }, 500)

}


hamburguerButton.addEventListener('click', openMenu)

closeButton.addEventListener('click', closeMenu)


function checkViewportSize() {
   if (window.matchMedia('(max-width: 48rem)').matches) {
      hamburguerMenu.style.transition = 'none'
   } else {
      hamburguerMenu.style.transition = ''
   }
}

checkViewportSize()

window.addEventListener('resize', checkViewportSize);
