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
 * show - the Star Trek show the quote is from
 * episode - the name of the Star Trek episode the quote is from
 */
const starTrekQuotes = [
	{
		quote   : 'It is possible to commit no mistakes and still lose. That is not weakness, that is life.',
		source  : 'Captain Jean-Luc Picard',
		show    : 'Star Trek: The Next Generation',
		episode : 'Peak Performance'
	},
	{
		quote   : 'You can use logic to justify almost anything. That’s its power. And its flaw.',
		source  : 'Captain Kathryn Janeway',
		show    : 'Star Trek: Voyager',
		episode : 'Prime Factors'
	},
	{
		quote   : 'Curious, how often you humans manage to obtain that which you do not want.',
		source  : 'Mister Spock',
		show    : 'Star Trek: The Original Series',
		episode : 'Errand of Mercy'
	},
	{
		quote   : 'There are four lights!',
		source  : 'Captain Jean-Luc Picard',
		show    : 'Star Trek: The Next Generation',
		episode : 'Chain of Command'
	},
	{
		quote   : 'Act, and you shall have dinner; wait, and you shall be dinner.',
		source  : 'Gowron',
		show    : 'Star Trek: Deep Space Nine',
		episode : ''
	}
];


/**
 * get a random quote from the quotes array
 * @returns {object} a quote object
 */
const quote = () => {
	const randomIndex = getRandomNumber(starTrekQuotes.length);
	return starTrekQuotes(randomIndex);
};

/**
 * generate random number between 0 and up to, but not including, highNumber
 * @param {number} highNumber 
 * @returns {number} a random number
 */
function getRandomNumber(highNumber) {
	return Math.floor(Math.random * highNumber);
}

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);