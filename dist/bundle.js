/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/restaurant-interior.jpg
const restaurant_interior_namespaceObject = __webpack_require__.p + "restaurant-interior.jpg";
;// CONCATENATED MODULE: ./src/assets/bar.jpg
const bar_namespaceObject = __webpack_require__.p + "bar.jpg";
;// CONCATENATED MODULE: ./src/load-home.js




function loadHome() {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    const pageImg = document.createElement('img');
    const pageText = document.createElement('p');
    const barImg = document.createElement('img');

    header.classList.add("home-header");
    pageImg.classList.add('page-image');
    pageText.classList.add('home-text');
    barImg.classList.add('page-image');

    header.textContent = "Adiel's Restaurant, Where Every Meal is a Masterpiece";
    pageImg.src = restaurant_interior_namespaceObject;
    pageText.textContent = "Welcome to Adiel's, where culinary excellence meets elegant ambiance. Located in the heart of the city, Adiel's specializes in high-quality kosher meat dishes, meticulously crafted by our expert chefs. Each plate is a fusion of traditional flavors and modern flair, designed to delight your palate. \n\nOur sophisticated interior and attentive service create the perfect setting for any occasion, whether a special celebration or an intimate dinner.\n\nComplement your meal with selections from our extensive variety of fine wines and drinks, curated to enhance your dining experience. Join us at Adiel's, where every meal is a masterpiece and every visit is a celebration of taste and luxury.";
    barImg.src = bar_namespaceObject;

    content.appendChild(header);
    content.appendChild(pageImg);
    content.appendChild(pageText);
    content.appendChild(barImg);
}

;// CONCATENATED MODULE: ./src/assets/steak.jpg
const steak_namespaceObject = __webpack_require__.p + "steak.jpg";
;// CONCATENATED MODULE: ./src/assets/hamburger.jpg
const hamburger_namespaceObject = __webpack_require__.p + "hamburger.jpg";
;// CONCATENATED MODULE: ./src/assets/salmon.jpg
const salmon_namespaceObject = __webpack_require__.p + "salmon.jpg";
;// CONCATENATED MODULE: ./src/assets/potato.jpg
const potato_namespaceObject = __webpack_require__.p + "potato.jpg";
;// CONCATENATED MODULE: ./src/assets/sushi.jpg
const sushi_namespaceObject = __webpack_require__.p + "sushi.jpg";
;// CONCATENATED MODULE: ./src/assets/menu-divider.png
const menu_divider_namespaceObject = __webpack_require__.p + "menu-divider.png";
;// CONCATENATED MODULE: ./src/assets/empanada.jpg
const empanada_namespaceObject = __webpack_require__.p + "empanada.jpg";
;// CONCATENATED MODULE: ./src/assets/asado.jpg
const asado_namespaceObject = __webpack_require__.p + "asado.jpg";
;// CONCATENATED MODULE: ./src/assets/moltenChocolateCake.jpg
const moltenChocolateCake_namespaceObject = __webpack_require__.p + "moltenChocolateCake.jpg";
;// CONCATENATED MODULE: ./src/assets/cremeBrulee.jpg
const cremeBrulee_namespaceObject = __webpack_require__.p + "cremeBrulee.jpg";
;// CONCATENATED MODULE: ./src/load-menu.js














function loadMenu() {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.append(
        createMenuHeader(),
        createMenuDivider(),
        createDishElement(potato), 
        createDishElement(steak),
        createDishElement(empanada),
        createDishElement(asado),
        createDishElement(hamburger),
        createDishElement(salmon),
        createDishElement(sushi),
        createDishElement(moltenChocolateCake),
        createDishElement(cremeBrulee),
        createMenuDivider(),
    );
    content.appendChild(menu);

}

function createMenuHeader() {
    const header = document.createElement('h1');
    header.textContent = 'Our Menu';
    header.classList.add('menu-header');
    return header;
}

function createMenuDivider() {
    const divider = document.createElement('img');
    divider.src = menu_divider_namespaceObject;
    divider.classList.add('divider');
    return divider;
}

function createDishElement(dish) {
    const dishElement = document.createElement('div');
    const dishImg = document.createElement('img');
    const dishName = document.createElement('p');
    const dishDescription = document.createElement('p');


    dishImg.src = dish.imgSrc;
    dishName.textContent = dish.name;
    dishDescription.textContent = dish.description

    dishElement.append(dishImg, dishName, dishDescription);

    dishElement.classList.add('dish');

    return dishElement;
}

function createDish(imgSrc, name, description) {
    return { imgSrc, name, description }
}

const potato = createDish(potato_namespaceObject, "Roasted Potatoes", "Crispy on the outside and tender on the inside, our Roasted Potatoes are seasoned with aromatic herbs and spices. The perfect complement to any main course.");

const steak = createDish(steak_namespaceObject, "Premium rib-eye steak", "Succulent, tender, and richly marbled, our Rib-Eye Steak is expertly grilled to perfection. Served with gourmet sauces, it's a luxurious treat for true meat lovers.");

