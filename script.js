

async function getWeather() {
  if (localStorage.getItem('city') !== null && localStorage.getItem('city') !== "") {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
      const res = await fetch(url);
      const data = await res.json();
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      weatherIcon.style.opacity = "1";
      temperature.textContent = `${data.main.temp} °C; `;
      humidity.textContent = `${data.main.humidity} %; `;
      windSpeed.textContent = `${data.wind.speed} m/s; `;
      city.blur();
    } catch {
      localStorage.removeItem('city');
      city.textContent = "invalid value";
      weatherIcon.style.opacity = "0";
      temperature.textContent = ` `;
      humidity.textContent = ` `;
      windSpeed.textContent = ` `;
    }
  }
}


weatherIcon.style.color = "rgba(0, 195, 255, 1)";
weatherIcon.style.width = "1rem";
weatherIcon.style.height = "1rem";