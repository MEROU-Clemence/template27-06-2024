(function ($) {
    // Mobile Nav
    var MobNav = $('.navbar-toggler');
    MobNav.on('click', function () {
        $('.menu-mobile').toggleClass('menu-mobile-active');
        $('.navbar-toggler .btn-menu').toggleClass('d-none');
    });

    // Sous-menu
    $('.clic-sub-menu').on('click', function () {

        if ($(this).children('.sub-menu').hasClass('sub-menu-active')) {
            $('.clic-sub-menu .sub-menu').removeClass('sub-menu-active');
        } else {
            $('.clic-sub-menu .sub-menu').removeClass('sub-menu-active');
            $(this).children('.sub-menu').addClass('sub-menu-active');
        }
    });

    // Sous-menu langues
    $('.languages').on('click', function () {
        if ($(this).children('.dropdown-menu').hasClass('dropdown-menu-active')) {
            $('.languages .dropdown-menu').removeClass('dropdown-menu-active');
        } else {
            $('.languages .dropdown-menu').removeClass('dropdown-menu-active');
            $(this).children('.dropdown-menu').addClass('dropdown-menu-active');
        }
    });

    // Sous-menu meteo
    $('.meteo').on('click', function () {
        if ($(this).children('.dropdown-menu').hasClass('dropdown-menu-active-meteo')) {
            $('.meteo .dropdown-menu').removeClass('dropdown-menu-active-meteo');
        } else {
            $('.meteo .dropdown-menu').removeClass('dropdown-menu-active-meteo');
            $(this).children('.dropdown-menu').addClass('dropdown-menu-active-meteo');
        }
    });
})(jQuery);

$(document).ready(function () {
    $('.home-slider_img').owlCarousel({
        loop: true,
        rewind: true,
        autoplay: true,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        margin: 0,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                items: 1,
            },
            440: {
                touchDrag: true,
                mouseDrag: true,
                items: 2,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                items: 3,
            },
            1024: {
                touchDrag: true,
                mouseDrag: true,
                items: 3,
            },
            1220: {
                touchDrag: false,
                mouseDrag: true,
                items: 3,
            },
        }
    });
    $('.offers-specials-carousel').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        items: 1,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            480: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,

            },
            1400: {
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
        }
    });
    $('.giftcard-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        items: 1,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        margin: 20,
        autoHeight: true,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            480: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,

            },
            1400: {
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
        }
    });
    $('.vouchers-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        items: 1,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        margin: 20,
        autoHeight: true,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            480: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,

            },
            1400: {
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
        }
    });
    $('.detail-slider_img').owlCarousel({
        loop: true,
        rewind: true,
        autoplay: true,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        margin: 0,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                items: 1,
            },
            440: {
                touchDrag: true,
                mouseDrag: true,
                items: 2,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                items: 3,
            },
            1024: {
                touchDrag: true,
                mouseDrag: true,
                items: 3,

            },
            1220: {
                touchDrag: false,
                mouseDrag: true,
                items: 3,
            },
        }
    });
});