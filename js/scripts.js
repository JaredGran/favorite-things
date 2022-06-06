$(document).ready(function() {
  $("form#favorite-form").submit(function(event) {
    event.preventDefault();
    let animal = $("#animal").val();
    let music = $("#music").val();
    let movie = $("#movie").val();
    let color = $("#color").val();

    const combinedFav = [animal, music, movie, color];
    const favHero = ["Iron Man"];
    favHero.push(combinedFav[0], combinedFav[1], combinedFav[2]);
   
    $('#l1').text(favHero[0]);
    $('#l2').text(favHero[1]);
    $('#l3').text(favHero[2]);
    $('#l4').text(favHero[3]);
    $("#animal").val('');
    $("#music").val('');
    $("#movie").val('');
    $("#color").val('');
    
    $('#output').show();
  });
});


// Finally, display this new array in your page's HTML as list items in a <ul> tag. 