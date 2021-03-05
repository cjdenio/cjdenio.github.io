$(document).scroll(function (e) {
    if ($(document).scrollTop() > $('#title').offset().top + $('#title').height()) {
        $('#header').removeClass("hidden")
    }
    else {
        $('#header').addClass("hidden")
    }

    if (($(document).scrollTop() + $(window).height()) > $('#about-title').offset().top + $('#about-title').height()) {
        $('.page-down').addClass("hidden")
    }
    else {
        $('.page-down').removeClass("hidden")
    }
})

document.getElementById('year').innerHTML = new Date().getFullYear()

var easter_egg = new Konami(function () {
    $('#easter_egg').removeClass("hidden")
})

$('#easter-egg-back').click(() => { $('#easter_egg').addClass("hidden") })

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})