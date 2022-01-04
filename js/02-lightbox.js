import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector(".gallery");
const galleryEls = galleryItems.map((item) =>
    `<li>
     <a class="gallery__item" href="${item.original}">
        <img class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
        />
     </a>
</li>
`
).join("");

gallery.insertAdjacentHTML("beforeend", galleryEls);

//Initialization of SimpleLightBox library
let lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionPosition: "bottom", captionDelay: 250 });

console.log(gallery);
