/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/** 
 * `quotes` array 
 *
 * Array of objects each containg a Star Trek quote
 * quote - a string containing the text of a quote
 * source - a string containing the creator of the quote
 * citation - the Star Trek show the quote is from
 * episode - the name of the Star Trek episode the quote is from
 * stardate - The in-universe date of the quote (using in place of year)
 */
const quotes = [
	{
		quote    : 'It is possible to commit no mistakes and still lose. That is not weakness, that is life.',
		source   : 'Captain Jean-Luc Picard',
		citation : 'Star Trek: The Next Generation',
		episode  : 'Peak Performance'
	},
	{
		quote    : 'You can use logic to justify almost anything. That’s its power. And its flaw.',
		source   : 'Captain Kathryn Janeway',
		citation : 'Star Trek: Voyager',
		episode  : 'Prime Factors',
		stardate : 48642.5
	},
	{
		quote    : 'Curious, how often you humans manage to obtain that which you do not want.',
		source   : 'Mister Spock',
		citation : 'Star Trek: The Original Series',
		episode  : 'Errand of Mercy'
	},
	{
		quote    : 'There are four lights!',
		source   : 'Captain Jean-Luc Picard',
		citation : 'Star Trek: The Next Generation',
		episode  : 'Chain of Command',
		stardate : 46360.8
	},
	{
		quote    : 'Act, and you shall have dinner; wait, and you shall be dinner.',
		source   : 'Gowron',
		citation : 'Star Trek: Deep Space Nine'
	}
];

/**
 * get a random quote from the quotes array
 * @returns {object} a quote object
 */
function getRandomQuote() {
	// assign ranomIndex to a number between 0 and the last index in the quotes array
	const randomIndex = Math.floor(Math.random() * quotes.length);
	// use ranomIndex to retrieve a quote object
	return quotes[randomIndex];
}

/***
 * `printQuote` function
 * 
 *  Gets a random quote from tha quotes array and displays it in the browser
***/
function printQuote() {
  const quote = getRandomQuote();
  // build html for quote and source
	let html = `
    <p class="quote">${quote.quote}</P>
    <p class="source">${quote.source}
  `;
	// check for citation and add to html if found
	if (quote.citation) {
    html += `<span class="citation">${quote.citation}</span>`;
    // check for episode and add to html if found
    // only show episode if there's a citation
		if (quote.episode) {
			html += `<span class="episode">${quote.episode}</span>`;
		}
	}
	// check for stardate and add to html if found (**using satrdate instead of year)
	if (quote.stardate) {
		html += `<span class="year">stardate ${quote.stardate}</span>`;
	}
	// add closing 'p' tag to html string
  html += '</p>';
  // display html in the browser
	document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener('click', printQuote, false);
