const time = document.querySelector('.time')!
const date = document.querySelector('.date')!
const greeting = document.querySelector('.greeting')!
const userName: any = document.querySelector('.userName')!
const userFocus: any = document.querySelector('.userFocus')!
const quote = document.querySelector('blockquote')!
const buttonQuote = document.querySelector('.btn-quote')!
const author = document.querySelector('figcaption')!
const weatherIcon: any = document.querySelector('.weather-icon')!
const temperature = document.querySelector('.temperature')!
const humidity = document.querySelector('.humidity')!
const windSpeed = document.querySelector('.wind-speed')!
const city: any = document.querySelector('.city')!
const buttonPicture: any = document.querySelector('.btn-picture')!
const body = document.querySelector('body')!

const images = [
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

enum arr {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

enum week {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const quotes: any = {
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
