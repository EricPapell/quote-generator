const quote = document.querySelector('.quote-text')
const author = document.querySelector('.quote-text--author')
const btnNewQuote = document.querySelector('.quote-btn')
const btnTwitter = document.querySelector('.twiter-btn')

const getRandomNumber = function(max,min){
    return Math.trunc(Math.random(max-min)*max)
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
        const response = await fetch('https://jacintodesign.github.io/quotes-api/data/quotes.json')
        if(!response.ok) throw new Error('There is no such a link')
        const data = await response.json()

        console.log(response)
        console.log(data)

        btnNewQuote.addEventListener('click', function(){
            const numR = getRandomNumber(data.length,1)
            // const numR = getRandomNumber(3,0)
            console.log(numR)
            quote.textContent = data[numR].text
            // quote.textContent = arr[numR].text
            author.textContent = data[numR].author
            // author.textContent = arr[numR].author
        })

    }
    catch(err){
        console.error(err)
    }
}()