/*var wObj = new XMLHttpRequest();
wObj.open('GET','http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=ced252bde969b39487a8d2a5a9d258bd',true);
wObj.send();

wObj.onload = function() {
    var response = JSON.parse(wObj.responseText);
    console.log(response);
    document.getElementById('current_city').innerHTML = response.name;
}*/
/*PRESTON WEATHER*/
var weatherRequest= new XMLHttpRequest();
var apiURL= "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=cfb50cc654c2297a74afd727ffbac9e0";

weatherRequest.open("GET",apiURL,true);
weatherRequest.responseType= "text";
weatherRequest.send();

weatherRequest.onload= function() {
    var weatherData = JSON.parse(weatherRequest.response);
    console.log(weatherData);
    var forecast_dt = forecast.list[0].dt_txt;
    
    //document.getElementById("current-condition").innerHTML= weatherData.weather[0].main;
    //document.getElementById("current-condition1").innerHTML= weatherData.weather[0].main;
    //document.getElementById("humidity").innerHTML= weatherData.main.humidity;
    //document.getElementById("mph").innerHTML= weatherData.wind.speed;

    //var iconcode=weatherData.weather[0].icon;
    //var icon_path= "https://openweathermap.org/img/w/"+ iconcode + ".png";
    //document.getElementById("weather_icon").src= icon_path;

    };


/*SODA SPRINGS WEATHER*/
/*    var weatherRequest= new XMLHttpRequest();
var apiURL= "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=cfb50cc654c2297a74afd727ffbac9e0";

weatherRequest.open("GET",apiURL,true);
weatherRequest.send();

weatherRequest.onload= function() {
    var weatherData=JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("ss-deg").innerHTML= weatherData.main.temp;
    document.getElementById("ss-current-condition").innerHTML= weatherData.weather[0].main;
    document.getElementById("ss-current-condition1").innerHTML= weatherData.weather[0].main;
    document.getElementById("ss-humidity").innerHTML= weatherData.main.humidity;
    document.getElementById("ss-mph").innerHTML= weatherData.wind.speed;

    var iconcode=weatherData.weather[0].icon;
    var icon_path= "https://openweathermap.org/img/w/"+ iconcode + ".png";
    document.getElementById("ss-weather_icon").src= icon_path;

    };*/
    /*FISH HAVEN WEATHER*/
  /*  
    var weatherRequest= new XMLHttpRequest();
    var apiURL= "https://api.openweathermap.org/data/2.5/weather?lat=42&lon=111&units=imperial&APPID=cfb50cc654c2297a74afd727ffbac9e0";
    
    weatherRequest.open("GET",apiURL,true);
    weatherRequest.send();
    
    weatherRequest.onload= function() {
        var weatherData=JSON.parse(weatherRequest.responseText);
        console.log(weatherData);
        document.getElementById("fh-deg").innerHTML= weatherData.main.temp;
        document.getElementById("fh-current-condition").innerHTML= weatherData.weather[0].main;
        document.getElementById("fh-current-condition1").innerHTML= weatherData.weather[0].main;
        document.getElementById("fh-humidity").innerHTML= weatherData.main.humidity;
        document.getElementById("fh-mph").innerHTML= weatherData.wind.speed;
    
        var iconcode=weatherData.weather[0].icon;
        var icon_path= "https://openweathermap.org/img/w/"+ iconcode + ".png";
        document.getElementById("fh-weather_icon").src= icon_path;
    
        }; 
*/