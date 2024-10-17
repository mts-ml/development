const hamburguerButton = document.querySelector('.btn')

const navMenu = document.querySelector('.header__list')


hamburguerButton.addEventListener('click', () => {
   const visible = navMenu.getAttribute('data-visible')

   if (visible === 'false') {
      navMenu.setAttribute('data-visible', 'true')
      hamburguerButton.setAttribute('aria-expanded', 'true')
   } else {
      navMenu.setAttribute('data-visible', 'false')
      hamburguerButton.setAttribute('aria-expanded', 'false')

   }
})
