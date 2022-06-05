import React, { useContext, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import StockChart from "./StockChart";
import DetailsModal from "./DetailsModal";
import { stateContext } from "../App";

// const APIKEY = "4X2274SBZP3SPX2A";
const APIKEY = "CCK1IY5CF565MMF9";
function CompanyDetails({ ticker, setTicker }) {
  //set the state furst
 
    const [state, setState] = useContext(stateContext);
    // console.log(state);
    // const numeral = require("numeral");
    //https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${APIKEY}
    //https://www.alphavantage.co/query?function=OVERVIEW&symbol=TSLAX&apikey=$4X2274SBZP3SPX2A
    //https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo
  
    const URL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${APIKEY}`;
    const [overview, setOverview] = useState({});
    const [img, setImg] = useState("");
    const [loading, setLoading] = useState("");
    const [prevTicker, setPrevTicker] = useState("");
    // if (ticker === "") {
    //   console.log("ticker is empty");
    // } 
    // else {
    async function getStockInfo() {
      try {
        let res = await fetch(URL);
        let data = await res.json();

        // console.log(data);

        setState({ ...state, selectedTicker: ticker });

        setOverview(data);

        setLoading("ran");

        // data = await res.json();
        // setImg(data);
      } catch (error) {
          alert("No details found");
        setLoading("ran");
        setTicker("");
      }
    }
    //check to see if we selected something new to pull up
    if (prevTicker !== ticker) {
      //reset my stock name
      setPrevTicker(ticker);
      //get company data function
      getStockInfo();

      //TODO:  use this to make my overview card; but it's not working with my API key
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
        <p>
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
        <StockChart ticker={ticker} />
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
                    <img src={img.url} alt="" style={{ width: "60px" }} />
                  </div>
                </div>

                <div>{arr}</div>
                {/* TODO still working on the details section showing the 52 week high and low and that kind of stuff */}
                <DetailsModal ticker={ticker} />
              </div>
            </div>
          </div>
        </>
      );
    // }
  }
}

export default CompanyDetails;
