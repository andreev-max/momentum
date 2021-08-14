let imageIndex = getRandomInt(21);
let quoteIndex = getRandomInt(27);
buttonQuote.addEventListener("click", showQuote);
buttonPicture.addEventListener("click", setImage);
userName.addEventListener("focus", focusName);
userName.addEventListener("blur", setName);
userName.addEventListener("keypress", setName);
userFocus.addEventListener("focus", focusFocus);
userFocus.addEventListener("blur", setFocus);
userFocus.addEventListener("keypress", setFocus);
city.addEventListener("focus", focusCity);
city.addEventListener("keypress", setCity);
city.addEventListener("blur", setCity);
setInterval(showTime, 1000);
const userCity = localStorage.getItem("city");
  if (userCity) {
    getWeather(userCity);
  }
  getName();
  getFocus();
  getCity();
  showQuote();
  showTime();
  setImage();

async function getWeather(selectedCity: string) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        selectedCity || city.textContent
      }&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`
    );
    const data = await res.json();
    weatherInfo.style.display = "flex";
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    temperature.textContent = `${data.main.temp} °C; `;
    humidity.textContent = `${data.main.humidity} %; `;
    windSpeed.textContent = `${data.wind.speed} m/s; `;
    weatherDescription.textContent = `${data.weather[0].description}`;
  } catch {
    localStorage.removeItem("city");
    city.textContent = "Invalid City";
    city.style.color = "red";
    weatherInfo.style.display = "none";
    setTimeout(() => {
      getCity();
      city.style.color = "white";
    }, 1500);
  }
}