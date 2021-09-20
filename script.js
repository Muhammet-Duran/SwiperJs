const btnmenu = document.querySelector(".btn-menu");
const nav = document.querySelector(".nav");
btnmenu.addEventListener("click",function(){
    nav.classList.toggle("mostrar");
  
})


var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });