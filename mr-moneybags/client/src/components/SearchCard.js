import React from "react";
import "./SearchCardStyle.css";

//uses the results from alphavantage api to display the data from the search bar.
// See https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo for the data format

function SearchCards({ result, setTicker, ticker }) {
  const handleClick = (event) => {
    // event.preventDefault();
    console.log("i'm in the handle click");
    console.log(ticker);
    console.log(event.target.parentNode.id);
    if (ticker !== event.target.parentNode.id) {
      const parentID = event.target.parentNode.id;
      setTicker(parentID);
    }
  };

  let innerArr = [];
  let outerArr = [];
  if (result["bestMatches"].length === 0) {
  } else {
    for (let companies of result?.["bestMatches"]) {
      for (let i = 0; i < 4; i++) {
        let text = "";
        switch (i) {
          case 0:
            text = "Symbol";
            break;
          case 1:
            text = "Name";
            break;
          case 2:
            text = "Type";
            break;
          case 3:
            text = "Region";
            break;
          default:
            return;
        }
        innerArr.push(
          <p key={i}>
            <b>{text}</b>: {Object.values(companies)?.[i]}
          </p>
        );
      }
      outerArr.push(
        <div key={Object.values(companies)?.[0]}>
          <div
            className="card"
            onClick={(event) => handleClick(event)}
            id={Object.values(companies)?.[0]}
          >
            <div
              className="container"
              onClick={(event) => handleClick(event)}
              id={Object.values(companies)?.[0]}
            >
              {innerArr}
            </div>
          </div>
          <br />
        </div>
      );
      innerArr = [];
    }
  }

  return <>{outerArr}</>;
}

export default SearchCards;