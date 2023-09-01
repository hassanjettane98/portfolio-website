//setup the menu
const links = document.querySelector(".links");
const nav = document.querySelector(".nav");

nav.addEventListener("click", function() {
    if (window.innerWidth <= 992) {
        if (links.style.display === "block") {
            links.style.display = "none";
        } else {
            links.style.display = "block";
        }
    }
});
