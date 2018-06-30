$(document).ready(function(){

        $('h1').click(function(){
            $('.details').html("");
        });

        $('.container').on('click','img',function(){
            $('.details').html("");
            var which = $(this).attr('data-id');
            $.get('https://anapioficeandfire.com/api/houses/'+which, function(response){
                // console.log(response);
                var html_str = `
                                <h2>${response.name}</h2>
                                <h3>"${response.words}"</h3>
                                <p>${response.titles}</p>
                `;
                $('.details').append(html_str)
            }, 'json');
        });

})

// https://anapioficeandfire.com/api/houses?page=1&pageSize=50
// https://anapioficeandfire.com/api/houses?name=House%20Stark%20of%20Winterfell  or 
// https://anapioficeandfire.com/api/houses?name=House%20Baratheon%20of%20Storm%27s%20End  or 17
// https://anapioficeandfire.com/api/houses?name=House%20Lannister%20of%20Casterly%20Rock or 229
// https://anapioficeandfire.com/api/houses?name=House%20House%20Targaryen%20of%20King%27s%20Landing or 378
