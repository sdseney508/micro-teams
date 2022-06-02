// Constants and variables for retrieving stock data from Aplha Vantage

//
var chosen = $("#stock-found");

var search = document.querySelector("#apiBtn");
var stockName = document.querySelector("#stockName");
var high = document.querySelector("#high");
var close = document.querySelector("#close");



var aplhaAPI = "489fefcc1msh0d1a721295405aap1c88b1jsn7daf4e11d73a";

const stockReveal = document.querySelector(".hide");

search.addEventListener("click", stockInfo);

function stockInfo() {
    stockReveal.classList.remove("hide");
    getStock();
}

function getStock() {
    stockN = chosen.val();
    const url = `https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY&symbol=${stockN}&apikey=${aplhaAPI}`;

    let request = url;
    fetch(request)
    .then(function (response) {
        return response.json();
    })
    .then(function (givenStock) {
        console.log(givenStock);
        stockName.textContent = `Stock name: ${givenStock.meta_data.symbol}`;
        high.textContent = `High: ${givenStock.time_series_daily.high}`;
        close.textContent = `Close: ${givenStock.time_series_daily.close}`;

    });

    // This is the syntax for Node.js Alpha Vantage supports

    // request.get(
    //     {
    //         url: url,
    //         json: true,
    //         headers: { 'User-Agent': 'request' }
    //     },
    
    //     (err, res, data) => {
    //         if (err) {
    //             console.log('Error', err);
    //         } else if (res.statusCode !== 200) {
    //             console.log('Status: ', res.statusCode);
    //         } else {
    //             console.log(data);
    //             stockName.textContent = `Stock name: ${data.meta_data.symbol}`;
    //             high.textContent = `High: ${data.time_series_daily.high}`;
    //             close.textContent = `Close: ${data.time_series_daily.close}`;

    //         }
    //     }
    // );
}