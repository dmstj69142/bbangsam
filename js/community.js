const community_data = [
    {no: 9, title: "빵쌤 김포걸포점 감사 이벤트", date: "2022.10.07", hits: 285},
    {no: 8, title: "빵쌤 남양주오남점 9/5 (월) 그랜드오픈", date: "	2022.09.01	", hits: 223},
    {no: 7, title: "나 혼자 산다 광규X코쿤 빵쌤 송도 센트럴파크점 방문!", date: "2022.08.29", hits: 263},
    {no: 6, title: "빵쌤 김포걸포점 8/5 (금) 그랜드오픈", date: "2022.08.03", hits: 236},
    {no: 5, title: "빵쌤 군산시청점 5/12 (목) 그랜드오픈", date: "2022.05.12", hits: 269},
    {no: 4, title: "2022 설 연휴 정상영업 안내", date: "2022.01.28", hits: 337},
    {no: 3, title: "서민갑부 방송/ 북한떡과 남한떡의 만남!빵쌤 가평공장", date: "2022.01.06", hits: 479},
    {no: 2, title: "2021년 크리스마스 케이크 예약 주문 안내", date: "2021.11.25", hits: 380},
    {no: 1, title: "2021.11.8(월)~10(수) 3일간! 빵쌤 마곡점 50% 쇼킹딜", date: "2021.11.05", hits: 419}
]

console.log(community_data)
for (i=0; i<community_data.length; i++) {

    let community = `<tr class="table_tr">
                        <td>${community_data[i].no}</td>
                        <td class="pointer"><a href="./community_detail.html">${community_data[i].title}</a></td>
                        <td>${community_data[i].date}</td>
                        <td>${community_data[i].hits}</td>
                    </tr>`

    $('.cm_content > tbody').append(community);
}