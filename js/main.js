var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mainbanner");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2000); 
}

let sec1 = $('.sec1_content').offset().top;
let sec3= $('#sec3').offset().top;
let sec3_img = window.innerHeight

$(window).scroll(function(){
    let s_top = $(window).scrollTop();
    let w_height = $(window).height();
    let w_width = $(window).width();
    console.log(w_width)
    if (w_width >= 1000) {
        if (s_top - w_height*0.55 <= sec1 && sec1 <= s_top + w_height*0.55) {
            $('.sec1_content:nth-child(1)').css({
                transform: 'translateY(0)',
                opacity: 1
            })
            $('.sec1_content:nth-child(2)').css({
                transform: 'translateY(0)',
                opacity: 1
            })
            $('.sec1_content:nth-child(3)').css({
                transform: 'translateY(0)',
                opacity: 1
            })
        }
        else {
            $('.sec1_content:nth-child(1)').css({
                transform: 'translateY(100px)',
                opacity: 0
            })
            $('.sec1_content:nth-child(2)').css({
                transform: 'translateY(100px)',
                opacity: 0
            })
            $('.sec1_content:nth-child(3)').css({
                transform: 'translateY(100px)',
                opacity: 0
            })
        }
    
        if (s_top >= sec3 - w_height*0.6) {
            $('.interior1').css ({
                transform: 'translateX(0)',
                opacity: 1
            })
        }
        else {
            $('.interior1').css ({
                transform: 'translateX(-100%)',
                opacity: 0
            })
        }
        
        if (s_top >= sec3 - w_height*0.3) {
            $('.interior2').css ({
                transform: 'translateX(0)',
                opacity: 1
            })
        }
        else {
            $('.interior2').css ({
                transform: 'translateX(100%)',
                opacity: 0
            })
        }
    
        if (s_top >= sec3 + w_height*0.2) {
            $('.interior3').css ({
                transform: 'translateX(0)',
                opacity: 1
            })
        }
        else {
            $('.interior3').css ({
                transform: 'translateX(-100%)',
                opacity: 0
            })
        }
    
        if (s_top >= sec3 + w_height*0.6) {
            $('.interior4').css ({
                transform: 'translateX(0)',
                opacity: 1
            })
        }
        else {
            $('.interior4').css ({
                transform: 'translateX(100%)',
                opacity: 0
            })
        }
    }

})

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: true,
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable : true,
    },
});


let chk = true;
let timer = 500;

$('.sec').on('mousewheel DOMMouseScroll', function() {
    console.log($(this), event.wheelDelta)
/*
    event.wheelDelta => 마우스 휠 방향감지
                        내리면 -120
                        올리면  120
*/
    // 휠 돌렸을때 다음 섹션 존재 여부
    console.log($(this).next().length)

    event.preventDefault();
    if(chk) {
        // 휠 막기
        chk = false;
        setTimeout(function() {
            chk = true;
        }, timer)
        
        let s_top_pos = 0;
        // 휠 아래로 돌렸을때 다음 섹션 있는지 확인
        if(event.wheelDelta<0 && $(this).next().length > 0 ) {
            // 다음 섹션의 o_top 값을 s_top에 적용
            $('html, body').stop().animate({
                scrollTop: $(this).next().offset().top - 80
            }, timer, 'linear')
        }
        
        // 휠 위로 돌렸을때 위에 섹션 있는지 확인
        else if(event.wheelDelta>0 && $(this).prev().length > 0 ) {
            // 윗 섹션의 o_top 값을 s_top에 적용
            $('html, body').stop().animate({
                scrollTop: $(this).prev().offset().top - 80
            }, timer, 'linear')
        }

    }
})
