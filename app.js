var quotes = [
  {
    quote: "Men are like steel. When they lose their temper, they lose their worth.",
    citation: "Chuck Norris",
    where: " ",
    date: "(1940 - )"
  },
  {
    quote: "Publishers are just middlemen. That's all. If artists could remember that more often, they'd save themselves a lot of aggrevation.",
    citation: "Hugh Macleod",
    where: "How To Be Creative: 4",
    date: "08-22-04"  
  },
  {
    quote: "Why be a man when you can be a success?",
    citation: "CBertolt Brecht",
    where: " ",
    date: "(1898 - 1956)"
  },
  {
    quote: "If mankind minus one were of one opinion, then mankind is no more justified in silencing the one than the one - if he had the power - would be justified in silencing mankind.",
    citation: "John Stuart Mill",
    where: " ",
    date: "(1806 - 1873)"
  },
  {
    quote: "Love is an act of endless forgiveness, a tender look which becomes a habit.",
    citation: "Peter Ustinov",
    where: " ",
    date: "(1921 - 2004)"
  }
]

var mainQuote = "";
var quoteCitation = "";
var quoteLocation = "";
var quoteDate = "";



var writeQuote = document.querySelector('blockquote p');
var writeCitation = document.querySelector('footer cite');
var changeButton = document.querySelector('button');


function changeQuote() {
  var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
  mainQuote = randomQuote.quote;
  quoteCitation = randomQuote.citation;
  quoteLocation = randomQuote.where;
  quoteDate = randomQuote.date;

  writeQuote.innerHTML = '<p>' + '"' + mainQuote + '"' + '</p>';
  writeCitation.innerHTML = quoteCitation + " " + quoteLocation + " " + quoteDate;

}

changeButton.addEventListener('click', changeQuote());
