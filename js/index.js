var sidenavinstance;


$(document).ready(function () {
    $('.slider').slider();
    M.AutoInit();
    var sidenav = document.querySelector('.sidenav');
    sidenavinstance = M.Sidenav.init(sidenav);
    //AOS.init();

    new TypeIt('#example1', {
        strings: ["Online Investment", "New Home Savings", "Dream Vacation", "College Fund", "Retirement Prosperity", "Wealth Planning"],
        speed: 100,
        breakLines: false,
        autoStart: false,
        loop: true,
        nextStringDelay: [10, 1500]
    });
            
            

});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
});

