const API_KEY = "befa2bac2e1d4d7f36dfbdcefbd2dbad";
const cityInput = document.querySelector("#city-name");
const btn = document.querySelector("#search-btn");


window.addEventListener("load", () => {
  cityInput.focus();
});

btn.addEventListener("click", () => {
  getCity(cityInput.value);
  cityInput.value = "";
});

cityInput.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    getCity(cityInput.value);
    cityInput.value = "";
  }
});

const getCity = (cityValue) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => displayUptade(data));
};

const displayUptade = (data) => {
  
  document.querySelector("#city").innerHTML = `<i class="fa-solid fa-location-pin"></i> ${data.name.toUpperCase()}`;
  document.querySelector("#degree").innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i> ${Math.round(data.main.temp)}<sup>°C</sup>`;
  document.querySelector("#icons").innerHTML = `<img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>`;
  document.querySelector("#mode").innerHTML = `${data.weather[0].description.toUpperCase()}`;
  document.querySelector("#max-min").innerHTML = `<i class="fa-solid fa-temperature-arrow-up"></i> ${Math.round(data.main.temp_max)}<sup>°C</sup> / ${Math.round(data.main.temp_min)}<sup>°C</sup> <i class="fa-solid fa-temperature-arrow-down"></i>`;
  document.querySelector("#wind").innerHTML = `<i class="fa-solid fa-wind"></i> ${data.wind.speed} km/h`;
};

const hour = ()=>{
    document.querySelector("#day").innerHTML = `${new Date().getUTCDate()}/${new Date().getUTCMonth()+1}/${new Date().getFullYear()}`;
    document.querySelector("#clock").innerHTML = `${
      new Date().getUTCHours() + 3 < 10
        ? "0" + new Date().getUTCHours()
        : new Date().getUTCHours()
    }:${
      new Date().getUTCMinutes() < 10
        ? "0" + new Date().getUTCMinutes()
        : new Date().getUTCMinutes()
    }:${
      new Date().getSeconds() < 10
        ? "0" + new Date().getSeconds()
        : new Date().getSeconds()
    }`;
}
setInterval(hour,1000)
