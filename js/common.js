'use strict';

  $(function(){
    $("#slick_slider").slick({
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      dots: true,
      prevArrow: '<i class="fas fa-chevron-left fa-3x slide-arrow prev-arrow"></i>',
      nextArrow: '<i class="fas fa-chevron-right fa-3x slide-arrow next-arrow"></i>',
      centerMode: true,
      centerPadding: "20px",
      draggable: true,
      responsive: [
        {
         breakpoint: 600, 
         settings: {
          centerMode: false,
          centerPadding: "0",
          prevArrow: false,
          nextArrow:false
        }
        }
      ]
    });
  });

  // contents_2
  $(function(){
    $("#cont2_slider").slick({
      autoplay: true,
      infinite: false,
      autoplaySpeed: 3000,
      speed: 1000,
      prevArrow: '<i class="fas fa-chevron-left fa-2x slide-arrow prev-arrow"></i>',
      nextArrow: '<i class="fas fa-chevron-right fa-2x slide-arrow next-arrow"></i>',
      draggable: true,
      slidesToShow: 2,
      responsive: [
        {
         breakpoint: 600,
         settings: {
           slidesToShow:1
         }
        }
      ]
    });
  });

  // contents_3
  $(function(){
    $("#cont3_slider").slick({
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      infinite: false,
      prevArrow: '<i class="fas fa-chevron-left fa-2x slide-arrow prev-arrow"></i>',
      nextArrow: '<i class="fas fa-chevron-right fa-2x slide-arrow next-arrow"></i>',
      draggable: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
         breakpoint: 600,
         settings: {
           slidesToShow:1,
           centerMode: true,
           centerPadding: "20px",
           arrows: false
         }
        }
      ]
    });
  });

  // contents_4
  $(function(){
    $("#cont4_slider").slick({
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      infinite: false,
      prevArrow: '<i class="fas fa-chevron-left fa-2x slide-arrow prev-arrow"></i>',
      nextArrow: '<i class="fas fa-chevron-right fa-2x slide-arrow next-arrow"></i>',
      draggable: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
         breakpoint: 600, 
         settings: {
           slidesToShow:2
         }
        }
      ]
    });
  });

  // contents_5
  $(function(){
    $("#cont5_slider").slick({
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      infinite: false,
      prevArrow: '<i class="fas fa-chevron-left fa-2x slide-arrow prev-arrow"></i>',
      nextArrow: '<i class="fas fa-chevron-right fa-2x slide-arrow next-arrow"></i>',
      draggable: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
         breakpoint: 600, 
         settings: {
           slidesToShow:2
         }
        }
      ]
    });
  });

  // contents_7
  $(function(){
    function sliderSetting(){
        let width = $(window).width();
        if(width <= 600){
            $('.cont7_slider').not('.slick-initialized').slick({
              autoplay: true,
              autoplaySpeed: 3000,
              speed: 1000,
              infinite: false,
              draggable: true,
              slidesToShow:1,
              centerMode: true,
              centerPadding: "20px"
                });
        } else {
            $('.slide.slick-initialized').slick('unslick');
        }
    }
    sliderSetting();
    $(window).resize(function(){
        sliderSetting();
    });
  });

  // contents_8  タブ切替表示
  $(function(){
    $('.tab').click(function(){
      if($(this).hasClass('is-active')){
        $(this).removeClass('is-active');
        $('.is-show').removeClass('is-show');
      } else{
          $('.is-active').removeClass('is-active');
          $(this).addClass('is-active');
          $('.is-show').removeClass('is-show');
          const index = $(this).index();
          $('.panel').eq(index).addClass('is-show');
      }
    });
  });

  // contents_9
  $(function(){
    $("#cont9_slider").slick({
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      infinite: false,
      prevArrow: '<i class="fas fa-chevron-left fa-2x slide-arrow prev-arrow"></i>',
      nextArrow: '<i class="fas fa-chevron-right fa-2x slide-arrow next-arrow"></i>',
      draggable: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
         breakpoint: 600, 
         settings: {
           slidesToShow:1,
           centerMode: true,
           centerPadding: "20px",
           arrows: false
         }
        }
      ]
    });
  });

  // contents_10
  $(function(){
    $("#cont10_slider").slick({
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      infinite: false,
      prevArrow: '<i class="fas fa-chevron-left fa-2x slide-arrow prev-arrow"></i>',
      nextArrow: '<i class="fas fa-chevron-right fa-2x slide-arrow next-arrow"></i>',
      draggable: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
         breakpoint: 600,
         settings: {
           slidesToShow:1,
           centerMode: true,
           centerPadding: "20px",
           arrows: false
         }
        }
      ]
    });
  });

  // contents_11
  $(function(){
    $("#cont11_slider").slick({
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      infinite: false,
      prevArrow: '<i class="fas fa-chevron-left fa-2x slide-arrow prev-arrow"></i>',
      nextArrow: '<i class="fas fa-chevron-right fa-2x slide-arrow next-arrow"></i>',
      draggable: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
         breakpoint: 600,
         settings: {
           slidesToShow:1,
           centerMode: true,
           centerPadding: "20px",
           arrows: false
         }
        }
      ]
    });
  });

  // contents_12
  $(function(){
  $("#cont12_slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: false,
    prevArrow: '<i class="fas fa-chevron-left fa-2x slide-arrow prev-arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right fa-2x slide-arrow next-arrow"></i>',
    draggable: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
       breakpoint: 600,
       settings: {
         slidesToShow:1,
         centerMode: true,
         centerPadding: "20px",
         arrows: false
       }
      }
    ]
  });
});
  
  // PAGETOP
  $(function(){
    let pagetop = $('#pagetop');
    // ボタン非表示
    pagetop.hide();
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
  });
    