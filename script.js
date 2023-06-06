const getRandomNumber = function(max,min){
    return Math.trunc(Math.random(max-min)*max+1)
}


const getQuote = async function(){
    try{
        const response = await fetch('https://jacintodesign.github.io/quotes-api/data/quotes.json')
        if(!response.ok) throw new Error('There is no such a link')
        const data = await response.json()
        
        console.log(response)
        console.log(data)
        const numR = getRandomNumber(data.length,1)
        console.log(numR)
    }
    catch(err){
        console.error(err)
    }
}()