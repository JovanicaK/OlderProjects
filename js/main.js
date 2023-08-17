var $nav = $('.nav');
var opened = 'opened';
var $header = $('.header')

function navigation() {
  var $toggle = $('.toggle');

  $toggle.on('click', function() {
    $nav.slideToggle()
  })
}

function navScrool() {
  var windowSize = 768;

  $(window).on('scroll', function() {
    if ($(this).width()<windowSize) {
      $nav.removeAttr('style');
    }
  })
}

var $link = $('.footer-sm-item');
    var index = $link.index();
            var sm1 = 'sm1-bg-color';
            var sm2 = 'sm2-bg-color';
            var sm3 = 'sm3-bg-color';
            var sm4 = 'sm4-bg-color';
            var sm5 = 'sm5-bg-color';
            var sm = [sm1,sm2,sm3,sm4,sm5];
    function sMediaHover(index,sm) {
        $link.each(function() {
            $link.eq(index).on('mouseover',function() {
                $(this).removeClass('colors').addClass(sm);
            })
            $link.eq(index).on('mouseout',function() {
                $(this).removeClass(sm).addClass('colors');
            })
        })
    }
    function sMedia() {
      sMediaHover(0,sm1);
      sMediaHover(1,sm2);
      sMediaHover(2,sm3);
      sMediaHover(3,sm4);
      sMediaHover(4,sm5);
    };

function backToTop() {
  var $btn = $('.backtotop-btn');
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 150) {
        $btn.fadeIn(300);
      } else {
        $btn.fadeOut(300);
      }
    });
    $btn.on('click', function() {
      $('html, body').animate({
        scrollTop: 0
      }, '300');
    });
}

navigation();
navScrool();
sMedia();
backToTop();

