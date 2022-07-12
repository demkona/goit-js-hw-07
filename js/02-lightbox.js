import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryCard = onGalleryContainer(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', galleryCard);


function onGalleryContainer(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" /></a>`
    }).join('');
};

galleryContainer.addEventListener('click', onGalleryCardClick);

function onGalleryCardClick(event, lightbox) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: "250",
});

