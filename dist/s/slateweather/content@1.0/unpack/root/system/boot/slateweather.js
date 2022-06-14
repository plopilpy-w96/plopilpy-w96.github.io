// https://stackoverflow.com/a/44834562
function getTemp() {
        var cityname = "pastehere" //Your city name goes here
        var apikey = "pastehere" //Generated API key from https://weatherapi.com/ goes here
  $.ajax({
    url: 'https://api.weatherapi.com/v1/current.json?key='+ apikey +'&q='+ cityname +'&aqi=no',
    type: 'GET',
    dataType: 'text',
    success: function(data) {
      var json_result = JSON.parse(data);
      console.log(json_result.current.temp_c);
      var $newDiv = $("<div/>")
                 .addClass("weatherdata notify-item")
                 .html("<div>loading weather data..</div>");
      $( ".taskbar-notify" ).append($newDiv);
      var weathericon = json_result.current.condition.icon;
      console.log(json_result.location.name)
      setInterval(function(){
$( ".weatherdata").html("<span style='margin-left: -5px; width: 16px; height: 8px; display: inline-block; background-size: 18px 18px; background-position: -2px center; background-image: url("+weathericon+");'></span>" + json_result.current.temp_c + "°C");
    }, 1000);
    }
  });
}
getTemp();
