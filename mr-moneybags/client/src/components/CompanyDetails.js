import React, { useContext, useState } from "react";
// import overviewData from "../../sampleAPIs/CompanyOverview.json";
import styles from "./CompanyDetailsCardStyle.css";

//TODO put in a details tab with stuff like 52 week high and low that is available on the API call.  want this as a drop down.  Get help from Bobby.
import DetailsTab from "";
import { stateContext } from "../../App";

const APIKEY = "4X2274SBZP3SPX2A";

function CompanyDetails({ ticker, setTicker }) {
  //set the state furst
  const [state, setState] = useContext(stateContext);

  //https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${APIKEY}
 
  const URL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo`;
  const [overview, setOverview] = useState({});
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState("");
  const [prevTicker, setPrevTicker] = useState("");

  async function getStockInfo() {
    try {
      let res = await fetch(URL);
      let data = await res.json();

      console.log(data);
      
      setState({ ...state, selectedTicker: ticker });

      setOverview(data);
  
      data = await res.json();
      setImg(data);

      //error handler
    } catch (error) {
      alert("No details found");
    
      //resets the ticker back to null
      setTicker("");
    }
  }

  if (prevTicker !== ticker) {
    setPrevTicker(ticker);
    getStockInfo();
    //TODO discuss with Grayden.  This should work but doesnt appear to.  i'm just reusing the overview i've already set.
    setOverview(overview);
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
    </div>,
  ];

  if (loading === "ran") {
    return (
      <>
        <div
          className={styles.card}
          id="companyOverview"
          // TODO Get help from Bobby on styling.  i suck at this
          style={{ flexBasis: "70%", fontSize: "1rem" }}
        >
          <div className={styles.container}>
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
                <h2>{overview.Name}</h2>
                <div style={{ margin: "auto 0" }}>
                  <img src={img.url} alt="" style={{ width: "60px" }} />
                </div>
              </div>

              <div>{arr}</div>
                {/* TODO still working on the details section showing the 52 week high and low and that kind of stuff */}
              {/* <DetailsTab /> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CompanyDetails;
