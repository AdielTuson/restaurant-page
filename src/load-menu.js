export default function loadMenu() {
    const content = document.querySelector('#content');
}

function createDishElement(dish) {
    const dishElement = document.createElement('div');
    const dishImg = document.createElement('img');
    const dishName = document.createElement('p');
    const dishDescription = document.createElement('p');

    dishImg.src = dish.imgSrc;
    dishName = dish.name;
    dishDescription = dish.description

    dishElement.append(dishImg, dishName, dishDescription);

    return dishElement;
}

function createDish(imgSrc, name, description) {
    return { imgSrc, name, description }
}

export {createDish, createDishElement};