const hamburguerButton = document.querySelector('.btn-hamburguer')

const closeButton = document.querySelector('.btn-close')

const hamburguerMenu = document.querySelector('.header__menu-hamburguer')

const media = window.matchMedia('(min-width: 48rem)')

const sections = document.querySelectorAll('.section')

const links = document.querySelectorAll('.features__link')



// Wanted to make with classic for and forEach()

// for (let i = 0; i < links.length; i++) {
//    links[i].addEventListener('click', (e) => {
//       e.preventDefault()

//       for (let section = 0; section < sections.length; section++) {
//          sections[section].classList.remove('active')
//       }

//       for (let i = 0; i < links.length; i++) {
//          links[i].classList.remove('selected')
//       }

//       sections[i].classList.add('active')

//       links[i].classList.add('selected')
//    })
// }

links.forEach( (link, index) => {
   link.addEventListener('click', (event) => {

      // This is used so the link doesn't 'go' anywhere.
      // In this project, the href='##' so it's ok, I left for future reference.
      event.preventDefault()

      for (let section of sections) {
         section.classList.remove('active')
      }
      
      links.forEach(link => link.classList.remove('selected'))

      sections[index].classList.add('active')

      link.classList.add('selected')
   })
})


function openMenu() {
   hamburguerMenu.classList.toggle('is-open')
   hamburguerButton.setAttribute('aria-expanded', 'true')

   hamburguerMenu.removeAttribute('style')
}

function closeMenu() {
   hamburguerMenu.classList.toggle('is-open')
   hamburguerButton.setAttribute('aria-expanded', 'false')

   setTimeout(() => {
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


sections[0].classList.add('active')
links[0].classList.add('selected')
