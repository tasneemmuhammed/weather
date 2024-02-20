var container=document.querySelector(".container");
var search=document.querySelector(".search button");
var weather=document.querySelector(".weather");
var details=document.querySelector(".details");
var error404=document.querySelector(".not-found");

search.addEventListener("click",() => {
    var APIKey= "2e79d4587a0bd0f98d5294c3ecd7e511";
    var city=document.querySelector(".search input").value;
    
    if (city == "")
    return;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json =>{
   
if(json.cod == '404'){
    container.style.height = '400px';
    weather.classList.remove('active');
    details.classList.remove('active');
    error404.classList.add('active');
    return;
   }
   container.style.height= '555px';
   weather.classList.add('active');
   details.classList.add('active');
   error404.classList.remove('active');
   
    var image=document.querySelector(".weather img");
    var temperature=document.querySelector(".weather .temperature");
    var description=document.querySelector(".weather .description");
    var humidity=document.querySelector(".details .humidity span");
    var wind=document.querySelector(".details .wind span");
    
    switch (json.weather[0].main) {
        case "Clear":
            image. src ="clear.png";
            break;

            case "Rain":
            image. src ="rain.png";
            break;

            case "Snow":
            image. src ="snow.png";
            break;

            case "Haze":
            image. src ="mist.png";
            break;

            case "Clouds":
            image. src ="cloud.png";
            break;
    
        default:
            image.src="Cloud.png";
    }

temperature.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`;
description.innerHTML=`${json.weather[0].description}`;
humidity.innerHTML=`${json.main.humidity}%`;
wind.innerHTML=`${parseInt(json.wind.speed)}Km/h`;

});

});