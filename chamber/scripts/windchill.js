function showWindChill(temp, speed) {
  const windChillSpan = document.querySelector(".chill");
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

const tempuratureSpan = document.querySelector(".temp");
const windspeedSpan = document.querySelector(".speed");
const tempurature = parseInt(tempuratureSpan.textContent);
const windspeed = parseInt(windspeedSpan.textContent);

showWindChill(tempurature, windspeed);
