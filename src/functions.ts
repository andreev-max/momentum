




function setCity(event: any) {
  const cityValue: string = event.target.textContent.trim();
  localStorage.setItem("city", cityValue);
  if (event.keyCode === 13 || event.type === "blur") {
    if (cityValue && city.textContent !== "invalid value") {
      localStorage.setItem("city", cityValue);
      getWeather();
    } else {
      getCity();
    }
    city.blur();
  }
}

function focusCity(): void {
  city.textContent = "";
}

function getCity() {
  city.textContent = localStorage.getItem("city") || "[Enter city]";
}

function setFocus(event: any): void {
  const focusValue: string = event.target.textContent.trim();
  localStorage.setItem("userFocus", focusValue);
  if (event.keyCode === 13 || event.type === "blur") {
    if (focusValue) {
      localStorage.setItem("userFocus", focusValue);
    } else {
      getFocus();
    }
    userFocus.blur();
  }
}

function getFocus(): void {
  userFocus.textContent = localStorage.getItem("userFocus") || "[Enter Focus]";
}

function focusFocus(): void {
  userFocus.textContent = "";
}

function setName(event: any): void {
  const nameValue: string = event.target.textContent.trim();
  localStorage.setItem("userName", nameValue);
  if (event.keyCode === 13 || event.type === "blur") {
    if (nameValue) {
      localStorage.setItem("userName", nameValue);
    } else {
      getName();
    }
    userName.blur();
  }
}

function getName(): void {
  userName.textContent = localStorage.getItem("userName") || "[Enter Name]";
}

function focusName(): void {
  userName.textContent = "";
}

function showTime(): void {
  const today: Date = new Date();
  const month: number = today.getMonth();
  const day: number = today.getDate();
  const weekDay: number = today.getDay();
  const hour: number = today.getHours();
  const min: number = today.getMinutes();
  const sec: number = today.getSeconds();
  date.innerHTML = `${showWeekDay(weekDay)}, ${day} ${showMonth(month)}`;
  time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)}`;
  greeting.textContent = setGreet(hour);
  if (min === 23 && sec === 0) {
    setImage();
  }
}

function setImage(): void {
  if (imageIndex > 20) imageIndex = 0;
  const hour: number = new Date().getHours();
  let base: string = "";
  if (hour < 6 && hour >= 0) {
    base = "./assets/night/";
  } else if (hour < 12 && hour >= 6) {
    base = "./assets/morning/";
  } else if (hour < 18 && hour >= 12) {
    base = "./assets/day/";
  } else {
    base = "./assets/evening/";
  }
  body.style.backgroundImage = `url(${base}${
    images[imageIndex % images.length]
  })`;
  imageIndex++;
  buttonPicture.disabled = true;
  setTimeout(function () {
    buttonPicture.disabled = false;
  }, 1000);
}

function setGreet(hour: number): string {
  let greet: string = "";
  if (hour < 6 && hour >= 0) {
    greet = "Good Night, ";
  } else if (hour < 12 && hour >= 6) {
    greet = "Good Morning, ";
  } else if (hour < 18 && hour >= 12) {
    greet = "Good Afternoon, ";
  } else {
    greet = "Good Evening, ";
  }
  return greet;
}

function getRandomInt(max: number): number {
  const roundedMax: number = Math.floor(max);
  return Math.floor(Math.random() * (roundedMax - 1)) + 1;
  //Максимум не включается, минимум включается
}

function addZero(n: number): string {
  return (n < 10 ? "0" : "") + n;
}

function showMonth(month: number): string {
  return arr[month];
}

function showWeekDay(weekDay: number): string {
  return week[weekDay];
}
