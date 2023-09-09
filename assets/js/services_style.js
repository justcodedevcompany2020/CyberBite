$(document).on("click", ".services_tab_item", function(){

    let data_id = $(this).data("id");
    $(".services_tab_item").removeClass("active")
    $(this).addClass("active");

    $(".services_items_main_wrapper").removeClass("open");
    $("#" + data_id).addClass("open");

})

$(document).on('click', '.hamburger_menu', function(){
    $('.mobile_menu').toggleClass('open');
    $('body').toggleClass('overflow_hidden');
})
$(document).on('click', '.mobile_menu_close_btn', function(){
    $('.mobile_menu').removeClass('open');
    $('body').removeClass('overflow_hidden');

})
