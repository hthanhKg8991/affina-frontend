import $ from 'jquery';
import AOS from 'aos';
AOS.init({
    once: false,
    offset: 200,
    duration: 1000,
});
$(function () {
    // scrollToFixed();
    handleTab();
    $('.dropdown').hover(function () {
        $(this).find('.dropdown-menu').addClass('show');
    },
        function () {
            $(this).find('.dropdown-menu').removeClass('show');
        });
});

function handleTab() {
    $(".nav-tabs .nav-item:has('button.active')").addClass('active');
    $('.nav-tabs>.nav-item').on('click', function () {
        $('.nav-tabs .nav-item').removeClass('active')
        $(this).addClass('active')
    })
}



function scrollToFixed() {
    $(window).scroll(function () {
        var scrollY = $(this).scrollTop();
        var objectTop = $('.sidebar-right-fixed-first').offset().top;
        console.log('scrollY>>>', objectTop, scrollY);
        if(scrollY >= objectTop) {
            // $('.sidebar-right-fixed-first').css({'position': 'fixed', 'top': 0});
            $('.sidebar-right-fixed-second').css({'position': 'fixed', 'top': 0});
        }else{
            $('.sidebar-right-fixed-first').css({'position': 'static'});
        }
    })
}
