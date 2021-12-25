$(function () {

    $('.products_slider').slick({
        prevArrow: '<button class="slider-btn slider-btn_left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M9.21839 1L1 9L9.21839 17" />\n' + '</svg></button>',
        nextArrow: '<button class="slider-btn slider-btn_right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.78161 17L9 9L0.78161 1" />\n' + '</svg></button>',
        infinite: false,
    });

    $('.questions_item-title').on('click', function () {
        $('.questions_item').removeClass('questions_item--active');
        $(this).parent().addClass('questions_item--active');
    });

    $('#fullpage').fullpage({
        autoScrolling:true,
        scrollHorizontally: true,
        sectionSelector: '.page-section',
        scrollOverflow: true,
        anchors: ['top', 'products', 'benefits', 'specification', 'questions', 'contacts'],
        menu: '#headre_nav',
    });

    $('.menu_btn').on('click', function (){
        $('.menu_btn').toggleClass('menu_btn--active');
        $('.menu_list').toggleClass('menu_list--active');
    });

    $('.menu_list-link').on('click', function (){
        $('.menu_btn').removeClass('menu_btn--active');
        $('.menu_list').removeClass('menu_list--active');
    });
});