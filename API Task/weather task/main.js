'use strict'

function getWeather(city) {
  const apiKey = "35f0778100e90aab378f505f60574aed";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        
        document.querySelector(".temp").textContent = `${Math.round(
          data.main.temp
        )}°C`;
        document.querySelector(".city").textContent = data.name;
        document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
        document.querySelector(".wind").textContent = `${data.wind.speed} km/hr`;

        // Update the weather icon
        const weatherIcon = document.getElementById("weather-icon");
        const iconCode = data.weather[0].icon;
        weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
      } else {
        alert("City not found. Please try again.");
      }
    })
}

// Event listener for the button click
document.querySelector("button").addEventListener("click", function () {
  const city = document.getElementById("city").value;
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter a city name");
  }
});
