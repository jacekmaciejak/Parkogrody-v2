$(document).ready(function () {

    /*Animations on scroll*/
    $('.js-wp-1').waypoint(function (direction) {
        $('.js-wp-1').addClass('animated zoomInLeft');
    }, {
        offset: '60%'
    });
    $('.js-wp-2').waypoint(function (direction) {
        $('.js-wp-2').addClass('animated zoomInRight');
    }, {
        offset: '70%'
    });
    $('.js-wp-3').waypoint(function (direction) {
        $('.js-wp-3').addClass('animated zoomIn');
    }, {
        offset: '60%'
    });
    $('.js-wp-4').waypoint(function (direction) {
        $('.js-wp-4').addClass('animated zoomInDown');
    }, {
        offset: '70%'
    });
    $('.js-wp-5').waypoint(function (direction) {
        $('.js-wp-5').addClass('animated zoomInDown');
    }, {
        offset: '70%'
    });
});
