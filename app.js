

    var drops = "";
    var backDrops = "";
    var makeItRain = function() {
            
            
          
        var increment = 0;
        
      
        while (increment < 100) {
          //couple random numbers to use for various randomizations
          //random number between 98 and 1
          var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
          //random number between 5 and 2
          var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
          //increment
          increment += randoFiver;
          //add in a new raindrop with various randomizations to certain CSS properties
          drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
          backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
        }
      
        $('.rain').append(drops);
        $('.rain').append(backDrops);
      }
     
    
    

$("#click").on("click", function(){
    


var APIKey = "166a433c57516f51dfab1f7edaed8413";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  "q=" + $("#search").val() + "&appid=" + APIKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  })
 
    .then(function(response) {

        console.log(response)
        var iconCode = response.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        console.log(iconUrl)
        $(".icon").attr("src", iconUrl);
        console.log(iconCode)
        $(".test").html(response.name)
        var hum = response.main.humidity
                var wind = response.wind.speed
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        var temp = $("<h3>").text(tempF.toFixed() + " degrees")
        var content = $(".test");
        $(".hum").text("Humidity: " + hum + "%")
        $(".windspeed").html("Wind Speed: " + wind + " MPH")
        var content = $(".test");
        // var lat = response.coord.lat
        // var lon = response.coord.lon
        // console.log(lat, lon)
    

        // var mymap = L.map('mapid').setView([lat, lon], 13);
        //     L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        // maxZoom: 18,
        // id: 'mapbox/streets-v11',
        // tileSize: 512,
        // zoomOffset: -1,
        // accessToken: 'pk.eyJ1Ijoic2FtdWVsYmFldHoiLCJhIjoiY2tnazU0aXJuMGpsMDJ0cWVqNnMyOHk1cyJ9.QIb_1jwmN4U4CkHqzIIAgg'
        // }).addTo(mymap);
        
       

        if ($("#search").val() === city1) {
            localStorage.setItem('city1', response.name)
        var city1 = localStorage.getItem('city1')
        
        $("#city1").text(city1)
            
        } else {
            localStorage.setItem('city2', response.name)
            var city2 = localStorage.getItem('city2')
            $("#city2").text(city2)

        }

        if(response.weather[0].main === "Rain") {
            makeItRain()
        } else {
            $('.drop').remove();
        
        }
        
        content.prepend(temp)
    });

    var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?" + "q=" + $("#search").val() + "&appid=" + APIKey
    $.ajax({
        url: queryURL2,
        method: "GET"
      })
     
        .then(function(response) {
    
            console.log(response)
            console.log(response.list[0].weather[0].icon )
            $(".location").html(response.city.name)
            $("#icon1").attr("src", "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
            $("#icon2").attr("src", "http://openweathermap.org/img/w/" + response.list[7].weather[0].icon + ".png");

            $("#icon3").attr("src", "http://openweathermap.org/img/w/" + response.list[15].weather[0].icon + ".png");
            $("#icon4").attr("src", "http://openweathermap.org/img/w/" + response.list[23].weather[0].icon + ".png");
            $("#icon5").attr("src", "http://openweathermap.org/img/w/" + response.list[31].weather[0].icon + ".png");

            $("#date1").html(response.list[0].dt_txt)
            $("#date2").html(response.list[7].dt_txt)
            $("#date3").html(response.list[15].dt_txt)
            $("#date4").html(response.list[23].dt_txt)
            $("#date5").html(response.list[31].dt_txt)

            $("#hum1").html("Humidity: " + response.list[0].main.humidity + "%")
            $("#windspeed1").html("Wind Speed: " + response.list[0].wind.speed + " MPH")

            $("#hum2").html("Humidity: " + response.list[7].main.humidity + "%")
            $("#windspeed2").html("Wind Speed: " + response.list[7].wind.speed + " MPH")

            $("#hum3").html("Humidity: " + response.list[15].main.humidity + "%")
            $("#windspeed3").html("Wind Speed: " + response.list[15].wind.speed + " MPH")

            $("#hum4").html("Humidity: " + response.list[23].main.humidity + "%")
            $("#windspeed4").html("Wind Speed: " + response.list[23].wind.speed + " MPH")

            $("#hum5").html("Humidity: " + response.list[31].main.humidity + "%")
            $("#windspeed5").html("Wind Speed: " + response.list[31].wind.speed + " MPH")
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
                var iconCode = response.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        console.log(iconUrl)
        $(".icon").attr("src", iconUrl);
                $(".test").html(response.name)
                var tempF = (response.main.temp - 273.15) * 1.80 + 32;
                var hum = response.main.humidity
                var wind = response.wind.speed
        var temp = $("<h3>").text(tempF.toFixed() + " degrees")
        $(".hum").html("Humidity: " + hum + "%")
        $(".windspeed").html("Wind Speed: " + wind + " MPH")
        var content = $(".test");
        
        content.prepend(temp)

        if(response.weather[0].main === "Rain") {
            makeItRain()
        } else {
            $('.drop').remove();
        }
                
        
            });

            var queryURL = "https://api.openweathermap.org/data/2.5/forecast?"+ "lat=" + lat + "&lon=" + lon + "&appid=" + APIKey

            $.ajax({
                url: queryURL,
                method: "GET"
              })
             
                .then(function(response) {
            
                    console.log(response)
                    console.log(response.list[0].weather[0].icon )
                    $(".location").html(response.city.name)
                    $("#icon1").attr("src", "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
                    $("#icon2").attr("src", "http://openweathermap.org/img/w/" + response.list[7].weather[0].icon + ".png");

                    $("#icon3").attr("src", "http://openweathermap.org/img/w/" + response.list[15].weather[0].icon + ".png");
                    $("#icon4").attr("src", "http://openweathermap.org/img/w/" + response.list[23].weather[0].icon + ".png");
                    $("#icon5").attr("src", "http://openweathermap.org/img/w/" + response.list[31].weather[0].icon + ".png");

                    $("#date1").html(response.list[0].dt_txt)
                    $("#date2").html(response.list[7].dt_txt)
                    $("#date3").html(response.list[15].dt_txt)
                    $("#date4").html(response.list[23].dt_txt)
                    $("#date5").html(response.list[31].dt_txt)

                    $("#hum1").html("Humidity: " + response.list[0].main.humidity + "%")
                    $("#windspeed1").html("Wind Speed: " + response.list[0].wind.speed + " MPH")

                    $("#hum2").html("Humidity: " + response.list[7].main.humidity + "%")
                    $("#windspeed2").html("Wind Speed: " + response.list[7].wind.speed + " MPH")

                    $("#hum3").html("Humidity: " + response.list[15].main.humidity + "%")
                    $("#windspeed3").html("Wind Speed: " + response.list[15].wind.speed + " MPH")

                    $("#hum4").html("Humidity: " + response.list[23].main.humidity + "%")
                    $("#windspeed4").html("Wind Speed: " + response.list[23].wind.speed + " MPH")

                    $("#hum5").html("Humidity: " + response.list[31].main.humidity + "%")
                    $("#windspeed5").html("Wind Speed: " + response.list[31].wind.speed + " MPH")
                });






      }
 

   
    
    })


    
        

    
    
    


