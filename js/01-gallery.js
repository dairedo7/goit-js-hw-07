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
let instance = basicLightbox.create(
    `<img src="" width="800" height="600">`,
    {
        onShow: instance => {
            window.addEventListener('keydown', handleEscModalClose)
            console.log(instance);
        },
        onClose: instance => {
            window.removeEventListener('keydown', handleEscModalClose)
            console.log(instance);
        },

    });;
gallery.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (evt.target.className === "gallery__image") {
        const srcLink = evt.target.dataset.src;
        instance.element().querySelector('img').src = srcLink;
        instance.show();
    }
    return;
});

function handleEscModalClose(evt) {

    if (evt.code === "Escape") {
        instance.close();
        return;
    }
    console.log(evt);
}
