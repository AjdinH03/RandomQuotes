// array of quotes
const quotes = [
    "“The purpose of our lives is to be happy.” - Dalai Lama",
    "“Get busy living or get busy dying.” - John Lennon",
    "“You only live once, but if you do it right, once is enough.” - Stephen King"
]

const btnGen = document.querySelector(".generator");
const quote = document.querySelector('#quote');


// main function
btnGen.addEventListener('click', function(){
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerHTML = randomQuote;
});
