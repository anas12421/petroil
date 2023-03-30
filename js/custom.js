$(function(){

  "use strict"

  $("backtotop i").on('click',function(){
    $("html,body").animate({
      scrollTop:0
    },1200)
  })

  $(window).on('scroll',function(){
    let scrolling=$(this).scrollTop()

    if(scrolling > 50){
      $("backtotop i").fadeIn(500)
    }else{
      $(".backtotop i").fadeOut(500)
    }

    if(scrolling > 20){
      $(".menu").addClass("menu_ex")
    }else{
      $(".menu").removeClass("menu_ex")
    }
  })



  $('.blog_main_slider').slick({
    speed: 1500,
    autoplay:true,
    utoplaySpeed: 1600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.brand_main_slider').slick({
    speed: 1000,
    autoplay:true,
    utoplaySpeed: 1800,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  $('.card_main_slder').slick({
    speed: 1500,
    autoplay:true,
    utoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });









})
