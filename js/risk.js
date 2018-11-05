$(document).ready(function () {
    $("#yesfunds").click(function () {
        $("[.fundspanel]").show();
    });

    $("#nofunds").click(function () {
        $("[.fundspanel]").hide();
    });

});