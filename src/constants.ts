const time = document.querySelector(".time")!;
const date = document.querySelector(".date")!;
const greeting = document.querySelector(".greeting")!;
const userName: any = document.querySelector(".userName")!;
const userFocus: any = document.querySelector(".userFocus")!;
const quote = document.querySelector("blockquote")!;
const buttonQuote = document.querySelector(".btn-quote")!;
const buttonTranslateQuote = document.querySelector(".btn-translate-quote")!;
const author = document.querySelector(".author")!;
const weatherInfo: any = document.querySelector(".weather-info")!;
const weatherIcon: any = document.querySelector(".weather-icon")!;
const weatherDescription: any = document.querySelector(
  ".weather-icon-description"
)!;
const temperature = document.querySelector(".temperature")!;
const humidity = document.querySelector(".humidity")!;
const windSpeed = document.querySelector(".wind-speed")!;
const city: any = document.querySelector(".city")!;
const buttonPicture: any = document.querySelector(".btn-picture")!;
const body = document.querySelector("body")!;

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

const englishQuotes: any = {
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
    "Confucius",
    "Never let the fear of striking out keep you from playing the game.Don’t worry if you have no position: worry about making yourself worthy of one. Don’t worry if you aren’t known and admired: devote yourself to a life that deserves admiration.",
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

const russianQuotes: any = {
  1: [
    "Нельсон Мандела",
    "Величайшая слава в жизни заключается не в том, чтобы никогда не падать, а в том, чтобы подниматься каждый раз, когда мы падаем.",
  ],
  2: ["Уолт Дисней", "Способ начать - это перестать говорить и начать делать."],
  3: [
    "Стив Джобс",
    "Ваше время ограничено, так что не тратьте его впустую, живя чужой жизнью. Не попадайтесь в ловушку догмы, которая заключается в том, чтобы жить с результатами мышления других людей.",
  ],
  4: [
    "Элеонора Рузвельт",
    "Если бы жизнь была предсказуемой, она перестала бы быть жизнью и была бы лишена вкуса.",
  ],
  5: [
    "Опра Уинфри",
    "Если вы посмотрите на то, что у вас есть в жизни, у вас всегда будет больше. Если вы посмотрите на то, чего у вас нет в жизни, вам никогда не будет достаточно.",
  ],
  6: [
    "Джеймс Кэмерон",
    "Если вы ставите перед собой смехотворно высокие цели и это неудача, вы потерпите неудачу выше всех остальных успехов.",
  ],
  7: [
    "Джон Леннон",
    "Жизнь - это то, что происходит, когда ты занят другими планами.",
  ],
  8: [
    "Мать Тереза",
    "Распространяйте любовь повсюду, куда бы вы ни пошли. Пусть никто никогда не придет к вам, не оставив вас счастливыми.",
  ],
  9: [
    "Рузвельт, Франклин Делано",
    "Когда вы достигнете конца своей веревки, завяжите ее узлом и держитесь.",
  ],
  10: [
    "Маргарет Мид",
    "Всегда помните, что вы абсолютно уникальны. Как и все остальные.",
  ],
  11: [
    "Роберт Льюис Стивенсон",
    "Судите каждый день не по урожаю, который вы собираете, а по семенам, которые вы сажаете.",
  ],
  12: [
    "Элеонора Рузвельт",
    "Будущее принадлежит тем, кто верит в красоту своей мечты.",
  ],
  13: [
    "Бенджамин Франклин",
    "Скажи мне, и я забуду. Научи меня, и я запомню. Вовлеките меня, и я научусь.",
  ],
  14: [
    "Хелен Келлер",
    "Самые лучшие и прекрасные вещи в мире нельзя увидеть или даже потрогать - их нужно чувствовать сердцем.",
  ],
  15: [
    "Аристотель",
    "Именно в самые мрачные моменты мы должны сосредоточиться, чтобы увидеть свет.",
  ],
  16: ["Анна Франк", "Тот, кто счастлив, сделает счастливыми и других."],
  17: [
    "Ральф Уолдо Эмерсон",
    "Не идите туда, куда может привести путь, идите вместо этого туда, где нет пути, и оставьте след.",
  ],
  18: [
    "Майя Энджелоу",
    "Вы столкнетесь со многими поражениями в жизни, но никогда не позволяйте себе потерпеть поражение.",
  ],
  19: [
    "Конфуций",
    "Не волнуйтесь, если у вас нет должности: беспокойтесь о том, чтобы сделать себя достойным ее. Не волнуйтесь, если вас не знают и вами не восхищаются: посвятите себя жизни, которая заслуживает восхищения.",
  ],
  20: [
    "Хелен Келлер",
    "Жизнь - это либо смелое приключение, либо вообще ничего.",
  ],
  21: [
    "Шерил Сэндберг",
    "Если вам предложат место на ракетном корабле, не спрашивайте, какое место! Просто продолжай.",
  ],
  22: ["Глория Стайнем", "В конце концов, мечтание - это форма планирования."],
  23: [
    "Наполеон Хилл",
    "Все, что человеческий разум может постичь и во что он может поверить, он может достичь.",
  ],
  24: ["Винсент ван Гог", "Я скорее умру от страсти, чем от скуки."],
  25: [
    "Роза Паркс",
    "За эти годы я понялa, что, когда человек принимает решение, это уменьшает страх.",
  ],
  26: [
    "Лесли Браун",
    "Слишком многие из нас не живут своими мечтами, потому что мы живем своими страхами.",
  ],
  27: [
    "Конфуций",
    "Неважно, как медленно вы идете, главное, чтобы вы не останавливались.",
  ],
};
