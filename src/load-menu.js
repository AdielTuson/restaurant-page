export default function loadMenu() {
    const content = document.querySelector('#content');
    content.append(createDishElement(potato));
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

const potato = createDish("Potato.com", "Potato", "This is the best potato in the world! in fact it is so great you will eat 100000. it comes with hdhd owie fdhoeinf oiend. kkk snisnis didnidneeo dind");