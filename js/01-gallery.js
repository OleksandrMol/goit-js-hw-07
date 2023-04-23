import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulGallery = document.querySelector(".gallery");
const imgMark = createImgPlate(galleryItems);

ulGallery.insertAdjacentHTML('afterbegin', imgMark);
ulGallery.addEventListener('click', onZomm);

function createImgPlate(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
            </a>
        </li>`
    }).join('');
}

function onZomm(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
        return
    }

    const imgBig = evt.target.dataset.source

    document.addEventListener("keydown", closeEsc)

    const instance = basicLightbox.create(`
    <img src="${imgBig}" width="800" height="600">`, {
        onClose: () => {document.removeEventListener("keydown", closeEsc)}
    })

    instance.show()

    function closeEsc(evt) {
        if (evt.code === "Escape") {
            instance.close()
        }
   return
    }
 
}

console.log(galleryItems);
