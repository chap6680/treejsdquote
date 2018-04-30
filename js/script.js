let setQuote = '';
let setInfo = '';
let quotes = [];

let quoteSet = [
	{
		quote: 'If you could kick the person in the pants responsible for most of your trouble, you wouldn’t sit for a month.',
		source: 'Theodore Roosevelt',
		year: 1904,
		citation: '',
		tags: ['presidental']
	},
	{
		quote: 'It is amazing what you can accomplish if you do not care who gets the credit.',
		source: 'Harry Truman',
		year: 1947,
		citation: '',
		tags: ['presidental']
	},
	{
		quote: 'Efforts and courage are not enough without purpose and direction.',
		source: 'John Kennedy',
		year: 1961,
		citation: '',
		tags: ['presidental']
	},
	{
		quote: 'Associate yourself with men of good quality if you esteem your own reputation; for \'tis better to be alone than in bad company.',
		source: 'George Washington',
		year: 1794,
		citation: '',
		tags: ['presidental']
	},
	{
		quote: 'If your actions inspire others to dream more, learn more, do more and become more, you are a leader',
		source: 'John Quincy Adams',
		year: 1827,
		citation: '',
		tags: ['presidental']
	},
	{
		quote: 'No one can make you feel inferior without your consent. ',
		source: 'Eleanor Roosevelt',
		year: 1937,
		citation: 'This is My Story',
		tags: ['presidental', 'wisdom', 'book']
	},
	{
		quote: 'The fool doth think he is wise, but the wise man knows himself to be a fool. ',
		source: 'William Shakespeare',
		citation: 'As You Like It',
		year: 1623,
		tags: ['wisdom', 'book']
	},
	{
		quote: 'The only true wisdom is in knowing you know nothing. ',
		source: 'Socrates',
		year: 0,
		citation: '',
		tags: ['wisdom']
	},
	{
		quote: 'Count your age by friends, not years. Count your life by smiles, not tears. ',
		source: 'John Lennon',
		citation:'',
		year: 0,
		tags: ['wisdom']
	},
	{
		quote: 'A wise man will make more opportunities than he finds. ',
		source: 'Francis Bacon',
		year: 1597,
		citation:'Book of Essays',
		tags: ['wisdom', 'book']
	},
	{
		quote: 'I am one with the Force, the Force is with me. ',
		source: 'Chirrut Imwe',
		year: 2016,
		citation: 'Rogue One',
		tags: ['movie']
	},
	{
		quote: 'Where we are going, we don’t need roads.',
		source: 'Dr. Emmet Brown',
		year: 1985,
		citation:'Back to the Future',
		tags: ['movie']
	},
	{
		quote: 'We\'re going to need a bigger boat.',
		source: 'Martin Brody ',
		year: 1977,
		citation: 'Jaws',
		tags: ['movie']
	},
	{
		quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
		source: 'J.K. Rowling',
		citation: 'Harry Potter and the Goblet of Fire',
		year: 2017,
		tags: ['book']
	}	
];


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/* Main function printQuote is called - 
	-creates two variables to take to the screen.  quote and citation/source/year
	first gets the quote from another function.
then this function displays in the DOM - the quote and changes the background color
*/
function printQuote() { 
	let getRandomQuoteObj = getRandomQuote();
	let selectQuoteSource = getRandomQuoteObj.source;
	let selectQuoteCitation = getRandomQuoteObj.citation;
	let selectQuoteYear = getRandomQuoteObj.year;

	// Main Quote
	setQuote = getRandomQuoteObj.quote;

	// Puts the source/author on new variable
	setInfo = selectQuoteSource;

	// then adds the citation, and year - only if they exist
	if (!(selectQuoteCitation == '' || selectQuoteCitation === undefined || selectQuoteCitation == null || selectQuoteCitation.length <= 0)) { 
		setInfo = setInfo + '<span class="citation">' + selectQuoteCitation + '</span>';
	}
	if (!(selectQuoteYear === 0 || selectQuoteYear == '' || selectQuoteYear === undefined || selectQuoteYear == null || selectQuoteYear.length <= 0)) { 
		setInfo = setInfo + '<span class="year">' + selectQuoteYear + '</span>';
	}

	document.getElementById('quote-box').getElementsByClassName('quote')[0].innerHTML = setQuote;
	document.getElementById('quote-box').getElementsByClassName('source')[0].innerHTML = setInfo
	document.body.style.backgroundColor = random_bg_color();
/* 	validatecb();  REMOVE  */
}

/* getRandomQuote function - 
	-First looks at the selected tabs (quotesBySelectedTab function)- and filters the entire quote list down to just the tabs selected.
	-gets random # based on filtered list
	-sends obj back to printQuote
 */
function getRandomQuote() {
	quotesBySelectedTab(); 
	//get total number of filtered quotes
	let totalNumberQuotes = quotes.length;
	//get random number
	let selectQuoteNum = getRandomInt(totalNumberQuotes);
	//return obj back to printQuote
	let tempQ = quotes[selectQuoteNum];
	return tempQ;

}	

/* Master Tag list - this  */
var bookCheckouts = quoteSet.map(function (item) {
	return item.tags;
});

bookCheckouts = bookCheckouts.reduce((a, b) => a.concat(b), []);

/* FILTER OUT DUPS */
bookCheckouts = bookCheckouts.filter(function (v, i) { return bookCheckouts.indexOf(v) == i; });


/* Filtering quotes array
This function first gets which checkboxes were selected - creates an array. 

Then it takes the quote Array and filters it - keeping those quotes that have tags that match the checkboxes
*/
function quotesBySelectedTab() { 
	let resultcb = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
	let filterByTags = resultcb.map(el => el.value);
	let filterByTagMaps = filterByTags.reduce((map, tag) => map.set(tag, true), new Map());
	let resulttagfilter = quoteSet.filter((o) => o.tags.some((tag) => filterByTagMaps.get(tag)));
	return quotes = resulttagfilter;
};



//Following functions are miscellaneous supporting items
// support function to get random number 
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
  }

// support function - get color for random background
function random_bg_color() {
	let x = Math.floor(Math.random() * 256);
	let y = Math.floor(Math.random() * 256);
	let z = Math.floor(Math.random() * 256);
	return "rgb(" + x + "," + y + "," + z + ")";
}

//remove if works
/* function removeTag(array, element) {
    return array.filter(e => e !== element);
}
 */

//this will change the quote automatically.  Time is 3 seconds - not production
//time but allows for testing 
let autoQuote = setInterval(function () { printQuote() }, 5000);

