$(document).ready(function() {

    $('.js--scroll-to-projects').click(function () {
        $('html, body').animate({ scrollTop: $('.js--projects').offset().top }, 0);
    });


})