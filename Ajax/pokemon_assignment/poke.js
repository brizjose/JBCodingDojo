function drawPokemon(){
    for(var i = 100; i <= 250; i++){
        $('.container').append('<img src="http://pokeapi.co/media/sprites/pokemon/'+i+'.png" alt="pokemon">')
    }
}


$(document).ready(function(){

    drawPokemon();

});