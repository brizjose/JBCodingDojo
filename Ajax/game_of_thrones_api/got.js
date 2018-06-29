$(document).ready(function(){
    for(var i = 0; i <5; i++){

        $('.container').on('click','img',function(response){
            var which = $(this).attr('alt');
            $.get('https://anapioficeandfire.com/api/houses');
            console.log(response);
        })


    }
})
