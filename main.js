$(document).scroll(function(e){
    if($(document).scrollTop() > 500){
        $('#header').removeClass("hidden")
    }
    else{
        $('#header').addClass("hidden")
    }
})