console.log('restaurant');
import loadHome from "./load-home";
import loadMenu from "./load-menu";

loadHome();
// loadMenu();

function renderPage() {
    const homeBtn = document.querySelector(".home");
    const menuBtn = document.querySelector(".menu");
    const aboutBtn = document.querySelector(".about");
    const content = document.querySelector("#content");

    homeBtn.addEventListener("click", () => {
        content.innerHTML = '';
        loadHome();
    });

    menuBtn.addEventListener("click", () => {
        content.innerHTML = '';
        loadMenu();
    });

    aboutBtn.addEventListener("click", () => {
        content.innerHTML = '';
        loadAbout();
    });
}
renderPage();
