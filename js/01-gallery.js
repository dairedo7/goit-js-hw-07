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
        instance = basicLightbox.create(`
    <img src="${srcLink}" width="800" height="600">
`);
        instance.show();
        handleEscModalClose();
    }

    return;
});

const handleEscModalClose = () => {
    window.addEventListener('keydown', (evt) => {
        if (evt.code === "Escape") {
            instance.close();
        }
    })
}

console.log(gallery);




// const galleryEls = galleryItems.map((item) =>
//     `< div class="gallery__item" >
//      <a class="gallery__link" href="${item.original}">
//         <img class="gallery__image"
//         data-source="${item.original}"
//         src="${item.preview}"
//         alt="${item.description}"
//         />
//      </a>
// </div>
//     `
// ).join("");

// gallery.innerHTML = galleryEls;

// //Delegation of the click events on img to the common ancestor - gallery
// let instance;

// gallery.addEventListener('click', (evt) => {
//     // body.classList.add("modal-open");
//     evt.preventDefault();

//     if (evt.target.className === "gallery__image") {
//         const srcImgLink = evt.target.dataset.source;
//         instance = basicLightbox.create(`
//     <img src="${srcImgLink}" width="800" height="600">
// `);
//         instance.show();
//         handlerEscModalClose();
//     }
//     return;
// });

// function handlerEscModalClose() {
//     window.addEventListener('keydown', (evt) => {
//         if (evt.code === 'Escape') {
//             instance.close();
//         };
//     });
// }

