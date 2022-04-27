$(document).on('click', 'aside.navbar a', function (e) {
    if ($(window).width() < 1023.99) {
        $(".navbar-toggler").click();
        $("aside.navbar").hide();
    }
    else {
    }
});
$(document).on('click', '.navbar-toggler', function (e) {
    $("aside.navbar").toggle();
    if ($("aside.navbar").css('display')=='block'){
        var element = document.getElementById('navbar-menu');
        element.classList.add("show");
    }
});
