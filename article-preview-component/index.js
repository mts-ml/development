const divLinks = document.querySelector('#div-links');
const divShare = document.querySelector('.share-icon');

function applyBackgroundColor() {
   if (window.matchMedia('(min-width: 992px)').matches) {
      divShare.style.backgroundColor = 'hsl(217, 19%, 35%)';
   } else {
      divShare.style.backgroundColor = 'hsl(212, 23%, 69%)';
   }
}

divShare.addEventListener('click', () => {
   if (divLinks.classList.contains('hide')) {
      divLinks.classList.replace('hide', 'share-container');
      applyBackgroundColor()
      divShare.classList.add('white-icon');
   } else {
      divLinks.classList.replace('share-container', 'hide');
      divShare.style.backgroundColor = 'hsl(210, 46%, 95%)';
      divShare.classList.remove('white-icon');
   }
});

// Adjust the background color according to the size of the screen.
window.addEventListener('resize', () => {
   if (!divLinks.classList.contains('hide')) {
      applyBackgroundColor();
   }
})
