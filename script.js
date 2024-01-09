const apiKey = "fca772dd6c4d6cd710403b450b14d228";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const icon = document.querySelector(".weathericon img")
async function checkWeather (city){
    const response =  await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

if(response.status == 404){
    document.querySelector(".error").style.display = "initial";
    document.querySelector(".weather").style.display = "none";

}
else{
    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#windspeed").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
icon.src = "clouds.png"
    }
   else if(data.weather[0].main == "Clear"){
icon.src = "clear.png"
    }
   else if(data.weather[0].main == "Snow"){
icon.src = "snow.png"
    }
  else if(data.weather[0].main == "Rain"){
icon.src = "rain.png"
    }
  else if(data.weather[0].main == "Mist"){
icon.src = "mist.png"
    }
  else if(data.weather[0].main == "Drizzle"){
icon.src = "drizzle.png"
    }
    document.querySelector(".weather").style.display = "initial";
    document.querySelector(".error").style.display = "none";

}
}

searchbtn.addEventListener("click",function(){

    checkWeather(searchInput.value);
})