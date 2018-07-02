$(document).ready(function(){

    for(var i = 1; i < 600; i++){
        $('.pokemon').append("<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+i+".png' alt='"+i+"'>");     
    }

    $('.pokemon').on('click','img',function(){
        var which = $(this).attr('alt')
        $.get("https://pokeapi.co/api/v2/pokemon/"+which+"/", function(res){
            console.log(res);
            $('.details').html('');
            var name = (res.forms[0].name);
            var image = (res.sprites['front_default']);
            var height = res.height;
            var weight = res.weight;
            var type_str = "";
                type_str += "<h4>Types</h4>";
                type_str += "<ul>";
                for(var i = 0; i < res.types.length; i++){
                    type_str += "<li>"+res.types[i].type.name+"</li>";
                }
                type_str += "</ul>";
            var able_str = "";
                able_str += "<h4>Abilities</h4>"
                able_str += "<ul>"
                for(var i = 0; i < res.abilities.length; i++){
                    able_str += "<li>"+res.abilities[i].ability.name+"</li>"
                }
                able_str += "</ul>"
            $('.details').append("<h2>"+name+"</h2>");    
            $('.details').append("<img src="+image+" alt="+name+">");
            $('.details').append(type_str);
            $('.details').append(able_str);
            $('.details').append("<p>height: "+height+" weight: "+weight+"</p>");
        })
    })

    $('button').click(function(){
        $('.details').html('');
    })

})