$(document).ready(function(){

    $('img').hover(
        function(){
        var oriSrc = $(this).attr('src');
        var altSrc = $(this).attr('alt-src')
        $(this).attr('src', altSrc);
        $(this).attr('alt-src', oriSrc);
        }, function(){
            var oriBack = $(this).attr('alt-src');
            var altBack = $(this).attr('src');
            $(this).attr('src', oriBack);       $(this).attr('alt-src', altBack);
        });

})