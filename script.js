const getQuote = async function(){
    try{
        const response = await fetch('https://jacintodesign.github.io/quotes-api/data/quotes.json')
        const data = await response.json()
        console.log(response)
        console.log(data)
    }
    catch(err){
        console.error(err)
    }
}()