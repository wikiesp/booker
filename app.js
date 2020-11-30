const burger = document.getElementById('hamburger');
const liright = document.getElementById('nav_hamburger');

burger.addEventListener('click', () => {
  liright.classList.toggle('show');
});
