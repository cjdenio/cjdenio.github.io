$(document).scroll(function(e){
    if($(document).scrollTop() > $('#title').offset().top + $('#title').height()){
        $('#header').removeClass("hidden")
    }
    else{
        $('#header').addClass("hidden")
    }
})

var easter_egg = new Konami(function(){
    $('#easter_egg').removeClass("hidden")
})

$('#easter-egg-back').click(() => {$('#easter_egg').addClass("hidden")})