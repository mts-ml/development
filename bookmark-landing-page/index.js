const hamburguerButton = document.querySelector('.btn-hamburguer')

const closeButton = document.querySelector('.btn-close')

const hamburguerMenu = document.querySelector('.header__menu-hamburguer')

const media = window.matchMedia('(min-width: 48rem)')

const sections = document.querySelectorAll('.section')

const links = document.querySelectorAll('.features__link')

const questions = document.querySelectorAll('.question__info')

const descriptions = document.querySelectorAll('.question__description')

const images = document.querySelectorAll('.question__img')

const emailInput = document.querySelector('.contact__email')

const emailForm = document.querySelector('#emailForm')

const emailRegex = /^[a-z][a-z0-9._*-]+[@][a-z0-9]+[.][a-z]/

const errorMessage = document.querySelector('.error')

const errorImg = document.querySelector('.contact__error-img')



function validateEmail() {
   let isEmailValid = false

   if (emailInput.value.length >= 10 && emailRegex.test(emailInput.value)) {
      isEmailValid = true
   }

   if (!isEmailValid) {
      errorMessage.classList.remove('valid')
      emailInput.style.backgroundColor = '#fdd'
      emailInput.style.border = '2px solid red'
      emailInput.style.outline = 'none'
      errorImg.classList.add('active')
      showError()
   } else {
      errorMessage.classList.add('valid')
      errorImg.classList.remove('active')
      emailInput.style.backgroundColor = 'hsl(105, 80%, 90%)'
      emailInput.style.border = '2px solid green'
      errorMessage.innerHTML = 'Email is valid'
   }

   return isEmailValid
}

emailInput.addEventListener('input', validateEmail)


function showError() {
   if (emailInput.value.trim().length <= 0) {
      errorMessage.textContent = "You need to enter an email address."
   } else if (!emailRegex.test(emailInput.value)) {
      errorMessage.textContent = "Make sure you enter a valid email, with '@' and domain"
   } else if (emailInput.value.length < 10) {
      errorMessage.textContent = `Email should be at least ${emailInput.minLength} characters, you entered ${emailInput.value.length}.`
   }
}


emailForm.addEventListener('submit', (e) => {   
   const isValidEmail = validateEmail()
   
   if (!isValidEmail) {
      e.preventDefault()
      errorMessage.style.opacity = '1'
      emailInput.focus()
      showError()
   }
})


emailInput.addEventListener('focus', () => {
   showError();
   errorMessage.style.opacity = '1'
})



questions.forEach((question, index) => {
   question.addEventListener('click', () => {

      const isActive = descriptions[index].classList.contains('active')

      for (const description of descriptions) {
         description.classList.remove('active')
      }

      for (const img of images) {
         img.classList.remove('active')
      }

      for (const quest of questions) {
         quest.setAttribute('aria-expanded', 'false')
      }

      if (!isActive) {
         descriptions[index].classList.add('active')
         images[index].classList.add('active')
         question.setAttribute('aria-expanded', 'true')
      }
   })
})



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

links.forEach((link, index) => {
   link.addEventListener('click', (event) => {

      // This is used so the link doesn't 'go' anywhere.
      // In this project, the href='##' so it's ok, I left for future reference.
      event.preventDefault()

      for (const section of sections) {
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
