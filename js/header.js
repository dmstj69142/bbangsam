$(window).scroll(function(){
    let s_top = $(window).scrollTop();
    if (s_top > 100) {
        $('header').css({
            backgroundColor: "#cea96e",
            border: "none"
        })
    }
    else {
        $('header').css({
            backgroundColor: '#9c9a9866',
            borderBottom: "1px solid #fff"
        })
    }

    if (s_top >= 100) {
        $('.top_btn').css("opacity", 1)
    }
    else {
        $('.top_btn').css("opacity", 0)
    }

})
$('.top_btn').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    
    return false;
});

