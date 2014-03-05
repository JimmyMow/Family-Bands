$(function () {
    // HACK to quickly fill in Liesl images
    // --------
    $('section .item').each(function(index, item) {
        $(item).css('background-image', 'url(img/liesl/' + ((index % 11) + 1) + '.jpg)');
    });

    // MAKE LEFT NAV STICKY
    // --------

    // -- How to get the position of an object
    // -- relative to top-left corner of window
    nav.offset().top
    nav.offset().left

    // -- How to find how many pixels beyond the top
    // -- of the viewport the window has been scrolled
    $(window).scrollTop();

    // -- How to handle the scroll event
    $(window).scroll(function() {
    });
});
