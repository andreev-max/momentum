// DOM Elements
const time = document.querySelector('.time'),
  date = document.querySelector('.date'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus'),
  quote = document.querySelector('blockquote'),
  buttonQuote = document.querySelector('.btn-quote'),
  author = document.querySelector('figcaption'),
  weatherIcon = document.querySelector('.weather-icon'),
  temperature = document.querySelector('.temperature'),
  humidity = document.querySelector('.humidity'),
  windSpeed = document.querySelector('.wind-speed'),
  city = document.querySelector('.city'),
  buttonPicture = document.querySelector('.btn-picture'),
  body = document.querySelector('body'),
  baseDay = '/assets/day/',
  baseEvening = '/assets/evening/',
  baseNight = '/assets/night/',
  baseMorning = '/assets/morning/',
  images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg',
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'
  ];
let i = 0;

// Show Time
function showTime() {
  let today = new Date(),
    month = today.getMonth(),
    day = today.getDate(),
    weekDay = today.getDay(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  function showMonth(month) {
    let arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December ", ]
    return arr[month]
  }

  function showWeekDay(weekDay) {
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return week[weekDay]
  }

  // Output Time
  date.innerHTML = `${showWeekDay(weekDay)}, ${day} ${showMonth(month)}`;
  time.innerHTML = `${hour}:${addZero(min)}:${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Set Greeting

function setGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 6) {
    greeting.textContent = 'Good Night, ';
  } else if (hour < 12) {
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    greeting.textContent = 'Good Afternoon, ';
  } else {
    greeting.textContent = 'Good Evening, ';
  }
  setInterval(showTime, 1000);
};





function getImage() {
  let today = new Date();
  hour = today.getHours(),
    base = 0;

  if (hour < 6 && hour >= 0) {
    base = baseNight
  } else if (hour < 12 && hour >= 6) {
    base = baseMorning
  } else if (hour < 18 && hour >= 12) {
    base = baseDay
  } else {
    base = baseEvening
  };
  const index = i % images.length;
  const imageSrc = base + images[index];
  viewBgImage(imageSrc);
  i++;
  buttonPicture.disabled = true;
  setTimeout(function () {
    buttonPicture.disabled = false
  }, 1000);
};

function viewBgImage(data) {
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {
    body.style.backgroundImage = `url(${src})`;
  };
};



buttonPicture.addEventListener('click', getImage);


// Get Name
function getName() {
  if (localStorage.getItem('name') === null || localStorage.getItem('name') === "") {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      if (name.textContent !== "") {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
      } else {
        name.textContent = localStorage.getItem('name');
        name.blur();
      }
    } else {
      localStorage.setItem('name', e.target.innerText);
    }
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === "") {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      if (focus.textContent !== "") {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
      } else {
        focus.textContent = localStorage.getItem('focus');
        focus.blur();
      }
    } else {
      localStorage.setItem('focus', e.target.innerText);
    }
  }
}

// Get quote
function showQuote() {
  const quoteArray = ["The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "Life is what happens when you're busy making other plans.",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "When you reach the end of your rope, tie a knot in it and hang on.",
    "Always remember that you are absolutely unique. Just like everyone else.",
    "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "It is during our darkest moments that we must focus to see the light.",
    "Whoever is happy will make others happy too.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "You will face many defeats in life, but never let yourself be defeated.",
    "Never let the fear of striking out keep you from playing the game.",
    "Life is either a daring adventure or nothing at all.",
    "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.",
    "Dreaming, after all, is a form of planning.",
    "Whatever the mind of man can conceive and believe, it can achieve.",
    "I would rather die of passion than of boredom.",
    "I have learned over the years that when one's mind is made up, this diminishes fear.",
    "Too many of us are not living our dreams because we are living our fears.",
    "It does not matter how slowly you go as long as you do not stop."
  ]

  const authorArray = ["Nelson Mandela", "Walt Disney", "Steve Jobs", "Eleanor Roosevelt", "Oprah Winfrey", "James Cameron", "John Lennon", "Mother Teresa",
    "Franklin D. Roosevelt", "Margaret Mead", "Robert Louis Stevenson", "Eleanor Roosevelt", "Benjamin Franklin", "Helen Keller", "Aristotle", "Anne Frank",
    "Ralph Waldo Emerson", "Maya Angelou", "Babe Ruth", "Helen Keller", "Sheryl Sandberg", "Gloria Steinem", "Napoleon Hill", "Vincent van Gogh",
    "Rosa Parks", "Les Brown", "Confucius"
  ]

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  let randomNumber = getRandomInt(27)
  quote.textContent = quoteArray[randomNumber];
  author.textContent = authorArray[randomNumber];
}

buttonQuote.addEventListener('click', showQuote);

// Weather

// Get City
function getCity() {
  if (localStorage.getItem('city') === null || localStorage.getItem('city') === "") {
    city.textContent = '[Enter city]';
  } else {
    city.textContent = localStorage.getItem('city');
  }
}

// Set City

function setCity(e) {
  if (e.code === 'Enter') {
    if (city.textContent !== "" && city.textContent !== "invalid value") {
      localStorage.setItem('city', e.target.innerText);
      city.blur();
      getWeather();
    } else {
      city.textContent = localStorage.getItem('city');
      city.blur();
    }
  }
}


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



city.addEventListener('keypress', setCity);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
//localStorage.clear()
// Run
showTime();
setGreet();
getName();
getFocus();
getCity();
showQuote();
getWeather();
getImage()