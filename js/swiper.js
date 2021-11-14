var swiper = new Swiper(".swiper-1", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      900: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      612: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      200: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    }
  });
  
  var swiper2 = new Swiper(".swiper-2", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});