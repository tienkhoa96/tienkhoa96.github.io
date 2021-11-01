$(document).ready(function(){

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        // var h = $(window).height();
        // console.log(h)
        if ($(window).scrollTop()) {
            $("header").addClass("bgr-header-scroll")
        } else {
            $("header").removeClass("bgr-header-scroll")
        }
    })
    

    $(".toggle").click(function(){
        $(".responsive-menu").slideToggle()
    })

    $(window).resize(function(){
        $(".responsive-menu").slideUp()
    })
    $(window).scroll(function(){
        $(".responsive-menu").slideUp()
    })
    $(".responsive-menu").click(function(){
        $(".responsive-menu").slideUp()
    })

    $("#home-slide").carousel({
        interval: 2000,
        ride: "carousel"
    })

})