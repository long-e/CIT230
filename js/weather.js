/*var wObj = new XMLHttpRequest();
wObj.open('GET','http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=ced252bde969b39487a8d2a5a9d258bd',true);
wObj.send();

wObj.onload = function() {
    var response = JSON.parse(wObj.responseText);
    console.log(response);
    document.getElementById('current_city').innerHTML = response.name;
}*/
var weatherRequest= new XMLHttpRequest();
var apiURL= "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=cfb50cc654c2297a74afd727ffbac9e0";

weatherRequest.open("GET",apiURL,true);
weatherRequest.responseType= "text";
weatherRequest.send();

weatherRequest.onload= function() {
    var weatherData = JSON.parse(weatherRequest.response);
    console.log(weatherData);
    document.getElementById('current-city').innerHTML = weatherData.name;
    document.getElementById("deg").innerHTML = weatherData.weather[0].main;
    //document.getElementById("deg").innerHTML= weatherData.main.temp;
    //document.getElementById("current-condition").innerHTML= weatherData.weather[0].main;
    //document.getElementById("current-condition1").innerHTML= weatherData.weather[0].main;
    //document.getElementById("humidity").innerHTML= weatherData.main.humidity;
    //document.getElementById("mph").innerHTML= weatherData.wind.speed;

    //var iconcode=weatherData.weather[0].icon;
    //var icon_path= "https://openweathermap.org/img/w/"+ iconcode + ".png";
    //document.getElementById("weather_icon").src= icon_path;

    };
