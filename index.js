var sidenavinstance;


$(document).ready(function () {
    M.AutoInit();
    var sidenav = document.querySelector('.sidenav');
    sidenavinstance = M.Sidenav.init(sidenav);
    //AOS.init();
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });
