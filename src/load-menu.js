import steakImgSrc from './assets/steak.jpg';
import hamburgerImgSrc from './assets/hamburger.jpg';
import salmonImgSrc from './assets/salmon.jpg';
import potatoImgSrc from './assets/potato.jpg';
import sushiImgSrc from './assets/sushi.jpg';
import dividerImgSrc from './assets/menu-divider.png';
import empanadaImgSrc from './assets/empanada.jpg';
import asadoImgSrc from './assets/asado.jpg';
import moltenChocolateCakeImgSrc from './assets/moltenChocolateCake.jpg';
import cremeBruleeImgSrc from './assets/cremeBrulee.jpg';




export default function loadMenu() {
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
    divider.src = dividerImgSrc;
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

const potato = createDish(potatoImgSrc, "Roasted Potatoes", "Crispy on the outside and tender on the inside, our Roasted Potatoes are seasoned with aromatic herbs and spices. The perfect complement to any main course.");

const steak = createDish(steakImgSrc, "Premium rib-eye steak", "Succulent, tender, and richly marbled, our Rib-Eye Steak is expertly grilled to perfection. Served with gourmet sauces, it's a luxurious treat for true meat lovers.");

const hamburger = createDish(hamburgerImgSrc, "Adiel's Burger", "Juicy, flavorful, and perfectly seasoned, our Hamburger is grilled to perfection. Served with fresh toppings and gourmet sauces, it's a classic delight for burger lovers");

const salmon = createDish(salmonImgSrc, "Grilled Salmon", "Perfectly grilled and tender, our Salmon is seasoned with a blend of herbs and spices. Served with a side of fresh vegetables, it's a delightful and healthy option for seafood enthusiasts.");

const sushi = createDish(sushiImgSrc, "Sushi Tray", "A beautifully arranged selection of fresh, high-quality sushi, including nigiri, sashimi, and rolls. Perfectly balanced flavors and textures, crafted to delight sushi enthusiasts.");

const empanada = createDish(empanadaImgSrc, "Empanada", "Golden and flaky pastry filled with savory ingredients. Our Empanadas are handcrafted with a variety of fillings, offering a delightful burst of flavor in every bite.");

const asado = createDish(asadoImgSrc, "Asado", "A traditional Argentine barbecue featuring a selection of perfectly grilled meats. Our Asado is a carnivore's delight, served with chimichurri sauce and a side of fresh salad.");

const moltenChocolateCake = createDish(moltenChocolateCakeImgSrc, "Molten Chocolate Cake", "A decadent dessert with a gooey, molten center. Our Molten Chocolate Cake is served warm with a scoop of vanilla ice cream, making it the perfect sweet ending to your meal.");

const cremeBrulee = createDish(cremeBruleeImgSrc, "Creme Brulee", "A classic French dessert with a rich, creamy custard base topped with a contrasting layer of hard caramel. Our Crème Brûlée is elegantly finished with a sprinkle of fresh berries.");