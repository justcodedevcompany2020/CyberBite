// let  news_swiper = new Swiper("#news_page_slider", {
//     pagination: {
//         el: "#news_slider_pagination",
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span style="text-align: center" class="' + className + '">' + (index + 1) + "</span>";
//         }
//     },
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: 1,
//     navigation: {
//         nextEl: ".news_slider_button_next",
//         prevEl: ".news_slider_button_prev",
//     },
//     // breakpoints: {
//     //     // when window width is >= 320px
//     //     320: {
//     //         slidesPerView: 2,
//     //         spaceBetween: 20
//     //     },
//     //     // when window width is >= 480px
//     //     480: {
//     //         slidesPerView: 2,
//     //         spaceBetween: 30
//     //     },
//     //     // when window width is >= 640px
//     //     768: {
//     //         slidesPerView: 3,
//     //         spaceBetween: 30
//     //     },
//     //     1170: {
//     //         slidesPerView: 4,
//     //         spaceBetween: 30
//     //     },
//     //     1920: {
//     //         slidesPerView: 4,
//     //         spaceBetween: 30
//     //     }
//     // }
// })

$(document).on('click', '.hamburger_menu', function(){
    $('.mobile_menu').toggleClass('open');
    $('body').toggleClass('overflow_hidden');
})
$(document).on('click', '.mobile_menu_close_btn', function(){
    $('.mobile_menu').removeClass('open');
    $('body').removeClass('overflow_hidden');

})
