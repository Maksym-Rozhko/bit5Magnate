import Swiper, { Navigation, Pagination, Scrollbar, Mousewheel } from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar, Mousewheel]);

const swiper = new Swiper('.swiper.rating__slider', {
    slidesPerView: 4.5,
    spaceBetween: 20,
    init: true,
    observer: true,

    navigation: {
        nextEl: '.slider__controls .rating__btns.swiper-button-next',
        prevEl: '.slider__controls .rating__btns.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      575: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      1440: {
        slidesPerView: 4.5,
        spaceBetween: 20,
      }
  },
});

new Swiper('.swiper.roadmap__slider', {
    slidesPerView: 3,
    spaceBetween: 115,
    speed: 500,
    mousewheel: true,

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      // hide: false,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 115,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 115,
      }
  },
});