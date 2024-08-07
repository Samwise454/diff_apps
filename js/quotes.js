let quoteDiv = document.querySelector("#main-quote");

//note that array in javascript are index based
//let's declare quotes array
//you can add as much quotes as you wish
let quotes = [
    "Age Quo Agis...",
    "Do whatever you want to do wholeheartedly...",
    "A stitch in time saves nine.",
    "A wise man listens and reflects but a foolish man picks offence to counsel",
    "If you must do it, do it very well.",
    "A person should not be too honest, straight trees are cut first and honest people are screwed first",
    "If you must chop, then they must talk",
    "Love thy neighbour as thyself..."
];

let quoteNumber = quotes.length;

function getRandomQuote(quoteNumber, quotes) {//this function get's new quote
    /*
        using the length of the array, we will now generate random 
        numbers between 0 and the length of the array, which will 
        randomize our quotes.
    */
    let randomQuoteIndex = Math.floor(Math.random() * quoteNumber);//with this we can choose quotes using the array keys
    let newQuote = quotes[randomQuoteIndex];
    //now we display in the browser
    quoteDiv.innerText = newQuote;
}

getRandomQuote(quoteNumber, quotes);//this will set the very first quote when we load the page

// the setInterval will auto switch quotes after a set time (1 minute)  
setInterval(() => {
    getRandomQuote(quoteNumber, quotes);
}, 60000);

//this will switch post when the switch button is clicked
function switchQuote() {
    //let's count the number of items in the array
    getRandomQuote(quoteNumber, quotes);
}
