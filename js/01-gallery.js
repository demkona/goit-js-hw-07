import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const galleryCard = onGalleryContainer(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', galleryCard);


function onGalleryContainer(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');
};

galleryContainer.addEventListener('click', onGalleryCardClick);

function onGalleryCardClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {
        onShow: (instance) => { window.addEventListener('keydown', openInstance) },
        onClose: (instance) => { window.removeEventListener('keydown', openInstance) }
    });

    instance.show()

    function openInstance(event) {
        if (event.code === 'Escape') {
            instance.close()
        }
    }
}

