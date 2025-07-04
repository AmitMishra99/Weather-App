const apiKey = "bf5801e1a2361d8001af5edd7157f00e";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchbox = document.querySelector(".search-input")
const searchbtn = document.querySelector(".search-button")
const weatherIcn = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiURL +city+ `&appid=${apiKey}`)
    var data =  await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".tmp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcn.src = "./assets/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcn.src = "./assets/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcn.src = "./assets/rain.png"
    }
    
    else if(data.weather[0].main == "Drizzle"){
        weatherIcn.src = "./assets/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcn.src = "./assets/mist.png"
    }

}

searchbtn.addEventListener('click' , ()=>{
    checkWeather(searchbox.value)
})