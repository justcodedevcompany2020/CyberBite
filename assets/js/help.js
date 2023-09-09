$(document).on('click', '.help_item', function(){
    $(this).toggleClass('active');
})

$(document).on('click', '.hamburger_menu', function(){
    $('.mobile_menu').toggleClass('open');
    $('body').toggleClass('overflow_hidden');
})
$(document).on('click', '.mobile_menu_close_btn', function(){
    $('.mobile_menu').removeClass('open');
    $('body').removeClass('overflow_hidden');

})
