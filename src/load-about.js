import setTableImgSrc from './assets/set-table-wine.jpg';

export default function loadAbout() {
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
    imgElement.src = setTableImgSrc;
    imgElement.classList.add('page-image');

    return imgElement;
}

