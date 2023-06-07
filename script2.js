const quoteContainer = document.querySelector('.quote-generator--box')
const quoteText = document.querySelector('.quote-text')
const quoteAuthor = document.querySelector('.quote-text--author')
const btnTwitter = document.querySelector('.twiter-btn')
const btnNewQuote = document.querySelector('.quote-btn')
let data = []

function newQuote(){
const quote = data[Math.floor(Math.random()*data.length)]
if(!quote.author) quoteAuthor.textContent='Anonymus';
quoteAuthor.textContent=quote.author;

if(quote.text.length > 120) quoteText.classList.add('long-quote');
if(quote.text.length < 120) quoteText.classList.remove('long-quote');

quoteText.textContent=quote.text;
}

async function getQuotes(){
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
    try{
        const response = await fetch(apiUrl);
        data = await response.json()
        newQuote()
    } catch (err){
        console.error(err)
    }
}

//Tweet Quotes
function tweetQuote(){
    const twitterUrl =`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl, '_blank')
}

//EVENTSLISTENERS
btnNewQuote.addEventListener('click', newQuote)
btnTwitter.addEventListener('click', tweetQuote)

//on load
getQuotes()