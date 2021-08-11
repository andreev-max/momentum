"use strict";
var time = document.querySelector('.time');
var date = document.querySelector('.date');
var greeting = document.querySelector('.greeting');
var userName = document.querySelector('.userName');
var userFocus = document.querySelector('.userFocus');
var quote = document.querySelector('blockquote');
var buttonQuote = document.querySelector('.btn-quote');
var author = document.querySelector('figcaption');
var weatherIcon = document.querySelector('.weather-icon');
var temperature = document.querySelector('.temperature');
var humidity = document.querySelector('.humidity');
var windSpeed = document.querySelector('.wind-speed');
var city = document.querySelector('.city');
var buttonPicture = document.querySelector('.btn-picture');
var body = document.querySelector('body');
var images = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg",
    "08.jpg",
    "09.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
];
var arr;
(function (arr) {
    arr[arr["January"] = 0] = "January";
    arr[arr["February"] = 1] = "February";
    arr[arr["March"] = 2] = "March";
    arr[arr["April"] = 3] = "April";
    arr[arr["May"] = 4] = "May";
    arr[arr["June"] = 5] = "June";
    arr[arr["July"] = 6] = "July";
    arr[arr["August"] = 7] = "August";
    arr[arr["September"] = 8] = "September";
    arr[arr["October"] = 9] = "October";
    arr[arr["November"] = 10] = "November";
    arr[arr["December"] = 11] = "December";
})(arr || (arr = {}));
var week;
(function (week) {
    week[week["Sunday"] = 0] = "Sunday";
    week[week["Monday"] = 1] = "Monday";
    week[week["Tuesday"] = 2] = "Tuesday";
    week[week["Wednesday"] = 3] = "Wednesday";
    week[week["Thursday"] = 4] = "Thursday";
    week[week["Friday"] = 5] = "Friday";
    week[week["Saturday"] = 6] = "Saturday";
})(week || (week = {}));
var quotes = {
    1: [
        "Nelson Mandela",
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    ],
    2: [
        "Walt Disney",
        "The way to get started is to quit talking and begin doing.",
    ],
    3: [
        "Steve Jobs",
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    ],
    4: [
        "Eleanor Roosevelt",
        "If life were predictable it would cease to be life, and be without flavor.",
    ],
    5: [
        "Oprah Winfrey",
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    ],
    6: [
        "James Cameron",
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    ],
    7: [
        "John Lennon",
        "Life is what happens when you're busy making other plans.",
    ],
    8: [
        "Mother Teresa",
        "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    ],
    9: [
        "Franklin D. Roosevelt",
        "When you reach the end of your rope, tie a knot in it and hang on.",
    ],
    10: [
        "Margaret Mead",
        "Always remember that you are absolutely unique. Just like everyone else.",
    ],
    11: [
        "Robert Louis Stevenson",
        "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    ],
    12: [
        "Eleanor Roosevelt",
        "The future belongs to those who believe in the beauty of their dreams.",
    ],
    13: [
        "Benjamin Franklin",
        "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    ],
    14: [
        "Helen Keller",
        "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    ],
    15: [
        "Aristotle",
        "It is during our darkest moments that we must focus to see the light.",
    ],
    16: ["Anne Frank", "Whoever is happy will make others happy too."],
    17: [
        "Ralph Waldo Emerson",
        "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    ],
    18: [
        "Maya Angelou",
        "You will face many defeats in life, but never let yourself be defeated.",
    ],
    19: [
        "Babe Ruth",
        "Never let the fear of striking out keep you from playing the game.",
    ],
    20: ["Helen Keller", "Life is either a daring adventure or nothing at all."],
    21: [
        "Sheryl Sandberg",
        "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.",
    ],
    22: ["Gloria Steinem", "Dreaming, after all, is a form of planning."],
    23: [
        "Napoleon Hill",
        "Whatever the mind of man can conceive and believe, it can achieve.",
    ],
    24: ["Vincent van Gogh", "I would rather die of passion than of boredom."],
    25: [
        "Rosa Parks",
        "I have learned over the years that when one's mind is made up, this diminishes fear.",
    ],
    26: [
        "Les Brown",
        "Too many of us are not living our dreams because we are living our fears.",
    ],
    27: [
        "Confucius",
        "It does not matter how slowly you go as long as you do not stop.",
    ],
};
//# sourceMappingURL=constants.js.map