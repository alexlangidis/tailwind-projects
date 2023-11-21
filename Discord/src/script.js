$(document).ready(function () {
    $('.btn-mobile-menu, .menu-close').click(function (e) { 
        e.preventDefault();
        $('.btn-mobile-menu').toggleClass('hidden');
        $('.mobile__menu__container').toggleClass('grid hidden');
        $('.mobile__menu__container__right__column').toggleClass('hidden');
    });


});