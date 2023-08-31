// Toggle mobile navbar 

const navLinks = document.querySelector('.nav-links');
const navLinksItem = document.querySelectorAll('.nav-links-item');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
      navLinks.classList.toggle("show-menu");
});

navLinksItem.forEach(item =>{
  item.addEventListener('click', () => {
    navLinks.classList.remove('show-menu');
   
  });
});