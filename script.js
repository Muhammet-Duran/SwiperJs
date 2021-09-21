$(document).ready(function(){



  var galleryThumbs1 = new Swiper('.gallery-thumbs-1', {
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

    thumbs: {
      swiper: galleryThumbs1
    }

  });
  var galleryThumbs2 = new Swiper('.gallery-thumbs-2', {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var gallery2 = new Swiper('.gallery-2', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,

    thumbs: {
      swiper: galleryThumbs2
    }

  });
  var galleryThumbs3 = new Swiper('.gallery-thumbs-3', {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });



  var gallery3 = new Swiper('.gallery-3', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,

    thumbs: {
      swiper: galleryThumbs3
    }

  });

  //Kategori secme
  const item =$(".list-area .list-content .list-item ");
  item.click(function(){
    const index =$(this).data("slide");
    $(this).addClass("active").siblings().removeClass("active")
   
    $(".content-slider-swiper[data-slide ="+ index +"]").addClass("active").siblings().removeClass("active");
  })


})


