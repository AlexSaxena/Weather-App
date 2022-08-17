console.log("Hello There!");
const totallyHiddenKey = "a410c7747e64412717e2146de1d964f7";

async function getWeather(location = "London") {
  let response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${totallyHiddenKey}`,
    { mode: "cors" }
  );
  let showWeather = await response.json();
  console.log(showWeather);

  return showWeather;
}

getWeather();
