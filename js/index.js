var sidenavinstance;


$(document).ready(function () {
    M.AutoInit();
    var sidenav = document.querySelector('.sidenav');
    sidenavinstance = M.Sidenav.init(sidenav);
    //AOS.init();

    new TypeIt('#example1', {
        strings: ["This is a great string.", "But here is a better one."],
        speed: 50,
        breakLines: false,
        autoStart: false
      });
      
      

});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
});