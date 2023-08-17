var $nav = $ ('.nav');
var opened = 'opened';
var $header = $('.header')

function navigation() {
  var $toggle = $('.toggle');

  $toggle.on('click', function() {
    $header.toggleClass (opened);
    $nav.slideToggle ()
  })
}

function navScrool() {
  var windowSize = 768;

  $(window).on('scroll', function() {
    if ($(this).width()<windowSize) {
      $nav.removeAttr ('style');
      $header.removeClass (opened);
    }
  })
}

function bannerSlider() {
  $('.the-slider').slick( {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: false,
    nextArrow: false
  });
}

function mobiSlider() {
  var windowSize = 767;
  
  $(window).on('load',function() {
    if ($(this).width() < windowSize) {
      $('.slider').slick( {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      })
    }
  })
}

navigation();
navScrool();
bannerSlider();
mobiSlider();
