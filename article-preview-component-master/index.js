
const wrapperDiv = document.querySelector('div.wrapper');
const linksDiv = document.querySelector('div.hide');
const imageDiv = document.querySelector('div.image');

imageDiv.addEventListener('click', () => {
   wrapperDiv.classList.replace('wrapper', 'hide');
   linksDiv.classList.add('links')
   linksDiv.classList.replace('links', 'hide')
})
