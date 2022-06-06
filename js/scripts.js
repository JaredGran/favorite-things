$(document).ready(function() {
  $("form#favorite-form").submit(function(event) {
    event.preventDefault();
    let animal = $("#animal").val();
    let music = $("#music").val();
    let movie = $("#movie").val();
    let color = $("#color").val();

    const combinedFav = [animal, music, movie, color];
    console.log(combinedFav);
    $('#output').text(combinedFav);
  });
});

