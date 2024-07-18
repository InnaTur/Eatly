$(function () {
  $('.burger-menu').click(function () {
    $(this).toggleClass('active');
    $('.nav-container').toggleClass('active');
  });

  $('.reviews-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 724,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


})