$(document).ready(function () {
    var slider = $('.projects');
    var sld = function () {
        if ($(window).width() < 689) {

            slider.slick({
                arrows: false,
                adaptiveHeight: true,
                speed: 500,
            });
        }
    };
    sld();
    $(window).resize(sld);
    var slider = $('.members');
    var sld = function () {
        if ($(window).width() > 689) {

            slider.slick({
                arrows:false,
                adaptiveHeight:true,
                speed:500,
                slidesToShow:2,
            });
        }
    };
    sld();
    $(window).resize(sld);
})