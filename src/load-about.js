export default function loadAbout() {
    const content = document.querySelector("#content");
    const header = createHeader("About Us");
    const info = createInfo("In 1998..........");
    const img = createImg("img.com");

    content.append(header, info, img);
};

function createHeader(headerText) {
    const headerElement = document.createElement('h3');
    headerElement.textContent = headerText;

    return headerElement;
}

function createInfo(infoText) {
    const aboutElement = document.createElement('p');
    aboutElement.textContent = infoText;

    return aboutElement;
}

function createImg(imgSrc) {
    const imgElement = document.createElement('img');
    imgElement.src = imgSrc;

    return imgElement;
}

