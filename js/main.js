$(function() {
    const nav = $('.nav');
    var scrollPrev = 0;
    $(window).scroll(function() {
        var scrolled = $(this).scrollTop();

        if (scrolled > 50 && scrolled > scrollPrev) {
            nav.addClass('nav--hidden');
        } else {
            nav.removeClass('nav--hidden');
        }

        scrollPrev = scrolled;
    })

    const navMobile = $('.nav-mobile');
    $('.hamburger').click(function() {
        navMobile.removeClass('nav-mobile--hidden');
    })
    $('.nav-mobile__close').click(function() {
        navMobile.addClass('nav-mobile--hidden')
    })
})