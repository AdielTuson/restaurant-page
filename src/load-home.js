import restaurantImage from './assets/restaurant-interior.jpg';


export default function loadHome() {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    const pageImg = document.createElement('img');
    const pageText = document.createElement('p');

    header.classList.add("home-header");
    pageImg.classList.add('home-image');
    pageText.classList.add('home-text');

    header.textContent = "Adiel's Restaurant, Where Every Meal is a Masterpiece";
    pageImg.src = restaurantImage;
    pageText.textContent = "In a lovely spot on the bank of 'dodo-lake' lies a homey and lovely restaurant. In our restaurant you can find a lot of special dishes, including the famous 'Adiel's Havita'. In a lovely spot on the bank of 'dodo-lake' lies a homey and lovely restaurant. In our restaurant you can find a lot of special dishes, including the famous 'Adiel's Havita'.";

    content.appendChild(header);
    content.appendChild(pageImg);
    content.appendChild(pageText);
}
