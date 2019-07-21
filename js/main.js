//Slider
$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5500,
        speed: 750,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });
});
//Menu
var menuBtn = document.querySelector('.menu-btn'),
    menu = document.querySelector('.menu'),
    headerContent = document.querySelector('.header__content');
menuBtn.onclick = function() {
    if (menu.classList.contains('menu-active')) {
        menu.classList.remove('menu-active');
        headerContent.style.display = 'block';
        menuBtn.classList.remove('menu-btn-active');
    } else {
        menu.classList.add('menu-active');
        headerContent.style.display = 'none';
        menuBtn.classList.add('menu-btn-active');
    }
};
//Scroll
$(function () {
    $("a.scrollto").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1100);
        return false;
    });
});