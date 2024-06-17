$('.brand1').click(function() {
    $('.brand').stop().fadeIn(300);
    $('.guide').stop().fadeOut(300);
    $('.brand1').css ({
        textDecoration: "underline",
        fontWeight: 900
    })
    $('.brand2').css ({
        textDecoration: "none",
        fontWeight: 100
    })
})

$('.brand2').click(function() {
    $('.brand').stop().fadeOut(300);
    $('.guide').stop().fadeIn(300);
    $('.brand1').css ({
        textDecoration: "none",
        fontWeight: 100
    })
    $('.brand2').css ({
        textDecoration: "underline",
        fontWeight: 900
    })
})