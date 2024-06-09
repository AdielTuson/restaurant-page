import restaurantImage from './assets/restaurant-interior.jpg';
import barImgSrc from './assets/bar.jpg';


export default function loadHome() {
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
    pageImg.src = restaurantImage;
    pageText.textContent = "Welcome to Adiel's, where culinary excellence meets elegant ambiance. Located in the heart of the city, Adiel's specializes in high-quality kosher meat dishes, meticulously crafted by our expert chefs. Each plate is a fusion of traditional flavors and modern flair, designed to delight your palate. \n\nOur sophisticated interior and attentive service create the perfect setting for any occasion, whether a special celebration or an intimate dinner.\n\nComplement your meal with selections from our extensive variety of fine wines and drinks, curated to enhance your dining experience. Join us at Adiel's, where every meal is a masterpiece and every visit is a celebration of taste and luxury.";
    barImg.src = barImgSrc;

    content.appendChild(header);
    content.appendChild(pageImg);
    content.appendChild(pageText);
    content.appendChild(barImg);
}
