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
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        var temp = $("<h3>").text(tempF.toFixed() + " degrees")
        var content = $("#test");
        content.prepend(temp)

        console.log('hey')
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
                var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        var temp = $("<h3>").text(tempF.toFixed() + " degrees")
        var content = $("#test");
        content.prepend(temp)
        
            });

            var queryURL = "https://api.openweathermap.org/data/2.5/forecast?"+ "lat=" + lat + "&lon=" + lon + "&appid=" + APIKey

            $.ajax({
                url: queryURL,
                method: "GET"
              })
             
                .then(function(response) {
            
                    console.log(response)
                    $(".location").html(response.city.name)
                    $("#date1").html(response.list[0].dt_txt)
                    $("#date2").html(response.list[7].dt_txt)
                    $("#date3").html(response.list[15].dt_txt)
                    $("#date4").html(response.list[23].dt_txt)
                    $("#date5").html(response.list[31].dt_txt)
                });






      }
 

   
    
    })

});

