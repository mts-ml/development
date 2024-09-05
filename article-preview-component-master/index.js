
const wrapperDiv = document.querySelector('#div1');
const linksDiv = document.querySelector('#div2');

const imageDiv1 = document.querySelector('div.image1');
const imageDiv2 = document.querySelector('div.image2')

imageDiv1.addEventListener('click', () => {
   wrapperDiv.classList.replace('wrapper', 'hide')
   linksDiv.classList.replace('hide', 'links')
})

imageDiv2.addEventListener('click', () => {
   linksDiv.classList.replace('links', 'hide')
   wrapperDiv.classList.replace('hide', 'wrapper')
})
