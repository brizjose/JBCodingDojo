$(document).ready(function(){

        $('.container').on('click','img',function(){
            var which = $(this).attr('alt');
            $.get('https://anapioficeandfire.com/api/houses/', function(response){
                console.log(response);

            }, 'json');
        });

})
