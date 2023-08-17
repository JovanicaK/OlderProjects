function nav() {
    var $toggle = $('.toggle');
    var $nav = $('.nav');
    var opened = 'opened';
    var $header = $('.header');

    $toggle.on('click',function() {
        $header.toggleClass (opened);
        $nav.slideToggle();
    })
}

function readMore() {
    $('.card-link').on('mouseover', function(){
        $(this).animate({fontSize: 20},2000)
    })
}

function littleCards() {
    $('.card-text-holder').on('mouseenter',function(){
        $(this).addClass('active');
    })
    $('.card-text-holder').on('mouseleave',function(){
        $(this).removeClass('active');
    })
}

function slider() {
    $('.slider').slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false
    });
}



nav();
readMore();
littleCards();
slider();