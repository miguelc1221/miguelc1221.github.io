(function() {

    var nav = $('.navbar');
    var navTabs = $('#navbar a');
    var distance = nav.offset();
    var htmlBody = $('html, body');

    $('.navbar-toggle').click(function() {
        $('#navbar').toggleClass('navBack');
        $('.navbar-header').toggleClass('navBack');
    });

    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });

    //fade in nav after scrolling down
    if (distance.top >= 600) {
        nav.addClass('effect');
    }

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            nav.addClass('effect');

            //color <a> when selecting tab
            navTabs.hover(function() {

                if ($(this).parent().hasClass('active')) {
                    $(this).css({"color": "white"});
                } else {
                    $(this).css({"color": "#085795", "backgroundColor": "transparent"});
                }

            }, function() {
                $(this).css({"color": "white"});
            });

            navTabs.click(function() {
               $(this).css({"color": "white"});
            });

        } else {
            nav.removeClass('effect');
        }
    });

    //smooth scrolling
    $(".navbar-collapse ul li a[href^='#']").on('click', function(e) {
        // prevent default anchor click behavior
        e.preventDefault();
        // store hash
        var hash = this.hash;
        // animate
        htmlBody.animate({
            scrollTop: $(this.hash).offset().top
        }, 700, function () {
            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });
    });

    $(".jumbotron a[href^='#']").on('click', function(e) {
        // prevent default anchor click behavior
        e.preventDefault();
        // store hash
        var hash = this.hash;
        // animate
        htmlBody.animate({
            scrollTop: $(this.hash).offset().top
        }, 700, function () {
            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });
    });

    //waypoint- scroll animation
    $('section#skills img').waypoint(function() {
        $(this.element).addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });

    $('section#aboutMe img, section#aboutMe p').waypoint(function() {
        $(this.element).addClass('animated fadeIn');
    }, {
        offset: '70%'
    });

    $('.rightAnimate').waypoint(function() {
        if($(window).width() < 767) {
            $(this.element).addClass('animated fadeIn');
        } else {
            $(this.element).addClass('animated fadeInRightBig');
        }
    },{
        offset: '70%'
    });

    $('.leftAnimate').waypoint(function() {
        if($(window).width() < 767) {
            $(this.element).addClass('animated fadeIn');
        } else {
            $(this.element).addClass('animated fadeInLeftBig');
        }
    },{
        offset: '70%'
    });

}());
