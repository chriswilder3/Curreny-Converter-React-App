const { useEffect, useState } = require("react");


function useCurrencyInfo( currency ){
    // This hook takes currency variable, and whenever
    // its value changes, it returns all covernsion
    // rates of the currency from an API.

    // This is our custom hook, but we can call other
    // predefined hooks in it also.

    // In this useEffect, the currency is dependency
    // since we want fetch conversion rate whenever
    // its value changes.

    const [currencyData, setCurrData] =  useState({})
    // We will learn its use later inside useEffect.
    // It holds data to be returned. Its initialized
    // with {} since currencydata will also be JS object. 

    useEffect( () => {
        // Now fetch data using fetch, make sure to
        // pass currency inside url string of API
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

        fetch(url)
        .then( (response) =>{
            return response.json()
        })
        .then((data) => {
            // Now the parse correct data is in data
            // But we cant assign it to normal var.
            // To be able to update in UI, it needs to
            // useState var we defined earlier.

            // setCurrData(data);
            // But hold on, looking at API, we know that
            // it also holds date and other info.
            // We only need conversion rates inside it.
            // Which is accessed by giving currency as key.

            setCurrData( data[currency])
            
        })

    }
    ,[ currency])

    // Now at the end, this custom hook function must
    // return the data also. Note that we return only
    // the variable here.

    return currencyData;

}

export default useCurrencyInfo;