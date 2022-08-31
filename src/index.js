console.log("Hello There!");
const totallyHiddenKey = "a410c7747e64412717e2146de1d964f7";
const weatherBtn = document.querySelector(".btn-send");
const inputContent = document.getElementById("location");
const resetBtn = document.querySelector(".reset-btn");

// Event Listeners

weatherBtn.addEventListener("click", () => {
  let value = inputContent.value;
  console.log("Input value: " + value + "\n-------------");
  showWeather(value);
  inputContent.value = "";
});

resetBtn.addEventListener("click", () => {
  console.log("Container Hidden");
  let container = document.querySelector(".weather-output-container");
  container.style.visibility = "hidden";
});

// Functions

async function getWeather(location = "London") {
  let response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${totallyHiddenKey}`,
    { mode: "cors" }
  );
  let getWeatherObj = await response.json();

  return getWeatherObj;
}

async function showWeather(location) {
  let weather = await getWeather(location);
  let wlocation = weather.name;
  let wTemp = Math.round(weather.main.temp);
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
  console.log(
    `location: ${location}\n Temp: ${temp} \n Temp Min: ${tempMin} \n Temp Max: ${tempMax} \n Feels Like: ${feels_like}\n
    Pressure: ${pressure} \n Humidity: ${humidity} \n Status: ${status} \n Status Desc: ${statusDesc}`
  );
  let container = document.querySelector(".weather-output-container");
  document.querySelector(".output-title").innerText = location;
  document.querySelector(".main-temp").innerHTML = `${temp} &#8451;`;
  document.querySelector(".temp-min").innerHTML = `Min: ${tempMin} &#8451; | `;
  document.querySelector(".temp-max").innerHTML = `Max: ${tempMax} &#8451;`;
  document.querySelector(
    ".temp-feels-like"
  ).innerHTML = `Feels Like: ${feels_like} &#8451;`;
  document.querySelector(".main-status").innerText = status;
  document.querySelector(".status-desc").innerText = statusDesc;
  document.querySelector(
    ".humidity"
  ).innerText = `Humidity: ${humidity} RHhr | `;
  document.querySelector(".wind-pressure").innerText = `Pressure: ${pressure}p`;

  container.style.visibility = "visible";
}

// getWeather();
// showWeather("Stockholm");
