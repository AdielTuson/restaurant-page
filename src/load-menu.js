export default function loadMenu() {
    const content = document.querySelector('#content');
}

function createDish() {
    const dishElement = document.createElement('div');
    const dishImg = document.createElement('img');
    const dishName = document.createElement('p');
    const dishDescription = document.createElement('p');

    dishElement.append(dishImg, dishName, dishDescription);

    return dishElement;
}