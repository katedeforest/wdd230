// WEATHER INFORMATION
const LAT = "40.4968845";
const LON = "-112.0710874";
const APIKEY = "f4e7eabc96c8e72dd2d715d4dea5f961";
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

function displayWeather(weatherData) {
  // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
  // const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
  const weatherTemp = weatherData.main.temp.toFixed(0);
  const desc = weatherData.weather[0].description;
  const humidity = weatherData.main.humidity.toFixed(0);
  const weatherWindSpeed = weatherData.wind.speed.toFixed(0);

  //Set up the weather icon
  let skyIcon = document.querySelector("#sky-icon");
  skyIcon.setAttribute("src", iconsrc);
  skyIcon.setAttribute("alt", desc);

  //Set up the tempurature
  tempuratureSpan.innerHTML = `${weatherTemp}`;

  //Set up the weather description
  let weatherDesc = document.querySelector("#description");
  weatherDesc.innerHTML = `${desc}`;

  //Set up the humidity
  let weatherHum = document.querySelector("#humidity");
  weatherHum.innerHTML = `${humidity}`;

  //Set up the wind speed
  windspeedSpan.innerHTML = `${weatherWindSpeed}`;
}

async function getTheWeather() {
  try {
    const response = await fetch(weatherURL);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getTheWeather();

// WIND CHILL CALCULATION
function showWindChill(temp, speed) {
  const windChillSpan = document.querySelector("#chill");
  let message = "N/A";

  if (temp <= 50 && speed > 3) {
    let chillfactor = Math.pow(speed, 0.16);
    let chill = Math.round(
      25.74 + 0.6215 * temp - 35.75 * chillfactor + 0.4275 * temp * chillfactor
    );
    message = `${chill}`;
  }

  windChillSpan.textContent = message;
}

const tempuratureSpan = document.querySelector("#temp");
const windspeedSpan = document.querySelector("#speed");
const tempurature = parseInt(tempuratureSpan.textContent);
const windspeed = parseInt(windspeedSpan.textContent);

showWindChill(tempurature, windspeed);
