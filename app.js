var navItems = document.querySelector("#navItems");
var hamburgerMenu = document.querySelector("#hamburgerMenu");

console.log(hamburgerMenu);

function toggleHamburgerMenu() {
    hamburgerMenu.classList.toggle("active")
    navItems.classList.toggle("active")
}

hamburgerMenu.addEventListener("click" , toggleHamburgerMenu)