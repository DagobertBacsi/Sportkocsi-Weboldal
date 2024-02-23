$(function () {

    'use strict';



    function hoverImgCursor() {

        $('.move_img-cursor').each(function () {
            $(this).on('mousemove', function (e) {
                let x = e.offsetX;
                let y = e.offsetY;

                $(this).children('.move-img').css({ top: y + 'px', left: x + 'px' });
            });

            let dataHoverLink = $(this).data('link-img');
            $(this).children('.move-img').css({ 'background': 'url(img/link-hover/' + dataHoverLink + ')', 'background-size': 'cover', 'background-repeat': 'no-repeat', 'background-position': 'center center' });
        });

    }
    if ($(window).width() > 1054) {
        hoverImgCursor();
    }


    // ---- Split text plagin ---- //
    Splitting();


    // ---- AOS plagin ---- //
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });


    //add all link => <a target='_blank']></a> attr => rel="noopener", draggable="false"
    $("a[target='_blank']").attr({ "rel": "noopener", "draggable": "false" });


    // ---- anim load header ----//
    function pageLoad() {
        let tl = new TimelineMax({ paused: true });

        tl.staggerFrom(".logo, .nav__menu", 0.8, {
            y: 100,
            opacity: 0,
            ease: Expo.easeInOut
        }, "0.1", "+=0.5");
        tl.staggerFrom(".header__social-item, .header__qr", 0.8, {
            y: 100,
            opacity: 0,
            ease: Expo.easeInOut
        }, "0.1", "-=0.8");
        tl.staggerFrom($('.fon__wrapp > img'), 0.8, {
            x: 100,
            opacity: 0,
            ease: Expo.easeInOut
        }, "0.1", "-=0.5");
        tl.staggerFrom(".header_blink", 0.8, {
            y: 100,
            ease: Expo.easeInOut
        }, "0.01", "-=0.6");
        tl.staggerFrom(".header__blog-link", 0.8, {
            y: -100,
            opacity: 0,
            ease: Expo.easeInOut
        }, "0.1", "-=0.5");
        tl.staggerFrom(".header__scroll", 0.8, {
            y: -70,
            autoAlpha: 0,
            ease: Expo.easeInOut
        }, "0.1", "-=0.6");

        tl.reverse();
        $(document).ready(function () {
            tl.reversed(!tl.reversed())
        });
    }


    // ---- preloader ---- //
    $(document).ready(function () {
        setTimeout(function () {
            // $('.preloader').fadeOut(400);
            $('.preloader').addClass('active');
            pageLoad();

        }, 2200);
    });


    // ---- anim blink text ---- //
    // ---- 1 ---- //
    function animBlinkletter() {
        let letter_one = $(".letter_one").text().split('');
        $(".letter_one").text('');
        $.each(letter_one, function () {
            $(".letter_one").append('<span class="header_blink">' + this + '</span>');
        });

        // ---- 2 ---- //
        let letter_two = $(".letter_two").text().split('');
        $(".letter_two").text('');
        $.each(letter_two, function () {
            $(".letter_two").append('<span class="header_blink">' + this + '</span>');
        });
        // ---- 3 ---- //
        let letter_three = $(".letter_three").text().split('');
        $(".letter_three").text('');
        $.each(letter_three, function () {
            $(".letter_three").append('<span class="header_blink">' + this + '</span>');
        });
    }
    animBlinkletter();


    // ---- navigation menu ---- //
    function animMenu() {
        let tl = new TimelineMax({ paused: true });

        tl.to(".nav__menu", 0.8, {
            x: -100,
            autoAlpha: 0,
            ease: Expo.easeInOut
        });
        tl.to(".nav__popup", 1, {
            x: 0,
            ease: Expo.easeInOut
        }, "-=0.8");
        tl.to(".nav__popup-anim-bg", 1, {
            // left: 0,
            x: 0,
            ease: Expo.easeInOut
        }, "-=0.8");
        tl.staggerFrom(".nav__popup-link", 0.8, {
            y: 100,
            opacity: 0,
            ease: Expo.easeInOut
        }, "0.1", "-=0.3");
        tl.staggerFrom(".nav__menu-close", 0.8, {
            autoAlpha: 0, ease: Expo.easeOut
        }, "0.1", "-=1");

        tl.reverse();
        $(document).on("click", ".nav__menu", function () {
            $('body,html').addClass('active');
            tl.reversed(!tl.reversed());
        });
        $(document).on("click", ".nav__menu-close", function () {
            $('body,html').removeClass('active');
            tl.reversed(!tl.reversed());
        });
        $(document).on("click", ".nav__popup-link", function () {
            $('body,html').removeClass('active');
            tl.reversed(!tl.reversed());
        });
    }
    animMenu();


    // ---- script scroll menu ---- //
    function scrollMenu() {
        $("#menu").on("click", ".prevent_default", function (event) {
            event.preventDefault();
            let id = $(this).attr('href'),
                top = $(id).offset().top;
            setTimeout(() => {
                $('body,html').animate({ scrollTop: top }, 1000);
            }, 1100);
        });
    }
    scrollMenu();


    // ---- scroll dovn on click button_go ---- //
    function dovnClickButton() {
        $('.header__scroll').click(function (e) {
            e.preventDefault();
            let scroll = $('.about').offset().top;
            $('html, body').animate({ scrollTop: scroll + 80 }, 350);
        });
    }
    dovnClickButton();


    // ---- QR-code ---- //
    function animQRcode() {
        let tl = new TimelineMax({ paused: true });

        if ($(window).width() > 1140) {
            tl.to(".qr__popup", 0.8, {
                y: 0,
                ease: Expo.easeInOut
            });
            tl.to(".qr__popup-anim-bg", 1, {
                y: 0,
                ease: Expo.easeInOut
            }, "-=0.7");
        }
        if ($(window).width() < 1141) {
            tl.to(".qr__popup", 0.8, {
                x: 0,
                ease: Expo.easeInOut
            });
            tl.to(".qr__popup-anim-bg", 1, {
                x: 0,
                ease: Expo.easeInOut
            }, "-=0.7");
        }

        tl.staggerTo(".qr__img", 0.8, {
            y: 0,
            opacity: 1,
            ease: Expo.easeInOut
        }, "0.1", "-=0.3");
        tl.staggerTo(".qr__popup-wrapp h2", 0.8, {
            y: 0,
            opacity: 1,
            ease: Expo.easeInOut
        }, "0.1", "-=0.6");

        tl.staggerFrom(".qr__close", 0.8, {
            opacity: 0,
            ease: Expo.easeOut
        }, "0.1", "-=0.4");

        tl.reverse();
        $(document).on("click", ".header__qr", function () {
            $('body,html').addClass('active');
            tl.reversed(!tl.reversed());
        });
        $(document).on("click", ".qr__close", function () {
            $('body,html').removeClass('active');
            tl.reversed(!tl.reversed());
        });
    }
    animQRcode();


    // ---- button up ---- //
    function buttonUp() {
        $('.up').click(function () {
            var up = $('.header').offset().top;
            $('html, body').animate({ scrollTop: up }, 350);
        });

        $(window).scroll(function () {
            let scrollDock = $(document).scrollTop();
            let scrollWork = $('.work').offset().top;

            if (scrollDock + 80 >= scrollWork) {
                $('.up').fadeIn();
            } else {
                $('.up').fadeOut();
            }
        });
    }
    buttonUp();


    // ---- popup-services ---- //
    function animServ() {
        let tl = new TimelineMax({ paused: true });
        if ($(window).width() > 1140) {
            tl.to(".serv__popup", 0.8, {
                y: 0,
                ease: Expo.easeInOut
            });
            tl.to(".serv__popup-anim-bg", 1, {
                y: 0,
                ease: Expo.easeInOut
            }, "-=0.7");
        }
        if ($(window).width() < 1141) {
            tl.to(".serv__popup", 0.8, {
                x: 0,
                ease: Expo.easeInOut
            });
            tl.to(".serv__popup-anim-bg", 1, {
                x: 0,
                ease: Expo.easeInOut
            }, "-=0.7");
        }

        tl.staggerTo(".serv_title-anim", 0.8, {
            y: 0,
            opacity: 1,
            ease: Expo.easeInOut
        }, "0.1", "-=0.3");
        tl.staggerTo(".gsap_form-anim", 0.8, {
            y: 0,
            opacity: 1,
            ease: Expo.easeInOut
        }, "0.1", "-=0.6");

        tl.staggerFrom(".serv__close", 0.8, {
            opacity: 0,
            ease: Expo.easeOut
        }, "0.1", "-=0.4");

        tl.reverse();
        $(document).on("click", ".services__item", function () {
            $("body").css('overflow', 'hidden');
            $('.serv__popup').addClass('active');
            let dataName = $(this).attr('data-service');
            $('.serv__text').text(dataName);
            $('.serv__select').attr("value", dataName);
            $('.serv_line').addClass('active');
            tl.reversed(!tl.reversed());
        });
        $(document).on("click", ".serv__close", function () {
            $("body").css('overflow', 'visible');
            $('.serv__popup').removeClass('active');
            setTimeout(() => {
                $('.serv__text').text('');
                $('.serv_line').removeClass('active');
            }, 1300);
            $('.serv__select').attr("value", "");
            tl.reversed(!tl.reversed());
        });

    }
    if ($('#home_page').length === 1) {
        animServ();
    }


    // ---- form line animate ---- //
    function formLineAnimate() {
        $('.form__input')
            .focus(function () {
                $(this).prev('.input_line').addClass('active');
            })
            .focusout(function () {
                if ($(this).val() < 1) {
                    $(this).prev('.input_line').removeClass('active');
                }
            });
    }
    if ($('#home_page').length === 1) {
        formLineAnimate();
    }


    // ---- settings ackordion ---- //
    function settingsAckordion() {
        $('.steps__item').on('click', function () {
            let timeAnim = 250;
            $(this).find('.steps__head').toggleClass('active').next().slideToggle(timeAnim);
            $(this).css({ 'pointer-events': 'none' });
            setTimeout(function () {
                $(this).css({ 'pointer-events': 'auto' });
            }.bind(this), timeAnim);
        });
    }
    if ($('#home_page').length === 1) {
        settingsAckordion();
    }


    // ---- settings price hover ---- //
    function settingsPriceHover() {
        $(window).on('load resize', function () {
            let offset = $('.services__wrapp').offset().left;
            $('.services__bg').css({ 'left': - offset });
        });
    }
    if ($('#home_page').length === 1) {
        settingsPriceHover();
    }


    // ---- script popup-work ---- //
    function popapWorkActive() {
        $('html, body, .popup-work').addClass('active');
    }
    function popapWorkOpen1(callback) {
        //		$('.popup-work').addClass("active");

        setTimeout(function () {
            $('.popup-work__loading').addClass("active").fadeOut(1000);
            callback();
        }, 300);

    }
    function popapWorkOpen2() {
        setTimeout(function () {
            $('.popup-work__item').addClass("active");
        }, 100);
    }

    $('.work__link-elem').click(function (e) {
        e.preventDefault();
        popapWorkActive();

        let dataTitle = $(this).attr("data-title");
        let dataImg = $(this).attr("data-img");
        $('.popup-work__title h2').text(dataTitle);
        let workInfo = $(this).next(".popup-work__desc").html();
        $('.popup-work .popup-work__desc').append(workInfo);
        $('.popup-work__img img').attr({
            "src": "img/work/" + dataImg + "",
            "alt": dataImg
        }).on('load', function () {
            popapWorkOpen1(popapWorkOpen2);
            //			$('.popup-work__loading').addClass("active").fadeOut();
            //			popapWorkOpen2();
        });
    });

    $('.popup-work__close').click(function () {
        $('.popup-work__img img').attr({
            "src": "img/work/",
            "alt": ""
        });
        $('html, body, .popup-work, .popup-work__item').removeClass("active");
        $('.popup-work .popup-work__desc').empty();
        $('.popup-work__loading').removeClass("active").fadeIn();
    });

    $('.popup-work__mobile-info').click(function () {
        $('.popup-work__item:nth-child(2)').toggleClass("active_info");
    });

});


// ---- form ---- //
$(document).ready(function () {
    $("#form__contact").submit(function () {
        $.ajax({
            type: "POST",
            url: "contact.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input,textarea").val("");
            $(".form__popup").addClass("active");
            $("#form__contact .input_line").removeClass("active");
            $("#form__contact").trigger("reset");
        });
        return false;
    });

    $('.form__close').click(function () {
        $(".form__popup").removeClass("active");
    });
});

$(document).ready(function () {
    $("#form__serv").submit(function () {
        $.ajax({
            type: "POST",
            url: "serv.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input,textarea").val("");
            $(".form__popup").addClass("active");
            $("#form__serv .input_line").removeClass("active");
            $(".serv__popup").removeClass("active");
            $("#form__serv").trigger("reset");
        });
        return false;
    });

    $('.form__close').click(function () {
        $(".form__popup").removeClass("active");
    });
});
