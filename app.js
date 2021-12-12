// array of quotes
const quotes = [
    "“The purpose of our lives is to be happy.” - Dalai Lama",
    "“Get busy living or get busy dying.” - Stephen King",
    "“You only live once, but if you do it right, once is enough.” - Mae West",
    "“Many of life’s failures are people who did not realize how close they were to success when they gave up.” – Thomas A. Edison",
    "“If you want to live a happy life, tie it to a goal, not to people or things.” – Albert Einstein",
    "“Never let the fear of striking out keep you from playing the game.” – Babe Ruth",
]

const btnGen = document.querySelector(".generator");
const quote = document.querySelector('#quote');


// main function
btnGen.addEventListener('click', function(){
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerHTML = randomQuote;
});

