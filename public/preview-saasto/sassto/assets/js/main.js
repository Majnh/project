(function ($) {
    "use strict";

    /***********
   mobile menu  js
   ************/
    $(".hamburger").on("click", function (event) {
        $(this).toggleClass("h-active");
        $(".main-nav").toggleClass("slidenav");
    });

    $(".header-home .main-nav ul li  a").on("click", function (event) {
        $(".hamburger").removeClass("h-active");
        $(".main-nav").removeClass("slidenav");
    });

    $(".main-nav .fl").on("click", function (event) {
        var $fl = $(this);
        $(this).parent().siblings().find(".sub-menu").slideUp();
        $(this)
            .parent()
            .siblings()
            .find(".fl")
            .addClass("flaticon-plus")
            .text("+");
        if ($fl.hasClass("flaticon-plus")) {
            $fl.removeClass("flaticon-plus")
                .addClass("flaticon-minus")
                .text("-");
        } else {
            $fl.removeClass("flaticon-minus")
                .addClass("flaticon-plus")
                .text("+");
        }
        $fl.next(".sub-menu").slideToggle();
    });

    /***********
   Preloder js
   ************/
    jQuery(window).on("load", function () {
        $(".preloader").delay(1600).fadeOut("slow");
    });

    /***********
   Sticky Navbar js
   ************/
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 20) {
            $(".header-area").addClass("sticky");
        } else {
            $(".header-area").removeClass("sticky");
        }
    });

    /***********
   Wow js Initialization
   ************/
    function wowAnimation() {
        new WOW({
            offset: 100,
            animateClass: "animated",
            mobile: true,
        }).init();
    }

    jQuery(window).on("load", function () {
        wowAnimation();
    });

    /***********
    pricing plan JS
   ************/
    function priceToggle() {
        const myAnnTables = document.getElementById("myAnnualTables");
        const myMonTables = document.getElementById("myMonthlyTables");

        myAnnTables.classList.toggle("plan-tables-hidden");
        myMonTables.classList.toggle("plan-tables-hidden");
    }
    var el = document.getElementById("priceSwitch");
    if (el) {
        el.addEventListener("click", priceToggle, false);
    }

    /***********
   All swiper slider JS
   ************/

    /*blog slider one */
    var blog_Slider_One = new Swiper(".blog-slider-one", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        centeredSlides: false,
        autoplay: {
            delay: 15000,
        },
        navigation: {
            nextEl: ".blog-next",
            prevEl: ".blog-prev",
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });

    /* service process slider */
    var service_Process_Slider = new Swiper(".service-process-slider", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        centeredSlides: false,
        autoplay: {
            delay: 15000,
        },
        navigation: {
            nextEl: ".blog-next",
            prevEl: ".blog-prev",
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
        },
    });

    /* testimonial slider and testimonial thumbs*/
    var testimonial_Thumbs = new Swiper(".testimonial-thumbs", {
        spaceBetween: 24,
        slidesPerView: 1,
        effect: "fade",
        speed: 1000,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        allowTouchMove: false,
        fadeEffect: {
            crossFade: true,
        },
    });
    var testimonial_Slider = new Swiper(".testimonial-slider", {
        spaceBetween: 24,
        slidesPerView: 1,
        speed: 1000,
        loop: true,
        pagination: {
            el: ".testi-pagination",
            clickable: true,
        },
        thumbs: {
            swiper: testimonial_Thumbs,
        },
    });

    /* testimonial slider two and testimonial thumbs two */
    var testimonial_Thumbs_Two = new Swiper(".testimonial-thumbs-two", {
        spaceBetween: 24,
        slidesPerView: 1,
        effect: "fade",
        speed: 1000,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        allowTouchMove: false,
        fadeEffect: {
            crossFade: true,
        },
    });
    var testimonial_Slider_Two = new Swiper(".testimonial-slider-two", {
        spaceBetween: 24,
        slidesPerView: 1,
        speed: 1000,
        loop: true,
        pagination: {
            el: ".testi-pagination-two",
            clickable: true,
        },
        thumbs: {
            swiper: testimonial_Thumbs_Two,
        },
    });

    /* Client slider */
    var company_Client_Slider = new Swiper(".company-clients-slider", {
        spaceBetween: 20,
        slidesPerView: 1,
        speed: 1000,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });

    /* service slider */
    var service_Slider = new Swiper(".service-slider", {
        spaceBetween: 20,
        slidesPerView: 1,
        speed: 1000,
        loop: false,
        centeredSlides: false,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 2.5,
            },
        },
    });

    /* testimonial slider three and testimonial thumbs three */
    var testimonial_Slider_Three = new Swiper(".testimonil-slider-three", {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 1,
        pagination: {
            el: ".testi-pagination-three",
            clickable: true,
        },
        loop: true,
        loopedSlides: 4,

        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
        },
    });

    var testimonial_Thumbs_Three = new Swiper(".testimonial-thumbs-three", {
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 3,
    });
    testimonial_Slider_Three.controller.control = testimonial_Thumbs_Three;
    testimonial_Thumbs_Three.controller.control = testimonial_Slider_Three;
})(jQuery);
