const menuHamburguer = document.querySelector('.menu__hamburguer')

const nav = document.querySelector('#nav')

const header = document.querySelector('.menu')

const divPicture = header.querySelector('picture')

const iconX = document.querySelector('.menu__icon-x')

const images = document.querySelectorAll('.menu__bg')

const leftArrow = document.querySelector('.arrow__left')

const rightArrow = document.querySelector('.arrow__right')

let currentIndex = 0

const sections = document.querySelectorAll('.section')

let currentTextIndex = 0


menuHamburguer.addEventListener('click', () => {
   nav.classList.replace('hidden', 'menu__nav')

   divPicture.classList.add('menu__picture')
})


iconX.addEventListener('click', () => {
   nav.classList.replace('menu__nav', 'hidden')

   divPicture.classList.remove('menu__picture')
})


function updateImage() {
   images.forEach((img, index) => {
      if (index === currentIndex) {
         img.classList.add('active')
      } else {
         img.classList.remove('active')
      }
   })
}

function updateText() {
   sections.forEach((section, index) => {
      if (index === currentTextIndex) {
         section.classList.add('active')
      } else {
         section.classList.remove('active')
      }
   })
}

rightArrow.addEventListener('click', () => {
   currentIndex = (currentIndex + 1) % images.length
   updateImage()

   currentTextIndex = (currentTextIndex + 1) % sections.length
   updateText()
})

leftArrow.addEventListener('click', () => {
   currentIndex = (currentIndex - 1 + images.length) % images.length
   updateImage()

   currentTextIndex = (currentTextIndex - 1 + sections.length) % sections.length
   updateText()
})

updateImage()
updateText()


function checkViewportSize() {
   if (window.matchMedia('(min-width: 992px)').matches) {
      nav.classList.replace('hidden', 'menu__nav')
      divPicture.classList.remove('menu__picture')

   } else {
      nav.classList.replace('menu__nav', 'hidden')
   }
}

checkViewportSize()

// Monitor window resize
window.addEventListener('resize', checkViewportSize);
