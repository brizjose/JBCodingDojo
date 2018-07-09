$(document).ready(function(){
    var counter = $('.counter').attr('alt-attr')
    if(counter > 1){
        $('#fromjquery').append('<img src="img/friendly.png"')
    }
    else[
        $('#fromjquery').append('<img src="img/scary.jpg"')
    ]
    // $('#fromjquery').html('<p>'+counter+'</p>')  
})