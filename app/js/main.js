
// Header on mobile device
const headerMobile = document.querySelector('.header-mobile');

let sizeToTop = headerMobile.offsetTop;

window.addEventListener('resize', () => {

    let sizeToTop = headerMobile.offsetTop;

    window.addEventListener('scroll', () => headerController(sizeToTop));

});

window.addEventListener('scroll', () => headerController(sizeToTop));

function headerController(size) {
    if (headerMobile.offsetTop != size) {
        headerMobile.classList.add('header-mobile_scroll');
    } else {
        headerMobile.classList.remove('header-mobile_scroll');
    }
}



var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});