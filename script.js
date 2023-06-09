const quoteContainer = document.querySelector('.quote')
const quote = document.querySelector('.quote-text')
const author = document.querySelector('.quote-text--author')
const btnNewQuote = document.querySelector('.quote-btn')
const btnTwitter = document.querySelector('.twiter-btn')
const btnCopy = document.querySelector('.copy-btn')
const loader = document.querySelector('.spinner-load')

let data =[]

const getRandomNumber = function(max,min){
    return Math.trunc(Math.random(max-min)*max)
}

const tweetQuote = function(){
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`;
    window.open(tweetUrl, '_blank')
}

//joder
// const arr = [{
//     text:'Quiero mas comida',
//     author:'Mundinho'
// },{
//     text:'Desde hace 15 años sabia que era ella',
//     author:'Cuco' 
// },{
//     text:'Despedido!!',
//     author:'Taquito'
// }]
//

const getQuote = async function(){
    try{
        quoteContainer.innerHTML = ''
        const response = await fetch('https://jacintodesign.github.io/quotes-api/data/quotes.json')
        if(!response.ok) throw new Error('There is no such a link')
        data = await response.json()

        console.log(response)
        console.log(data)
    }
    catch(err){
        console.error(err)
    }
}()

btnNewQuote.addEventListener('click', function(){
    const numR = getRandomNumber(data.length,1)
    // const numR = getRandomNumber(3,0)
    console.log(numR)
    if(data[numR].text.length > 120) quote.classList.add('long-quote')
    if(data[numR].text.length < 120) quote.classList.remove('long-quote')
    quote.textContent = data[numR].text
    // quote.textContent = arr[numR].text
    author.textContent = data[numR].author
    // author.textContent = arr[numR].author
})

btnTwitter.addEventListener('click', tweetQuote)