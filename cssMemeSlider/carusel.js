class_list = {
    CARUSEL_BUTTON: ".carusel-item",
    CARUSEL_TITLES: ".titles-carusel",
    CARUSEL_IMAGE: ".image-item",
    CARUSEL_CONTAINER: ".images",
}
const carusel = document.querySelectorAll(class_list.CARUSEL_BUTTON);
const caruselImage = document.querySelectorAll(class_list.CARUSEL_IMAGE);
const caruselTitle = document.querySelector(class_list.CARUSEL_TITLES);
const caruselImageContainerWidth = document.querySelector(class_list.CARUSEL_CONTAINER).clientWidth + 25;

// activateSlide(0);

function activateSlide(n) {


    activeImage = n;

    for (let i = 0; i < carusel.length; i++) {
        carusel[i].classList.remove("carusel-active");
    };
    
    moveImages(n);
    carusel[n].className += " carusel-active";
    caruselTitle.style.opacity = 0;
    setTimeout(() => {
        caruselTitle.innerHTML = caruselImage[n].children[0].alt;
        caruselTitle.style.opacity = 1;
    }, 200);


}

function moveImages(n) {
    for (let i = 0; i < caruselImage.length; i++) {
        caruselImage[i].style.transform = `translateX(${-caruselImageContainerWidth * n}px)`;
    }
}