console.log('restaurant');
import loadHome from "./load-home";
import loadMenu from "./load-menu";

loadHome();
loadMenu();

function renderPage() {
    const homeBtn = document.querySelector(".home");
    const menuBtn = document.querySelector(".menu");
    const aboutBtn = document.querySelector(".about");

    homeBtn.addEventListener("click", () => {

    })
}

