$(function () {
    $("#mobile-navigation-toggle").click(function () {
        $("#mobile-navigation-toggle .open-navigation").toggleClass("hidden");
        $("#mobile-navigation-toggle .close-navigation").toggleClass("hidden");
    });
});