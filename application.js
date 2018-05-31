$(document).ready(function(){
    for(var i = 1; i < 151; i++){
        $('#pokedeck').append(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png">`) 
    }
    $('img').on('click',  function(){
        $(this).appendTo('#pokebox');
    })
    for(var i = 1; i < 10; i++){
        $.get('http://pokeapi.co/api/v2/pokemon/' + i, function(data){
            console.log(data);
        });
    }
    










});//end of page
    