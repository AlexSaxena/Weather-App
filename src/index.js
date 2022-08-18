console.log("Hello There!");
const totallyHiddenKey = "a410c7747e64412717e2146de1d964f7";

async function getWeather(location = "London") {
  let response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${totallyHiddenKey}`,
    { mode: "cors" }
  );
  let getWeatherObj = await response.json();
  // console.log("inside GetWeather func.. ");
  // console.log(getWeatherObj);
  // console.log(getWeatherObj.name);
  // console.log(getWeatherObj.main);
  // console.log(getWeatherObj.main.temp);
  // console.log(getWeatherObj.main.temp_min);
  // console.log(getWeatherObj.main.temp_max);
  // console.log(getWeatherObj.main.feels_like);
  // console.log(getWeatherObj.main.pressure);
  // console.log(getWeatherObj.main.humidity);
  // console.log(getWeatherObj.weather[0].main);
  // console.log(getWeatherObj.weather[0].description);

  return getWeatherObj;
}

// Contorller function
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
  console.log("From show Weather Func name: " + weather.name);

  return console.log("Make a Card Func...");
}

getWeather();
