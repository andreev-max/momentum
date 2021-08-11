let imageIndex = getRandomInt(21);
buttonQuote.addEventListener("click", showQuote);
buttonPicture.addEventListener("click", setImage);
userName.addEventListener("focus", focusName);
userName.addEventListener("blur", setName);
userName.addEventListener("keypress", setName);
userFocus.addEventListener("focus", focusFocus);
userFocus.addEventListener("blur", setFocus);
userFocus.addEventListener("keypress", setFocus);
city.addEventListener("focus", focusCity);
city.addEventListener("blur", setCity);
city.addEventListener("keypress", setCity);
getName();
getFocus();
getCity();
showQuote();
showTime();
setImage();
getWeather();
setInterval(showTime, 1000);

function showQuote(): void {
  let number: number = getRandomInt(28);
  author.textContent = quotes[number][0];
  quote.textContent = quotes[number][1];
}

const img: any = document.querySelector(".test-img")!;
async function getWeather() {
  if (localStorage.getItem("city")) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${
        city.textContent || "Minsk"
      }&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      console.log(src);
      weatherIcon.style.backgroundImage = `url(${src})`;
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      weatherIcon.style.opacity = "1";
      temperature.textContent = `Temperature: ${data.main.temp} °C; `;
      humidity.textContent = `Humidity: ${data.main.humidity} %; `;
      windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s; `;
      city.blur();
    } catch {
      localStorage.removeItem("city");
      city.textContent = "invalid city";
      weatherIcon.style.opacity = "0";
      temperature.textContent = ` `;
      humidity.textContent = ` `;
      windSpeed.textContent = ` `;
    }
  }
}
