import $ from 'jquery';
import AOS from 'aos';
AOS.init({
    once: false,
    offset: 200,
    duration: 1000,
});
$(function () {
    handleTab();
    // onLoadPage();
    $('.dropdown').hover(function () {
        $(this).find('.dropdown-menu').addClass('show');
    },
        function () {
            $(this).find('.dropdown-menu').removeClass('show');
        });
});

function handleTab() {
    $('.nav-tabs .nav-item:has(button.active)').addClass('active');
    $('.nav-tabs .nav-item').on('click', function(){
        $('.nav-tabs .nav-item').removeClass('active')
        $(this).addClass('active')
    })
}

// function onLoadPage(){
//     document.addEventListener('readystatechange', event => {
//         if (event.target.readyState === 'interactive') {
//             // $('body').append(
//             //     "<div class='loading-page'></div>"
//             // )
//             // alert('ádsdok')
//         }
//          else if (event.target.readyState === 'complete') {
//             $('body').removeClass('loading-page');
//             // $('body').append(
//             //     "<div class='loading-page'></div>"
//             // )
//         }
//       });
// }