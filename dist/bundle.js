/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log("Hello There!");
const totallyHiddenKey = "a410c7747e64412717e2146de1d964f7";
const weatherBtn = document.querySelector(".btn-send");
const inputContent = document.getElementById("location");

// Event Listeners

weatherBtn.addEventListener("click", () => {
  let value = inputContent.value;
  console.log("Input value: " + value + "\n-------------");
  showWeather(value);
});

// Functions

async function getWeather(location = "London") {
  let response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${totallyHiddenKey}`,
    { mode: "cors" }
  );
  let getWeatherObj = await response.json();

  return getWeatherObj;
}

async function showWeather(location) {
  let weather = await getWeather(location);
  let wlocation = weather.name;
  let wTemp = weather.main.temp;
  let wTempMin = weather.main.temp_min;
  let wTempMax = weather.main.temp_max;
  let wFeelsLike = weather.main.feels_like;
  let wPressure = weather.main.pressure;
  let wHumidity = weather.main.humidity;
  let wStatus = weather.weather[0].main;
  let wStatusDesc = weather.weather[0].description;

  createCard(
    wlocation,
    wTemp,
    wTempMin,
    wTempMax,
    wFeelsLike,
    wPressure,
    wHumidity,
    wStatus,
    wStatusDesc
  );
}

function createCard(
  location,
  temp,
  tempMin,
  tempMax,
  feels_like,
  pressure,
  humidity,
  status,
  statusDesc
) {
  console.log("location: " + location);
  console.log("Temp: " + temp);
  console.log("Temp Min: " + tempMin);
  console.log("Temp Max: " + tempMax);
  console.log("Feels Like: " + feels_like);
  console.log("Pressure: " + pressure);
  console.log("Humidity: " + humidity);
  console.log("Status: " + status);
  console.log("Status Desc: " + statusDesc);
}

// getWeather();
// showWeather("Stockholm");

/******/ })()
;
//# sourceMappingURL=bundle.js.map