$(window).on('load', function() { 
      
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
                var iconCode = response.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        console.log(iconUrl)
        $(".icon").attr("src", iconUrl);
                $(".test").html(response.name)
                var tempF = (response.main.temp - 273.15) * 1.80 + 32;
                var hum = response.main.humidity
                var wind = response.wind.speed
        var temp = $("<h3>").text(tempF.toFixed() + " degrees")
        $(".hum").html("Humidity: " + hum + "%")
        $(".windspeed").html("Wind Speed: " + wind + " MPH")
        var content = $(".test");
        
        content.prepend(temp)
                
        
            });

            var queryURL = "https://api.openweathermap.org/data/2.5/forecast?"+ "lat=" + lat + "&lon=" + lon + "&appid=" + APIKey

            $.ajax({
                url: queryURL,
                method: "GET"
              })
             
                .then(function(response) {
            
                    console.log(response)
                    console.log(response.list[0].weather[0].icon )
                    $(".location").html(response.city.name)
                    $("#icon1").attr("src", "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
                    $("#icon2").attr("src", "http://openweathermap.org/img/w/" + response.list[7].weather[0].icon + ".png");

                    $("#icon3").attr("src", "http://openweathermap.org/img/w/" + response.list[15].weather[0].icon + ".png");
                    $("#icon4").attr("src", "http://openweathermap.org/img/w/" + response.list[23].weather[0].icon + ".png");
                    $("#icon5").attr("src", "http://openweathermap.org/img/w/" + response.list[31].weather[0].icon + ".png");

                    $("#date1").html(response.list[0].dt_txt)
                    $("#date2").html(response.list[7].dt_txt)
                    $("#date3").html(response.list[15].dt_txt)
                    $("#date4").html(response.list[23].dt_txt)
                    $("#date5").html(response.list[31].dt_txt)

                    var tempF1 = (response.list[0].main.temp - 273.15) * 1.80 + 32;
                    $("#temp1").html(tempF1.toFixed() + "F " + " degrees")

                    var tempF2 = (response.list[7].main.temp - 273.15) * 1.80 + 32;
                    $("#temp2").html(tempF2.toFixed() + "F " + " degrees")

                    var tempF3 = (response.list[15].main.temp - 273.15) * 1.80 + 32;
                    $("#temp3").html(tempF3.toFixed() + "F " + " degrees")

                    var tempF4 = (response.list[23].main.temp - 273.15) * 1.80 + 32;
                    $("#temp4").html(tempF4.toFixed() + "F " + " degrees")
                    var tempF5 = (response.list[31].main.temp - 273.15) * 1.80 + 32;
                    $("#temp5").html(tempF5.toFixed() + "F " + " degrees")

                    $("#hum1").html("Humidity: " + response.list[0].main.humidity + "%")
                    $("#windspeed1").html("Wind Speed: " + response.list[0].wind.speed + " MPH")

                    $("#hum2").html("Humidity: " + response.list[7].main.humidity + "%")
                    $("#windspeed2").html("Wind Speed: " + response.list[7].wind.speed + " MPH")

                    $("#hum3").html("Humidity: " + response.list[15].main.humidity + "%")
                    $("#windspeed3").html("Wind Speed: " + response.list[15].wind.speed + " MPH")

                    $("#hum4").html("Humidity: " + response.list[23].main.humidity + "%")
                    $("#windspeed4").html("Wind Speed: " + response.list[23].wind.speed + " MPH")

                    $("#hum5").html("Humidity: " + response.list[31].main.humidity + "%")
                    $("#windspeed5").html("Wind Speed: " + response.list[31].wind.speed + " MPH")
                });

                var mymap = L.map('mapid').setView([lat, lon], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2FtdWVsYmFldHoiLCJhIjoiY2tnazU0aXJuMGpsMDJ0cWVqNnMyOHk1cyJ9.QIb_1jwmN4U4CkHqzIIAgg'
}).addTo(mymap);
var clouds = L.OWM.clouds({showLegend: false, opacity: 0.5, appId: '166a433c57516f51dfab1f7edaed8413'});
var precipitation = L.OWM.precipitation({appId: '166a433c57516f51dfab1f7edaed8413'});
var overlayMaps = { "Clouds": clouds, "Rain": precipitation };

var layerControl = L.control.layers(overlayMaps).addTo(mymap);





      }

      var city1 = localStorage.getItem('city1')
        $("#city1").text(city1)

        $(".radarbutton").on("click", function(){
            navigator.geolocation.getCurrentPosition(showPosition)

            function showPosition(position) {
                var lat = position.coords.latitude
                 var lon = position.coords.longitude
            $('#radarmodal1').modal('show')
            var mymap1 = L.map('mapid2').setView([lat, lon], 13);
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoic2FtdWVsYmFldHoiLCJhIjoiY2tnazU0aXJuMGpsMDJ0cWVqNnMyOHk1cyJ9.QIb_1jwmN4U4CkHqzIIAgg'
        }).addTo(mymap1);
        var clouds = L.OWM.clouds({showLegend: false, opacity: 0.5, appId: '166a433c57516f51dfab1f7edaed8413'});
var precipitation = L.OWM.precipitation({appId: '166a433c57516f51dfab1f7edaed8413'});
var overlayMaps = { "Clouds": clouds, "Rain": precipitation };

var layerControl = L.control.layers(overlayMaps).addTo(mymap1);
        
        
    }
        })


    


        
        
 });
