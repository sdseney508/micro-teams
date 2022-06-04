import React, { useContext } from "react";
import { stateContext } from "../App";
import $ from "jquery";

function DetailHeader() {

  const [state, setState] = useContext(stateContext);
  const sharesObj = state?.dailyShares?.["Time Series (Daily)"];
  if (sharesObj === null || sharesObj === undefined) {
    return null;
  }
  const priceDiff =
    Object.values(sharesObj)?.[0]?.["4. close"] -
    Object.values(sharesObj)?.[1]?.["4. close"];

  if (priceDiff > 0) {
    $("#priceChange").css("color", "green");
    $("#percentagePriceChange").css("color", "green");
  } else {
    $("#priceChange").css("color", "red");
    $("#percentagePriceChange").css("color", "red");
  }

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <h3 id="sharePrice">
        Share Price:(Object.values(sharesObj)[0]["4. close"])
      </h3>
      <h3 id="priceChange">`${priceDiff}`</h3>
    </div>
  );
}

export default DetailHeader;