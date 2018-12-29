$(document).ready(function() {

    // For the sticky navigation: 
    $('.js--projects').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px;'
        })

    // This kind of a function works well for scrolling on buttons, but it throws to the top of the page when used in sticky navigation:
    // $('.js--scroll-to-projects').click(function () {
    //     $('html, body').animate({ scrollTop: $('.js--projects').offset().top }, 0);
    // });

    // Scroll on navigation links:
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    // Animation on hovering over linked images:
    $('.js--pulse').hover(function () {
        $('.js--pulse').addClass('animated rubberBand');
    }, function() {
        $('.js--pulse').removeClass('animated rubberBand');
    });

    $('.js--github').hover(function () {
        $('.js--github').addClass('animated pulse');
    }, function () {
        $('.js--github').removeClass('animated pulse');
        });

    $('.js--demo').hover(function () {
        $('.js--demo').addClass('animated pulse');
    }, function () {
        $('.js--demo').removeClass('animated pulse');
    });

    // Animation on scroll:
    $('.js--wp-fadeInDown').waypoint(function (direction) {
        $('.js--wp-fadeInDown').addClass('animated fadeInDown');
    }, {
        offset: '90%'
    });

    $('.js--wp-fadeInUp').waypoint(function (direction) {
        $('.js--wp-fadeInUp').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    // Mobile navigation: 
    $('.js--nav-icon').click(function () {
        var nav = $('.main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        if (icon.hasClass('ion-md-menu')) {
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-menu');
        } else {
            icon.addClass('ion-md-menu');
            icon.removeClass('ion-md-close');
        }
    })

})