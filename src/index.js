import loadHome from "./load-home";
import loadMenu from "./load-menu";
import loadAbout from "./load-about";
import './styles/main.css';
import restaurantLogo from './assets/restaurant-logo.svg';
import clockIcon from './assets/clock-icon.svg';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
};

console.log('bob');

function renderPage() {
    const homeBtn = document.querySelector("#home-btn");
    const menuBtn = document.querySelector("#menu-btn");
    const aboutBtn = document.querySelector("#about-btn");
    const content = document.querySelector("#content");
    
    loadAssets();
    loadHome();

    homeBtn.addEventListener("click", () => {
        content.innerHTML = '';
        loadHome();
        window.scrollTo(0, 0);
    });

    menuBtn.addEventListener("click", () => {
        content.innerHTML = '';
        loadMenu();
        window.scrollTo(0, 0);
    });

    aboutBtn.addEventListener("click", () => {
        content.innerHTML = '';
        loadAbout();
        window.scrollTo(0, 0);
    });
}
renderPage();

function loadAssets() {
    const logo = document.querySelector(".logo");
    logo.src = restaurantLogo;

    const clock = document.querySelector(".clock-icon");
    clock.src = clockIcon;
}


