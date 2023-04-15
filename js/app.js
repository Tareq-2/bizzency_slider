$(function() {
    'use strict'
// success slider
    $('.success_slider').slick({
        dots: true,
        dotsClass: "success_dots",
        autoplay:true,
        speed:1000,
        arrows:true,
        autoplaySpeed:1000,
        prevArrow: '<i class="success_slider_arrow fas fa-arrow-left"></i>',
        nextArrow: '<i class="success_slider_arrow fas fa-arrow-right"></i>',
    });

    // portfolio slider

    $('.portfolio_slider').slick({
        autoplay:true,
        autoplaySpeed:1000,
        arrows:true,
        prevArrow:'<i class="fa-solid fa-angle-left portfolio_left_arrow"></i>',
        nextArrow:'<i class="fa-solid fa-angle-right portfolio_right_arrow">',
       
    });
})