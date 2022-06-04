import React from "react";
import StockChart from "./StockChart";

function Summary({ dailyShares, overview }) {

  // const overview = data;
  const sharesObj = dailyShares?.["Time Series (Daily)"];
  if (sharesObj === null || sharesObj === undefined) {
    return null;
  }

  let exDivDate;
  if (overview.ExDividendDate !== "None") {
    exDivDate = overview.ExDividendDate;
  } else {
    exDivDate = "None";
  }
  return (
    <div className="container">
      <h1>Summary</h1>
      <div style={{ display: "flex" }}>
        <div
          style={{ display: "flex", gap: "30px", justifyItems: "spaceAround" }}
        >
          <div>
            <p>Previous Close: </p>
            <p>Open:</p>
            <p>Day's Range:</p>
            <p>52-week Range:</p>
            <p>Volume:</p>
            <p>Market cap</p>
            <p>EPS (TTM)</p>
          </div>
      
        </div>
        <div
          style={{
            display: "flex",
            justifyItems: "spaceAround",
            marginLeft: "70px",
          }}
        >
          <div>
            <p>Beta (5Y monthly)</p>
            <p>PE ratio (TTM)</p>
            <p>Last Quarter</p>
            <p>Forward dividend & yield</p>
            <p>Ex-dividend date</p>
            <p>1y target est</p>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <p>{overview.Beta}</p>
            <p>{overview.TrailingPE}</p>
            <p>{overview.LatestQuarter}</p>

            <p>{exDivDate}</p>
            <p>{overview.AnalystTargetPrice}</p>
          </div>
        </div>
        <div style={{ marginLeft: "80px", paddingBottom: "10px" }}>
        <StockChart />
        </div>
      </div>
    </div>
  );
}

export default Summary;
