console.log('restaurant');
import loadHome from "./load-home";
import loadMenu from "./load-menu";
import loadAbout from "./load-about";
import './styles/main.css';
import restaurantLogo from './assets/restaurant-logo.svg';
import clockIcon from './assets/clock-icon.svg';


function renderPage() {
    const homeBtn = document.querySelector(".home");
    const menuBtn = document.querySelector(".menu");
    const aboutBtn = document.querySelector(".about");
    const content = document.querySelector("#content");
    
    loadAssets();
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

function loadAssets() {
    const logo = document.querySelector(".logo");
    logo.src = restaurantLogo;

    const clock = document.querySelector(".clock-icon");
    clock.src = clockIcon;
}


