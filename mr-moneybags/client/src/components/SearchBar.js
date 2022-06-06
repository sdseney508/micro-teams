import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import SearchCards from "./SearchCard";
import CompanyDetails from "./CompanyDetails";
import LoadingScreen from "./LoadingScreen";
import StockChart from "./StockChart";

function SearchBar() {
  //this needs to be replaced with something from the database, but for testing purposes, we will use my API on the front end
  // const APIKEY = "4X2274SBZP3SPX2A";
  const APIKEY = "CCK1IY5CF565MMF9";
  const [company, setCompany] = useState("");

  //bestMatches is an array of objects, each object is a company in the API call return
  const [result, setResult] = useState({ bestMatches: [] });
  const [loading, setLoading] = useState("");
  //TODO: need to find this in the API call still or use another API call to get the company name.  Right now i cant get this to work in the CompanyDetails component.  i cant get the object to destructure and fill out the card.
  //fixed on 4 Jun 2022.  Homeschool
  const [ticker, setTicker] = useState("");

  async function fetchData() {
    const url = `https://www.alphavantage.co/query?apikey=${APIKEY}&function=SYMBOL_SEARCH&datatype=json&keywords=${company}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    setResult(data);
    setLoading("ran");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target[0].value = "";
    //give people a cool loading spinner i found at:  https://dev.to/codebucks/create-3-different-types-of-loading-screens-in-react-part-3-2o51
    setLoading("loading");
    // goTo("/search");
    fetchData();
  };

  if (loading === "loading") {
    return <LoadingScreen />;
  }

  return (
    <div className="bodyContent">
      <h1>Search Company</h1>
      <form action="searchSearch" onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="searchSearch">Enter stock Search: </label>
        <input
          placeholder="Company Name / Search"
          type="text"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //TODO need to check with Bobby about this  want it small enough to fit to right of the company details window.  Also need to see if we can get it to limit results to like top 5 so it doesnt push portfolio table too far down.  or i can set this to like 30% and have stock window and portfolio table be the other 70%
            flexBasis: "30%",
          }}
          id="cards"
        >
          <SearchCards result={result} setTicker={setTicker} ticker={ticker} />
        </div>

        {ticker && <CompanyDetails ticker={ticker} setTicker={setTicker} />  }
        
      </div>
      <div>
        {/* {ticker && <StockChart ticker={ticker}/>} */}
      </div>
    </div>
  );
}

export default SearchBar;
