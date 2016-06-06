

$(function() {
  $("form#fav-things").submit(function(event) {
    event.preventDefault();
  var  favorites = [$("input#fav1").val(),$("input#fav2").val(), $("input#fav3").val(), $("input#fav4").val()];
  var newFavorites = [favorites[1],favorites[0],favorites[2]];
  newFavorites.push(favorites[3]);
  console.log(favorites);
  console.log(newFavorites);
  $("ul.display").append("<li>"+newFavorites[0]+"</li>");
  $("ul.display").append("<li>"+newFavorites[1]+"</li>");
  $("ul.display").append("<li>"+newFavorites[2]+"</li>");
  $("ul.display").append("<li>"+newFavorites[3]+"</li>");
  });
});
