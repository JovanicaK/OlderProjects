function dropDown() {
    $('.nav-item').on('mouseover',function() {
        $(this).addClass('active')
    })
    $('.nav-item').on('mouseout',function() {
        $(this).removeClass('active')
    })
    $('.dropdown-list-item').on('mouseover',function() {
        $(this).addClass('active-drop');
    })
    $('.dropdown-list-item').on('mouseout',function() {
        $(this).removeClass('active-drop');
    })
}

function colorCards() {
    $(window).on('load',function() {
        var $card = $('.card');
        $card.each(function() {
        var index=$(this).index();

        if(index==0) {
            $card.eq(index).find('.card-inner').addClass('bg-color-grey-svg');
            $('.card-inner').eq(index).on('mouseover', function() {
                $(this).addClass('hover-inner').find('.card-icon').css('background-color','#97a9bd');
            })
            $('.card-inner').eq(index).on('mouseout', function() {
                $(this).removeClass('hover-inner').find('.card-icon').css('background-color','#fff');
            })
        }
        else if(index==1) {
            $card.eq(index).find('.card-inner').addClass('bg-color-purple-svg');
            $('.card-inner').eq(index).on('mouseover', function() {
                $(this).addClass('hover-inner').find('.card-icon').css('background-color','#a298bd');
            })
            $('.card-inner').eq(index).on('mouseout', function() {
                $(this).removeClass('hover-inner').find('.card-icon').css('background-color','#fff');
            })
        }
        else if(index==2) {
            $card.eq(index).find('.card-inner').addClass('bg-color-brown-svg');
            $('.card-inner').eq(index).on('mouseover', function() {
                $(this).addClass('hover-inner').find('.card-icon').css('background-color','#bda697');
            })
            $('.card-inner').eq(index).on('mouseout', function() {
                $(this).removeClass('hover-inner').find('.card-icon').css('background-color','#fff');
            })
        }
        else {
            $card.eq(index).find('.card-inner').addClass('bg-color-green-svg');
            $('.card-inner').eq(index).on('mouseover', function() {
                $(this).addClass('hover-inner').find('.card-icon').css('background-color','#97bdab');
            })
            $('.card-inner').eq(index).on('mouseout', function() {
                $(this).removeClass('hover-inner').find('.card-icon').css('background-color','#fff');
            })
        }
        })
    })
}


function hoverCard2() {
    $('.card-section').find('.card2-holder').on('mouseover', function() {
        $(this).addClass('hoverlink');
    })
    $('.card-section').find('.card2-holder').on('mouseout', function() {
        $(this).removeClass('hoverlink');
    })
}

function hoverSixCardSection() {
    $('.card6').on('mouseover', function() {
        $(this).find('.card-inner').removeClass('grey').addClass('hover-card');
    })
    $('.card6').on('mouseout', function() {
        $(this).find('.card-inner').removeClass('hover-card').addClass('grey');
    })
}

function canvas() {
    $('.graph').pieChart();
}

function contactItemColor() {
    var $contactItem = $('.contact-item');
    $contactItem.each(function() {
        var index=$(this).index();
        var $this = $(this);

        if(index==0) {
            $contactItem.eq(index).find('.contact-item-icon').addClass('bg-color-purple');
            $contactItem.eq(index).on('mouseover', function() {
                $this.css('background-color','#a298bd').addClass('hover-contact-item').find('.contact-item-icon').removeClass('bg-color-purple').find('svg').css('fill','#a298bd');
            })
            $contactItem.eq(index).on('mouseout', function() {
                $this.removeClass('hover-contact-item').css('background-color','#fff').find('.contact-item-icon').addClass('bg-color-purple').find('svg').css('fill','#fff');
            })
        }
        else if(index==1) {
            $contactItem.eq(index).find('.contact-item-icon').addClass('bg-color-brown');
            $contactItem.eq(index).on('mouseover', function() {
                $this.css('background-color','#bda697').addClass('hover-contact-item').find('.contact-item-icon').removeClass('bg-color-brown').find('svg').css('fill','#bda697').closest('.contact-item').find('a').removeClass('.grey');
            })
            $contactItem.eq(index).on('mouseout', function() {
                $this.removeClass('hover-contact-item').css('background-color','#fff').find('.contact-item-icon').addClass('bg-color-brown').find('svg').css('fill','#fff');
            })
        }
        else {
            $contactItem.eq(index).find('.contact-item-icon').addClass('bg-color-green');
            $contactItem.eq(index).on('mouseover', function() {
                $this.css('background-color','#97bdab').addClass('hover-contact-item').find('.contact-item-icon').removeClass('bg-color-green').find('svg').css('fill','#97bdab');
            })
            $contactItem.eq(index).on('mouseout', function() {
                $this.removeClass('hover-contact-item').css('background-color','#fff').find('.contact-item-icon').addClass('bg-color-green').find('svg').css('fill','#fff');
            })
        }
    })
}

function sMediaHover() {
    var $link = $('.footer-sm-item');

        $link.each(function() {
            var index = $(this).index();
            var $this = $(this);

        if (index==0) {
            $link.eq(index).on('mouseover',function() {
                $this.removeClass('bg-color-dark').addClass('facebook-bg-color');
            })
            $link.eq(index).on('mouseout',function() {
                $this.removeClass('facebook-bg-color').addClass('bg-color-dark');
            })
        }
        else if (index==1) {
            $link.eq(index).on('mouseover',function() {
                $this.removeClass('bg-color-dark').addClass('google-bg-color');
            })
            $link.eq(index).on('mouseout',function() {
                $this.removeClass('google-bg-color').addClass('bg-color-dark');
            })
        }
        else if (index==2) {
            $link.eq(index).on('mouseover',function() {
                $this.removeClass('bg-color-dark').addClass('linkedin-bg-color');
            })
            $link.eq(index).on('mouseout',function() {
                $this.removeClass('linkedin-bg-color').addClass('bg-color-dark');
            })
        }
        else if (index==3) {
            $link.eq(index).on('mouseover',function() {
                $this.removeClass('bg-color-dark').addClass('twitter-bg-color');
            })
            $link.eq(index).on('mouseout',function() {
                $this.removeClass('twitter-bg-color').addClass('bg-color-dark');
            })
        }
        else {
            $link.eq(index).on('mouseover',function() {
                $this.removeClass('bg-color-dark').addClass('wk-bg-color');
            })
            $link.eq(index).on('mouseout',function() {
                $this.removeClass('wk-bg-color').addClass('bg-color-dark');
            })
        }
    })
}

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


dropDown();
colorCards();
hoverCard2();
hoverSixCardSection();
canvas();
contactItemColor();
sMediaHover();
backToTop();