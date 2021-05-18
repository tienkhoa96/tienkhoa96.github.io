$(document).ready(function () {

    // var owl = $('.owl-carousel');
    // owl.owlCarousel({
    //     items:3,
    //     loop:true,
    //     margin:10,
    //     autoplay:true,
    //     // autoplayTimeout:1000,
    //     // autoplayHoverPause:true
    // });


    var story_img_height = $(".story-image img").height();
        $(".story-left").height(story_img_height);

    $(window).on('resize', function () {
        var story_img_height = $(".story-image img").height();
        $(".story-left").height(story_img_height);
    });



});