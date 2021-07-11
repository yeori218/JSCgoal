const weather = document.querySelector("#weather span:first-child");
const weatherNow = document.querySelector("#weather span:nth-child(2)");
const weatherFeel = document.querySelector("#weather span:last-child");
const API_KEY = "d50ddba1051311877383b6b08b20dcf6";

function onGeolocationOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        weather.innerText = `${data.name} | ${data.weather[0].main}`;
        weatherNow.innerText = `현재온도 - ${data.main.temp} ºC`;
        weatherFeel.innerText = `체감온도 - ${data.main.feels_like} ºC`;
    });
}
function onGeolocationError(){
    alert("Location not found 😥");
}

navigator.geolocation.getCurrentPosition(onGeolocationOk, onGeolocationError);