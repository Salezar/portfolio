/*global $*/
$(function () {
    'use strict';
    var $win = $(window);
    var winH = $win.height(); // Get the window height.
    $('.loader').fadeOut(1000); //fadeout loader 
    // FOR PAGE TITLE
    //---------------------------------
    $win.focus(function () {
        document.title = "Portdev Template - Personal Template";
    });

    $win.blur(function () {
        document.title = "Come back !";
    });
    $win.on("scroll", function () {
        if ($(this).scrollTop() >= winH) {
            $('.to-top').addClass("appear");
        } else {
            $('.to-top').removeClass("appear");

        }
        if ($(this).scrollTop() >= 150) {
            $('.header-navbar .navbar').addClass("sticky-nav");
        } else {
            $('.header-navbar .navbar').removeClass("sticky-nav");

        }
    });
    //nav links
    $("ul.nav li a").on('click', function () {
        $('html,body').animate({
            scrollTop: $("." + $(this).attr('data-section')).offset().top
        }, 1000);
        $("ul.nav li a").removeClass('slctd');
        $(this).addClass('slctd')
    });
    //open nav 
    $("nav svg").on('click', function () {
        $('.header-navbar nav > ul').toggleClass('open')
    });
    //to top button
    $('.to-top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    //skills slider
    $('.owl-carousel.skill').owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        merge: true,
        dots: false,
        nav: true,
        autoplayHoverPause: true,
        slideBy: 5,
        responsive: {
            300: {
                items: 2,
                mergeFit: true
            },
            1000: {
                mergeFit: false
            }
        }
    });
    //img-filter buttons
    $('.skill button').on('click', function () {
        $('.img-container').removeClass('shown');
        $('.' + shown).addClass('shown')
    });
    $("#typed").typed({
        strings: ["Front-end", "Back-end", "linux"],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 5,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {},
        // starting callback function before each string
        preStringTyped: function () {},
        //callback for every typed string
        onStringTyped: function () {},
        // callback for reset
        resetCallback: function () {}
    });
    //Testimonials slider
    $('.owl-carousel.client').owlCarousel({
        items: 2,
        loop: true,
        margin: 70,
        merge: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            300: {
                items: 1,
                mergeFit: true
            },
            1000: {
                mergeFit: false
            }
        }
    });
    //Client slider
    $('.owl-carousel.logos').owlCarousel({
        items: 5,
        loop: true,
        margin: 20,
        merge: true,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            300: {
                items: 2,
                mergeFit: true
            },
            1000: {
                mergeFit: false
            }
        }
    });
    //img-filter buttons
    $('.img-filter p').on('click', function () {
        $('.img-filter p').removeClass('active')
        $(this).addClass('active');
        var shown = $(this).attr('data-sort');
        $('.img-container').removeClass('shown');
        $('.' + shown).addClass('shown')
    });
    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });


});
