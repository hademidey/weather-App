const form = document.getElementById(`form`);
const input = document.getElementById(`input`);
const weatherIconEl = document.getElementById(`weatherIcon`);
const weatherConditionEl = document.getElementById(`weatherConEl`);
const weatherTempEl = document.getElementById(`weatherTempEl`);
const cityNameEl = document.getElementById(`cityNameEl`);
const precipitationEl = document.getElementById(`precipitationEl`);
const humidityEl = document.getElementById(`humidityEl`)
const windSpeedEl = document.getElementById(`windSpeedEl`)
// console.log(humidityEl)
// console.log(precipitationEl)

const API_KEY = "2a81f5a435a62590d766910298aa3791";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let cityName = input.value;
  console.log(cityName);

  let result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
  );
  let data = await result.json();
  console.log(data);
  console.log(data.main.humidity);

  cityNameEl.textContent = data.name;
  weatherTempEl.textContent = data.main.temp.toFixed(0);
  humidityEl.textContent = data.main.humidity;
  windSpeedEl.textContent = data.wind.speed;
  precipitationEl.textContent = data.wind.deg

  if (data.weather[0].main === `Clouds`) {
    weatherIconEl.src = `./cloudy.png`;
    weatherConditionEl.textContent = `Cloudy`;
  } else if (data.weather[0].main === `Sunny`) {
    weatherIconEl.src = `./suny.png`;
    weatherConditionEl.textContent = `Sunny`;
  } else if (data.weather[0].main === `Rainy`) {
    weatherIconEl.src = `./rain.png`;
    weatherConditionEl.textContent = `Rainy`;
  } else if (data.weather[0].main === `Clear`) {
    weatherIconEl.src = `./clearicon.png`;
    weatherConditionEl.textContent = `Clear`;
  }
});
