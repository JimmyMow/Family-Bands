$(function () {
    var log = function() {
        console.log(arguments);
    };

    // HACK to quickly fill in Liesl images
    // --------
    $('.item .photo').each(function(index, item) {
        $(item).css('background-image', 'url(img/liesl/' + ((index % 11) + 1) + '.jpg)');
    });

    // MAKE LEFT NAV STICKY
    // --------
    var nav = $('.sidenav');
    $(window).scroll(function() {
        var navTop = nav.offset().top;
        var navLeft = nav.offset().left;
        var makeItStick = navTop < $(window).scrollTop();
        nav.toggleClass('stuck', makeItStick);
        nav.css('left', makeItStick ? navLeft : 0);
    });
});
