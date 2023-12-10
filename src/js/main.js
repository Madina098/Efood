$(function() {
  $('ul.popular__list').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.popular__content').removeClass('active').eq($(this).index()).addClass('active');
  });
  
});

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      pagination: {
        el: ".popular__pagination",
        clickable: true,
      },
       navigation: {
        nextEl: ".popular__next",
        prevEl: ".popular__prev",
      },
    });

     var swiper2 = new Swiper(".mySwiper2", {
      navigation: {
        nextEl: ".review__info-next",
        prevEl: ".review__info-prev",
      },
    });