console.log('restaurant');
import loadHome from "./load-home";
import loadMenu from "./load-menu";
import loadAbout from "./load-about";
import './styles/main.css';
import restaurantLogo from './assets/restaurant-logo.png';


function renderPage() {
    const homeBtn = document.querySelector(".home");
    const menuBtn = document.querySelector(".menu");
    const aboutBtn = document.querySelector(".about");
    const content = document.querySelector("#content");
    
    loadLogo();
    loadHome();

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

function loadLogo() {
    const logo = document.querySelector(".logo");
    logo.src = restaurantLogo;
}
