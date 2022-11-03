function toggleMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuClose = document.querySelector(".menu-toggle-close");

    menuToggle.addEventListener("click", function() {
        mobileMenu.style.right = "0";
    })

    menuClose.addEventListener("click", function() {
        mobileMenu.style.right = "-400px";
    })
}

function init() {
    toggleMenu();
}
  
window.addEventListener("load", function () {
    init();
});