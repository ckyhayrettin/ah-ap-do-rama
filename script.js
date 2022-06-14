const navIcon = document.querySelector('.nav-icon')
const links = document.querySelector('.nav-links')

navIcon.addEventListener('click', function () {
    links.classList.toggle("show");
});