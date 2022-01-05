import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector(".gallery");

//Gallery object implemented into the html code
function galleryContainer(arr) {
    const divEl = arr.map((item) =>
        `
    <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image"
            src="${item.preview}"
            data-src="${item.original}"
            alt="${item.desciption}"
            />
        </a>
    </div>
    `).join("");
    return divEl;
};
const theArr = galleryContainer(galleryItems);

gallery.innerHTML = theArr;

//Delegation on click to the common ancestor 'gallery'
let instance;
gallery.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (evt.target.className === "gallery__image") {
        const srcLink = evt.target.dataset.src;
        // instance.textContent = ` <img src="${srcLink}" width="800" height="600">`
        // let theInstance = document.querySelector("img").innerHTML = srcLink;
        // instance.element(querySelector(img).src = srcLink); // Такой вариант не дает нужного результата
        // На видео не понятно четко, где скобки, а где точка.
        instance = basicLightbox.create(`
    <img src="${srcLink}" width="800" height="600">
`);
        instance.show();
        onModalShow();

    }
    return;
});

function handleEscModalClose(evt) {

    if (evt.code === "Escape") {
        instance.close();
        onModalClose();
    }
    console.log(evt);

}

function onModalShow() {
    document.addEventListener("keydown", handleEscModalClose);
}

function onModalClose() {
    document.removeEventListener("keydown", handleEscModalClose);
}

console.log(gallery);