$(document).ready(function(){
    //talk to the api and get the names of the first 10 characters
    for(var i = 0; i < 10; i++){

        $.get('https://swapi.co/api/people/'+i, function(res){
            //once we get response, display the name in a business card
            console.log(res);
            var id = res.url.split("/")[5];    //this grabs the id # of the character
            var htmlStr = `
                        <div data-id="${id}">
                            <h1>${res.name}</h1>
                        </div>
            `;
            $('.starpeople').append(htmlStr);
        }, 'json');
    }    

    $('.starpeople').on('click', 'div', function(){
        var idx = $(this).attr('data-id');
        $.get('https://swapi.co/api/people/'+idx, function(person){
            $('.charac').html('<ul><li>'+person.height+'</li><li>'+person.mass+'</li></ul>')
        }, 'json');
    });

});