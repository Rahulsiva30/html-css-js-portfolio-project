function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    var copyrightElements = document.querySelectorAll('.auto-update-copyright-year');
    for (var i = 0; i < copyrightElements.length; i++) {
        copyrightElements[i].textContent = currentYear;
    }
});
