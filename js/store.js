for(i=0; i<store_data.length; i++) {
    let store = `<div class="store">
                    <a href="${store_data[i].site}" target="_blank">
                        <img src="${store_data[i].src}" alt="">
                        <div class="store_txt">${store_data[i].name}</div>
                        <div class="store_content">
                            <div class="store_content_line">
                                <img src="./img/store/btn_tel.png" alt="">
                                <div class="store_item">${store_data[i].tel}</div>
                            </div>
                            <div class="store_content_line">
                                <img src="./img/store/btn_map.png" alt="">
                                <div class="store_item">${store_data[i].location}</div>
                            </div>
                        </div>
                    </a>
                </div>`
    $('.store_box').append(store);
}

$('.store').click(function() {
    $(this).find('.iframe_box').toggleClass('display_none')
})