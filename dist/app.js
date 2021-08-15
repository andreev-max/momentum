"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var imageIndex = getRandomInt(21);
var quoteIndex = getRandomInt(27);
localStorage.setItem("lang", "en");
buttonQuote.addEventListener("click", showQuote);
buttonTranslateQuote.addEventListener("click", translateQuote);
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
var userCity = localStorage.getItem("city");
if (userCity) {
    getWeather(userCity);
}
getName();
getFocus();
getCity();
showQuote();
showTime();
setImage();
function getWeather(selectedCity) {
    return __awaiter(this, void 0, void 0, function () {
        var res, data, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4, fetch("https://api.openweathermap.org/data/2.5/weather?q=" + (selectedCity || city.textContent) + "&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric")];
                case 1:
                    res = _b.sent();
                    return [4, res.json()];
                case 2:
                    data = _b.sent();
                    weatherInfo.style.display = "flex";
                    weatherIcon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
                    temperature.textContent = data.main.temp + " \u00B0C; ";
                    humidity.textContent = data.main.humidity + " %; ";
                    windSpeed.textContent = data.wind.speed + " m/s; ";
                    weatherDescription.textContent = "" + data.weather[0].description;
                    return [3, 4];
                case 3:
                    _a = _b.sent();
                    localStorage.removeItem("city");
                    city.textContent = "Invalid City";
                    city.style.color = "red";
                    weatherInfo.style.display = "none";
                    setTimeout(function () {
                        getCity();
                        city.style.color = "white";
                    }, 1500);
                    return [3, 4];
                case 4: return [2];
            }
        });
    });
}
//# sourceMappingURL=app.js.map