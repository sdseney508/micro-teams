import React, { useContext, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import StockChart from "./StockChart";
import { stateContext } from "../App";

// const APIKEY = "4X2274SBZP3SPX2A";
const APIKEY = "CCK1IY5CF565MMF9";

function CompanyDetails({ ticker, setTicker }) {
  //set the state first
    const [state, setState] = useContext(stateContext);
    console.log('ticker: ');
    console.log(ticker);
  
    const URL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${APIKEY}`;
    const [overview, setOverview] = useState({});
    const [loading, setLoading] = useState("");
    const [prevTicker, setPrevTicker] = useState("");

    async function getStockInfo() {
      try {
        let res = await fetch(URL);
        let data = await res.json();

        setState({ ...state, selectedTicker: ticker });
        setOverview(data);
        setLoading("ran");
      } catch (error) {
        alert("No details found");
        setLoading("ran");
        setTicker("");
      }
    }
    //check to see if we selected something new to pull up
    if (prevTicker !== ticker) {
      debugger;
      //reset my stock name
      setPrevTicker(ticker);
      //get company data function
      getStockInfo();
      setOverview(overview);
      setLoading("loading");
    }

    if (loading === "loading") {
      return <LoadingScreen />;
    }

    let arr = [
      <div key={ticker}>
        <p>
          <b>Company Name</b>: {overview.Name}
        </p>
        <p id="symbol">
          <b>Symbol</b>: {overview.Symbol}
        </p>
        <p>
          <b>Exchange</b>: {overview.Exchange}
        </p>
        <p>
          <b>Industry</b>: {overview.Industry}
        </p>
        <p>
          <b>Description</b>: {overview.Description}
        </p>
        <p>
          <b>Country</b>: {overview.Country}
        </p>
        Where is my damn chart
        <StockChart ticker={ticker}/>
      </div>,
    ];

    if (loading === "ran") {
      return (
        <>
          <div
            className="card"
            id="CompanyDetails"
            // TODO Get help from Bobby on styling.  i suck at this
            style={{ flexBasis: "70%", fontSize: "1rem" }}
          >
            <div className="container">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    borderBottom: "2px solid black",
                  }}
                >
                  <h2>{overview.Name || "Not a valid US Company.  Please Select a different ticker."}</h2>
                  <div style={{ margin: "auto 0" }}>
                  </div>
                </div>

                <div>{arr}</div>
                {/* TODO still working on the details section showing the 52 week high and low and that kind of stuff */}
                {/* <DetailsModal ticker={ticker} /> */}
              </div>
            </div>
          </div>
        </>
      );
    // }
  }
}

export default CompanyDetails;
