/* const uiQuoteBox =document.getElementById('quote-box').getElementsByClassName('citation')[0].innerHTML; */
const uiQuoteBox = document.getElementById('quote-box').getElementsByClassName('citation')[0];

console.log(uiQuoteBox);

let setQuote = '';
let setInfo = '';

let quotes = [
	{
		quote: 'firstq',
		source: 'author',
		citation: 'book',
		year: 1997,
		tag: ['speech','book','presidental']
	},
	{
		quote: 'secondq',
		source: 'author2',
		citation: 'book2',
		year: 2017,
		tag: ['speech','sequel','book','presidental']
	},
	{
		quote: 'Don\'t cry because it\'s over, smile because it happened.',
		source: 'Dr. Suess',
		year: 0,
		tag: ['speech','sequel','book','presidental']
	},
	{
		quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
		source: 'J.K. Rowling',
		citation: 'Harry Potter and the Goblet of Fire',
		year: 2017,
		tag: ['book','sequel','presidental']
	}
];

let totalNumberQuotes = quotes.length;

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
  }

function getRandomQuote() {
	let selectQuoteNum = getRandomInt(totalNumberQuotes);
	
	setQuote = quotes[selectQuoteNum].quote;
	console.log('setQuote: ' + setQuote);
	let selectQuoteSource = quotes[selectQuoteNum].source;
	console.log('source: ' + selectQuoteSource);
	let selectQuoteCitation = quotes[selectQuoteNum].citation;
	let selectQuoteYear = quotes[selectQuoteNum].year;

	/* 	setInfo = selectQuoteSource + '<span class="citation">' + selectQuoteCitation + '</span><span class="year">' + selectQuoteYear + '</span>'; */
   
	setInfo = selectQuoteSource;
	if (!(selectQuoteCitation == '' || selectQuoteCitation === undefined || selectQuoteCitation == null || selectQuoteCitation.length <= 0)) { 
		setInfo = setInfo + '<span class="citation">' + selectQuoteCitation + '</span>';
	}
}	

function printQuote() { 
	getRandomQuote();
	document.getElementById('quote-box').getElementsByClassName('quote')[0].innerHTML = setQuote;
	document.getElementById('quote-box').getElementsByClassName('source')[0].innerHTML = setInfo

	console.log('first step ' + setQuote);
}