const hamburger = createDish(hamburger_namespaceObject, "Adiel's Burger", "Juicy, flavorful, and perfectly seasoned, our Hamburger is grilled to perfection. Served with fresh toppings and gourmet sauces, it's a classic delight for burger lovers");

const salmon = createDish(salmon_namespaceObject, "Grilled Salmon", "Perfectly grilled and tender, our Salmon is seasoned with a blend of herbs and spices. Served with a side of fresh vegetables, it's a delightful and healthy option for seafood enthusiasts.");

const sushi = createDish(sushi_namespaceObject, "Sushi Tray", "A beautifully arranged selection of fresh, high-quality sushi, including nigiri, sashimi, and rolls. Perfectly balanced flavors and textures, crafted to delight sushi enthusiasts.");

const empanada = createDish(empanada_namespaceObject, "Empanada", "Golden and flaky pastry filled with savory ingredients. Our Empanadas are handcrafted with a variety of fillings, offering a delightful burst of flavor in every bite.");

const asado = createDish(asado_namespaceObject, "Asado", "A traditional Argentine barbecue featuring a selection of perfectly grilled meats. Our Asado is a carnivore's delight, served with chimichurri sauce and a side of fresh salad.");

const moltenChocolateCake = createDish(moltenChocolateCake_namespaceObject, "Molten Chocolate Cake", "A decadent dessert with a gooey, molten center. Our Molten Chocolate Cake is served warm with a scoop of vanilla ice cream, making it the perfect sweet ending to your meal.");

const cremeBrulee = createDish(cremeBrulee_namespaceObject, "Creme Brulee", "A classic French dessert with a rich, creamy custard base topped with a contrasting layer of hard caramel. Our Crème Brûlée is elegantly finished with a sprinkle of fresh berries.");
;// CONCATENATED MODULE: ./src/assets/set-table-wine.jpg
const set_table_wine_namespaceObject = __webpack_require__.p + "set-table-wine.jpg";
;// CONCATENATED MODULE: ./src/load-about.js


function loadAbout() {
    const content = document.querySelector("#content");
    const about = document.createElement('div');
    about.classList.add('about');

    about.append(
        createHeader(), 
        createInfo(), 
        createImg(),
    );

    content.appendChild(about);
};

function createHeader() {
    const headerElement = document.createElement('h1');
    headerElement.textContent = "About Us";
    headerElement.classList.add('about-header')

    return headerElement;
}

function createInfo() {
    const aboutElement = document.createElement('p');
    aboutElement.textContent = "Welcome to Adiel's, where culinary excellence meets warm hospitality in an ambiance of refined elegance since 1998. Nestled by the serene waters of Dodo Lake, Adiel's offers an unparalleled dining experience that combines the richness of tradition with the freshness of modern cuisine.\n\n Our restaurant is renowned for its exceptional quality, with a special focus on our high-quality kosher meat dishes. Every cut of meat is carefully selected and expertly prepared to ensure a dining experience that delights even the most discerning palates. From our tender rib-eye steaks to our succulent burgers, each dish is crafted with passion and precision.\n\n But it's not just about the meat. At Adiel's, we offer a variety of delectable options, including fresh, flavorful seafood and exquisite vegetarian dishes. Our sushi trays are a feast for the eyes and the taste buds, and our side dishes, like our perfectly seasoned potato creations, provide the perfect complement to your meal.\n\n Accompanying our superb food is an extensive selection of beverages. Whether you're in the mood for a fine wine, a refreshing cocktail, or a premium non-alcoholic drink, our menu has something to satisfy every taste.\n\n The atmosphere at Adiel's is designed to make you feel at home while providing a touch of sophistication. Our interior is tastefully decorated, offering a cozy yet elegant setting for every occasion. Whether you are joining us for a romantic dinner, a family gathering, or a special celebration, our attentive staff is dedicated to ensuring your visit is memorable.\n\n At Adiel's, we believe in creating more than just a meal; we create moments. Moments filled with laughter, warmth, and the joy of exceptional dining. Come and discover why Adiel's is more than just a restaurant – it's a place where great food and great times come together.\n\n Experience the taste of excellence. Experience Adiel's";
    aboutElement.classList.add('about-text');

    return aboutElement;
}

function createImg() {
    const imgElement = document.createElement('img');
    imgElement.src = set_table_wine_namespaceObject;
    imgElement.classList.add('page-image');

    return imgElement;
}


;// CONCATENATED MODULE: ./src/assets/restaurant-logo.svg
const restaurant_logo_namespaceObject = __webpack_require__.p + "restaurant-logo.svg";
;// CONCATENATED MODULE: ./src/assets/clock-icon.svg
const clock_icon_namespaceObject = __webpack_require__.p + "clock-icon.svg";
;// CONCATENATED MODULE: ./src/index.js







if (false) {};

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
    logo.src = restaurant_logo_namespaceObject;

    const clock = document.querySelector(".clock-icon");
    clock.src = clock_icon_namespaceObject;
}



/******/ })()
;