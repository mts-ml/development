const hamburguer = document.querySelector('.menu__hamburguer-img')

const nav = document.querySelector('#nav')

const iconX = nav.querySelector('.menu__icon-x')


hamburguer.addEventListener('click', () => {
   nav.classList.replace('hidden', 'menu__nav')
})

iconX.addEventListener('click', () => {
   nav.classList.replace('menu__nav', 'hidden')
})

function checkViewportSize() {
   if (window.matchMedia('(min-width: 992px)').matches) {
      nav.classList.replace('hidden', 'menu__nav')      
   } else {
      nav.classList.replace('menu__nav', 'hidden')
   }
}

checkViewportSize()

// Monitor window resize
window.addEventListener('resize', checkViewportSize);
