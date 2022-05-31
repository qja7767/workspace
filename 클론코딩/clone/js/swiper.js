var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'fade', // fade효과
  speed: 1500, // 트랜지션
  loop: true, //무한반복
  autoplay: { //자동 플레이
  delay: 3500, //4초 딜레이
  },

});

var swiper = new Swiper(".swiper-container2", {
  slidesPerView: 3,
  spaceBetween: 0,
  slidesPerGroup: 3,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
