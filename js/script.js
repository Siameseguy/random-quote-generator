// array of quotes
const quotes = [
  {
    quote: "Men are like steel. When they lose their temper, they lose their worth.",
    source: "Chuck Norris",
    citation: " ",
    year: "(1940 - )"
  },
  {
    quote: "Publishers are just middlemen. That's all. If artists could remember that more often, they'd save themselves a lot of aggrevation.",
    source: "Hugh Macleod",
    citation: "How To Be Creative: 4",
    year: "08-22-04"  
  },
  {
    quote: "Why be a man when you can be a success?",
    source: "CBertolt Brecht",
    citation: " ",
    year: "(1898 - 1956)"
  },
  {
    quote: "If mankind minus one were of one opinion, then mankind is no more justified in silencing the one than the one - if he had the power - would be justified in silencing mankind.",
    source: "John Stuart Mill",
    citation: " ",
    year: "(1806 - 1873)"
  },
  {
    quote: "Love is an act of endless forgiveness, a tender look which becomes a habit.",
    source: "Peter Ustinov",
    citation: " ",
    year: "(1921 - 2004)"
  }
]

// // eventlistner for button
// changeButton.addEventListener('click', getRandomQuote());
const quote = document.querySelector('.quote');
const source = document.querySelector('.source');
const citation = document.querySelector('.citation');
const year = document.querySelector('.year');
const loadQuote = document.querySelector('button#loadQuote');

// get random quote
const getRandomQuote = () => {
  let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
  return randomQuote;
}

// print function
const printQuote = () => {
  // bring in the return value of the getRandomQuote function to make it available
  const currentQuote = getRandomQuote();
  quote.innerHTML    = currentQuote.quote;
  source.innerHTML   = currentQuote.source;
  citation.innerHTML = currentQuote.citation;
  year.innerHTML     = currentQuote.year;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
loadQuote.addEventListener("click", printQuote, false);

// print quote when page loads.
printQuote();
