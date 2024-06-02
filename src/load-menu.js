export default function loadMenu() {
    const content = document.querySelector('#content');
    content.append(createDishElement(potato));
}

function createDishElement(dish) {
    const dishElement = document.createElement('div');
    const dishImg = document.createElement('img');
    const dishName = document.createElement('p');
    const dishDescription = document.createElement('p');
    // const content = document.querySelector('#content');


    dishImg.src = dish.imgSrc;
    dishName.textContent = dish.name;
    dishDescription.textContent = dish.description

    dishElement.append(dishImg, dishName, dishDescription);

    // content.append(dishElement);

    return dishElement;
}

function createDish(imgSrc, name, description) {
    return { imgSrc, name, description }
}

const potato = createDish("Potato.com", "Potato", "This is the best potato in the world!");