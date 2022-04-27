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
//
// $(window).resize(function() {
//     if ($(window).width() < 767.99) {
//         $("aside.navbar").hide();
//     }
//     else {
//         $("aside.navbar").show();
//     }
// });

// $(document).on('keypress', '#LoginVM_Password', function (e) {
//     if ( e.keyCode == 13 ) {
//         $("#LoginVM_LoginButton").click();
//     }
// });
// $(document).on('keypress', '#LoginVM_Login', function (e) {
//     if ( e.keyCode == 13 ) {
//         $("#LoginVM_LoginButton").click();
//     }
// });