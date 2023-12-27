for (let i=0; i<menu_data.length; i++) {
    for (let j=0; j<menu_data[i].length; j++) {
        let menu = `<div class="menu">
                        <img src="${menu_data[i][j].src}" alt="">
                        <div class="menu_detail_box">
                            <span class="menu_detail_txt">칼로리 ${menu_data[i][j].kal}Kal</span>
                            <span class="menu_detail_txt">당류 ${menu_data[i][j].sugars}g</span>
                            <span class="menu_detail_txt">단백질 ${menu_data[i][j].protein}g</span>
                            <span class="menu_detail_txt">포화지방 ${menu_data[i][j].saturated_fat}g</span>
                            <span class="menu_detail_txt">나트륨 ${menu_data[i][j].natrium}mg</span>
                        </div>
                        <h4 class="menu_name">${menu_data[i][j].menu}</h4>
                        <div class="menu_detail">${menu_data[i][j].content}</div>
                    </div>`
        
        if (i==0) {
            $('.bread_menu_box').append(menu);
        }
        else if (i==1) {
            $('.cake_menu_box').append(menu);
        }
        else if (i==2) {
            $('.drink_menu_box').append(menu);
        }
        else if (i==3) {
            $('.desert_menu_box').append(menu);
        }
        else if (i==4) {
            $('.md_menu_box').append(menu);
        }
    }
}


$('.menu1').click(function() {
    $('.menu_intro').removeClass('menu_intro_show');
    $('.menu_intro1').addClass('menu_intro_show');
    $('.banner').css("backgroundImage", 'url(./img/menu/bg_bread.jpg)');
    $('.nav_menu').removeClass('menu_click');
    $('.menu1').addClass('menu_click');
    $('.menu_box').removeClass('clicked_menu');
    $('.bread_menu_box').addClass('clicked_menu');
})
$('.menu2').click(function() {
    $('.menu_intro').removeClass('menu_intro_show');
    $('.menu_intro2').addClass('menu_intro_show');
    $('.banner').css("backgroundImage", 'url(./img/menu/bg_cake.jpg)');
    $('.nav_menu').removeClass('menu_click');
    $('.menu2').addClass('menu_click');
    $('.menu_box').removeClass('clicked_menu');
    $('.cake_menu_box').addClass('clicked_menu');
})
$('.menu3').click(function() {
    $('.menu_intro').removeClass('menu_intro_show');
    $('.menu_intro3').addClass('menu_intro_show');
    $('.banner').css("backgroundImage", 'url(./img/menu/bg_drink.jpg)');
    $('.nav_menu').removeClass('menu_click');
    $('.menu3').addClass('menu_click');
    $('.menu_box').removeClass('clicked_menu');
    $('.drink_menu_box').addClass('clicked_menu');
})
$('.menu4').click(function() {
    $('.menu_intro').removeClass('menu_intro_show');
    $('.menu_intro4').addClass('menu_intro_show');
    $('.banner').css("backgroundImage", 'url(./img/menu/bg_dessert.jpg)');
    $('.nav_menu').removeClass('menu_click');
    $('.menu4').addClass('menu_click');
    $('.menu_box').removeClass('clicked_menu');
    $('.desert_menu_box').addClass('clicked_menu');
})
$('.menu5').click(function() {
    $('.menu_intro').removeClass('menu_intro_show');
    $('.menu_intro5').addClass('menu_intro_show');
    $('.banner').css("backgroundImage", 'url(./img/menu/bg_md.jpg)');
    $('.nav_menu').removeClass('menu_click');
    $('.menu5').addClass('menu_click');
    $('.menu_box').removeClass('clicked_menu');
    $('.md_menu_box').addClass('clicked_menu');
})

$(window).scroll(function() {
    let s_top = $(window).scrollTop();
    
    if( s_top >= 500) {
        $('.menu_fixed').css("opacity", 1)
    }
    else {
        $('.menu_fixed').css("opacity", 0)
    }
})