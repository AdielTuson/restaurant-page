import restaurantImage from './assets/restaurant-interior.jpg';


export default function loadPage() {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    const pageImg = document.createElement('img');
    const pageText = document.createElement('p');

    header.textContent = "Adiel's Restaurant";
    pageImg.src = restaurantImage;
    pageText.textContent = "In a lovely spot on the bank of 'dodo-lake' lies a homey and lovely restaurant. In our restaurant you can find a lot of special dishes, including the famous 'Adiel's Havita'.";

    content.appendChild(header);
    content.appendChild(pageImg);
    content.appendChild(pageText);
}
