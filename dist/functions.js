"use strict";
function setCity(event) {
    var cityValue = event.target.textContent.trim();
    localStorage.setItem("city", cityValue);
    if (event.keyCode === 13 || event.type === "blur") {
        getWeather(cityValue);
        city.blur();
    }
}
function focusCity() {
    city.textContent = "";
}
function getCity() {
    city.textContent = localStorage.getItem("city") || "[Enter city]";
}
function setFocus(event) {
    var focusValue = event.target.textContent.trim();
    localStorage.setItem("userFocus", focusValue);
    if (event.keyCode === 13 || event.type === "blur") {
        localStorage.setItem("userFocus", focusValue);
        getFocus();
        userFocus.blur();
    }
}
function getFocus() {
    userFocus.textContent = localStorage.getItem("userFocus") || "[Enter Focus]";
}
function focusFocus() {
    userFocus.textContent = "";
}
function setName(event) {
    var nameValue = event.target.textContent.trim();
    localStorage.setItem("userName", nameValue);
    if (event.keyCode === 13 || event.type === "blur") {
        getName();
        userName.blur();
    }
}
function getName() {
    userName.textContent = localStorage.getItem("userName") || "[Enter Name]";
}
function focusName() {
    userName.textContent = "";
}
function showTime() {
    var today = new Date();
    var month = today.getMonth();
    var day = today.getDate();
    var weekDay = today.getDay();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    date.innerHTML = showWeekDay(weekDay) + ", " + day + " " + showMonth(month);
    time.innerHTML = hour + ":" + addZero(min) + ":" + addZero(sec);
    greeting.textContent = setGreet(hour);
    if (min === 0 && sec === 0) {
        setImage();
    }
}
function showQuote() {
    if (imageIndex > 27)
        imageIndex = 0;
    author.textContent = quotes[quoteIndex][0];
    quote.textContent = quotes[quoteIndex][1];
    quoteIndex++;
}
function setImage() {
    if (imageIndex > 20)
        imageIndex = 0;
    var hour = new Date().getHours();
    var base = "";
    if (hour < 6 && hour >= 0) {
        base = "./assets/night/";
    }
    else if (hour < 12 && hour >= 6) {
        base = "./assets/morning/";
    }
    else if (hour < 18 && hour >= 12) {
        base = "./assets/day/";
    }
    else {
        base = "./assets/evening/";
    }
    body.style.backgroundImage = "url(" + base + images[imageIndex % images.length] + ")";
    imageIndex++;
    buttonPicture.disabled = true;
    setTimeout(function () {
        buttonPicture.disabled = false;
    }, 1000);
}
function setGreet(hour) {
    var greet = "";
    if (hour < 6 && hour >= 0) {
        greet = "Good Night, ";
    }
    else if (hour < 12 && hour >= 6) {
        greet = "Good Morning, ";
    }
    else if (hour < 18 && hour >= 12) {
        greet = "Good Afternoon, ";
    }
    else {
        greet = "Good Evening, ";
    }
    return greet;
}
function getRandomInt(max) {
    var roundedMax = Math.floor(max);
    return Math.floor(Math.random() * (roundedMax - 1)) + 1;
}
function addZero(n) {
    return (n < 10 ? "0" : "") + n;
}
function showMonth(month) {
    return arr[month];
}
function showWeekDay(weekDay) {
    return week[weekDay];
}
//# sourceMappingURL=functions.js.map