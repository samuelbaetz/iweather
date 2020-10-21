$( document ).ready(function() {
    
    

$("#click").on("click", function(){
    console.log("hey")


var APIKey = "166a433c57516f51dfab1f7edaed8413";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  "q=" + $("#search").val() + "&appid=" + APIKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  })
 
    .then(function(response) {

        console.log(response)
        $("#test").html(response.name)

    });

});



$("#loc").on("click", function(){

    
    
    navigator.geolocation.getCurrentPosition(showPosition)

    function showPosition(position) {
        var lat = position.coords.latitude
         var lon = position.coords.longitude
         console.log(lat)
         console.log(lon)

         var APIKey = "166a433c57516f51dfab1f7edaed8413";
        
         var query = "https://api.openweathermap.org/data/2.5/weather?"+ "lat=" + lat + "&lon=" + lon + "&appid=" + APIKey




         $.ajax({
            url: query,
            method: "GET"
          })
         
            .then(function(response) {
        
                console.log(response)
                $("#test").html(response.name)
        
            });








      }
 

   
    
    })

});

