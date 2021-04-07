const mobileMenuIcon = document.querySelector('button#hamburger-menu-icon')
mobileMenuIcon.addEventListener('click', function () {
    let menu = document.querySelector('#mobile-nav');
    menu.classList.toggle('show');
    console.log(menu)
});