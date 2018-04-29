/* const uiQuoteBox =document.getElementById('quote-box').getElementsByClassName('citation')[0].innerHTML; */
const uiQuoteBox = document.getElementById('quote-box').getElementsByClassName('citation')[0];

/* console.log(uiQuoteBox);
 */

let setQuote = '';
let setInfo = '';
let quotesBySelectedTabArray = [];

let quotes = [
	{
		quote: 'firstq',
		source: 'author2',
		citation: 'book',
		year: 1997,
		tags: ['speech','book','presidental']
	},
	{
		quote: 'secondq',
		source: 'author2',
		citation: 'book2',
		year: 2017,
		tags: ['speech','sequel','book','presidental']
	},
	{
		quote: 'Don\'t cry because it\'s over, smile because it happened.',
		source: 'Dr. Suess',
		year: 1998,
		tags: ['book']
	},
	{
		quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
		source: 'J.K. Rowling',
		citation: 'Harry Potter and the Goblet of Fire',
		year: 2017,
		tags: ['book','sequel','presidental']
	}
];



// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
  }

function random_bg_color() {
	let x = Math.floor(Math.random() * 256);
	let y = Math.floor(Math.random() * 256);
	let z = Math.floor(Math.random() * 256);
	return "rgb(" + x + "," + y + "," + z + ")";
}


function getRandomQuote() {
	quotesBySelectedTab(); 
	console.log(quotesBySelectedTabArray);
	let totalNumberQuotes = quotesBySelectedTabArray.length;
	
	let selectQuoteNum = getRandomInt(totalNumberQuotes);
	
	setQuote = quotesBySelectedTabArray[selectQuoteNum].quote;
	let selectQuoteSource = quotesBySelectedTabArray[selectQuoteNum].source;
	let selectQuoteCitation = quotesBySelectedTabArray[selectQuoteNum].citation;
	let selectQuoteYear = quotesBySelectedTabArray[selectQuoteNum].year;

	/* 	setInfo = selectQuoteSource + '<span class="citation">' + selectQuoteCitation + '</span><span class="year">' + selectQuoteYear + '</span>'; */
   
	setInfo = selectQuoteSource;
	if (!(selectQuoteCitation == '' || selectQuoteCitation === undefined || selectQuoteCitation == null || selectQuoteCitation.length <= 0)) { 
		setInfo = setInfo + '<span class="citation">' + selectQuoteCitation + '</span>';
	}
	if (!(selectQuoteYear === 0 || selectQuoteYear == '' || selectQuoteYear === undefined || selectQuoteYear == null || selectQuoteYear.length <= 0)) { 
		setInfo = setInfo + '<span class="year">' + selectQuoteYear + '</span>';
	}
}	

function printQuote() { 
	getRandomQuote();
	document.getElementById('quote-box').getElementsByClassName('quote')[0].innerHTML = setQuote;
	document.getElementById('quote-box').getElementsByClassName('source')[0].innerHTML = setInfo
	document.body.style.backgroundColor = random_bg_color();
/* 	console.log('check:');
	var chk1= document.getElementById('book').checked; 
	console.log(chk1); */
	validatecb();
}

function removeTag(array, element) {
    return array.filter(e => e !== element);
}



let autoQuote = setInterval(function () { printQuote() }, 3000);

var heroes = [
	{name: 'Batman', franchise: 'DC'},
	{name: 'Ironman', franchise: 'Marvel'},
	{name: 'Thor', franchise: 'Marvel'},
	{name: 'Superman', franchise: 'DC'}
];

var marvelHeroes = heroes.filter(function (hero) {
	return hero.franchise == 'Marvel';
});

var tagQuotes = quotes.filter(function (some) {
	return some.year > 2000;
});


/* let filterByTags = ['speech', 'sequel','dontbelong'];
filterByTags = removeTag(filterByTags, 'dontbelong');
console.log('filterTag:');
console.log(filterByTags);

 */
function quotesBySelectedTab() { 
let resultcb = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
let filterByTags = resultcb.map(el => el.value);
/* 	console.log("filtertags:");
	console.log(filterByTags);
 */
let filterByTagMaps = filterByTags.reduce((map, tag) => map.set(tag, true), new Map());
let resulttagfilter = quotes.filter((o) => o.tags.some((tag) => filterByTagMaps.get(tag)));
	
	return quotesBySelectedTabArray = resulttagfilter;

};


var books = [
    {
        title: "Showings",
        author: "Julian of Norwich",
        checkouts: 45
    },
    {
        title: "The Triads",
        author: "Gregory Palamas",
        checkouts: 32
    },
    {
        title: "The Praktikos",
        author: "Evagrius Ponticus",
        checkouts: 29
    }
];


/* const bookCheckouts = [...new Set(quotes.map(item => item.tags))]; */
/* let bookCheckouts = quotes.map(item => item.source).filter((value, index, self) => self.indexOf(value) === index);
 */
var bookCheckouts = quotes.map(function(item) {
    return item.tags;
});
/* bookCheckouts = bookCheckouts.filter(function (v, i) { return bookCheckouts.indexOf(v) == i; });
 */
/* let uniqA = [...new Set(bookCheckouts)];
 */

bookCheckouts = bookCheckouts.reduce((a, b) => a.concat(b), []);

/* FILTER OUT DUPS */
bookCheckouts = bookCheckouts.filter(function (v, i) { return bookCheckouts.indexOf(v) == i; });


/* FILTER OUT DUPS another version  
let resultQ = bookCheckouts.sort().reduce((accumulator, current) => {
    const length = accumulator.length
    if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
    }
    return accumulator;
}, []);
console.log(resultQ); //[1,2,3,4,5]
 */

/* let bookCheckoutsObj = bookCheckouts.reduce(function (acc, cur, i) {
	acc[i] = cur;
	return acc;
}, {}); 
 */  
let bookCheckoutsObj = Object.assign(...bookCheckouts.map(d => ({ [d]: true })));


/* this was the most condensed but didnt give unique values - listed all
var bookCheckouts = quotes.reduce(function(accumulator, currentValue) {
	return [...accumulator, ...currentValue.tags];
  }, ['Alphabet']);
 */

console.log("booksCheckout:");
console.log(bookCheckouts);

function validatecb() {
	let chks = document.querySelectorAll("#tagcheckbox input[type='checkbox']");

/* 	let resultcb = Array.prototype.every.call(chks, function (c) {
		console.log("cb 0:");
		console.log(c.checked);
		return c.checked;
	});
 
	selected = Array.prototype.filter.apply(
		select.options, [
		  function(o) {
			return o.selected;
		  }
		]
	);
	let resultcb = chks.forEach(function(element) {
		console.log(element.name + " " + element.checked);
		return element.name;

	
	let resultcb = Array.from(chks, function(element) {
		console.log(element.name + " " + element.checked);
		if (element.checked) { return element.name };
*/
	let resultcb = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
	let values = resultcb.map(el => el.value);

	
}

validatecb();
