(function ($) {
    "use strict";

    // sticky nav JS
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.main-nav').addClass('menu-scrol');
        } else {
            $('.main-nav').removeClass('menu-scrol');
        }
    });	

    $('.navbar .navbar-nav li a').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 50);
        e.preventDefault();
    });

    $(document).on('click','.navbar-collapse.show',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });	

    // slder-area
    $(".slder-area").owlCarousel({
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: ['<i class="bx bx-left-arrow-circle"></i>', '<i class="bx bx-right-arrow-circle"></i>']
    });

    // PROJECTS PORTFOLIO
    $('#Container').mixItUp();
    // END PROJECTS PORTFOLIO


    // magniafic popup
    $('.popup-youtube').magnificPopup({
        disableOn: 100,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    // end magniafic popup


    // Back to top button
    var btn = $('#backToTop');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    // AOS JS
    AOS.init();

    //odometer js
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

})(jQuery);