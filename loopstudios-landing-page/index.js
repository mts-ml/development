const hamburguer = document.querySelector('.menu__hamburguer-img')

const nav = document.querySelector('#nav')

const iconX = nav.querySelector('.menu__icon-x')


hamburguer.addEventListener('click', () => {
   nav.classList.replace('hidden', 'menu__nav')
})

iconX.addEventListener('click', () => {
   nav.classList.replace('menu__nav', 'hidden')
})
