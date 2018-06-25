$(document).ready(function() {
    $('form').submit(function() {
        // your code here (build up your url)
        
        $('.wea_report').html("");

        var city = $('input[name="city"]').val();

        if(city == ""){
            $('.wea_report').append("Please enter name of a city to get weather report");
            return false;
        }
        else{
        
        $.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&APPID=8f54c0b062bfe33557da58c53ef0b917', function(wea_info) {
            // your code here
            console.log(wea_info);
            for(var i = 0; i < wea_info.weather.length; i++){
                var wea_str = "";
                wea_str += "<ul>";
                wea_str += "<li>"+wea_info.weather[i].description+"</li>"
                wea_str += "</ul>";
            }
            var html_str = `
                            <h1>${wea_info.name},</h1>
                            <h2>${wea_info.sys.country}</h2>
                            <p>${wea_str}</p>
                            <p>Current temp: ${wea_info.main.temp}&deg;F</p>
                            <p>Max temp: ${wea_info.main.temp_max}&deg;F</p>
                            <p>Min temp: ${wea_info.main.temp_min}&deg;F</p>
                            <p>Wind speed: ${wea_info.wind.speed} miles/hr</p>
                            <p>Wind temp: ${wea_info.wind.deg}&deg;F</p>
                            <p>Humidity: ${wea_info.main.humidity}%</p>
                            `
            $('.wea_report').append(html_str);
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    }
    });
});
