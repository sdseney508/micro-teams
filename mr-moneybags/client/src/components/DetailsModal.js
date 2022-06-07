import React, { useState, useContext, useEffect } from "react";
import "./ModalDropdown.css";
import { FaCaretRight } from "react-icons/fa";
import ModalDropdowns from "./ModalDropdowns";
import { stateContext } from "../App";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

// const APIKEY = "4X2274SBZP3SPX2A";
const APIKEY = "CCK1IY5CF565MMF9";

//https://www.alphavantage.co/query?apikey=CCK1IY5CF565MMF9&function=OVERVIEW&symbol=f


//https://www.alphavantage.co/query?apikey=${APIKEY}&function=OVERVIEW&symbol=${ticker}
function Details({ ticker }) {
  const [state, setState] = useContext(stateContext);
  const goTo = useNavigate();

  const URL= `https://www.alphavantage.co/query?apikey=${APIKEY}&function=OVERVIEW&symbol=${ticker}`;

  async function fetchData() {
    const res = await fetch(URL);
    const data = await res.json();
    // console.log(data);
    // if (Object.keys(data).length === 1) {
    //   //need this cause i keep blwoing through my calls.  can only do 5 a minute.  made a second key for testing.
    //   alert("API calls exceeded, please wait a while before continue usage.");
    // }
    //this comes from Company details
    setState({ ...state, companyData: data });
    console.log(state.companyData);
  }

  const [show, setShow] = useState(true);
  
  const handleClick = () => {
    //toggle the show state
    setShow(!show);
    $("#cards").slideToggle(500);
    $("#companyOverview").css({
      "justify-self": "end",
      "flex-basis": "100%",
    });
    fetchData();
    goTo("/Summary");
  };

  //forsome reason i can't get this to work.  i'm not sure why.  i never seem to get ehre
  console.log(show);
  if (show) {
    $("#DetailsComponents").show();
  } else {
    $("#DetailsComponents").hide();
  }

  return (
    <div>
      <div className="detailsContainer" onClick={handleClick}>
        <h3>Details</h3>
        <FaCaretRight
          className={show ? "detailsButtonRotate" : "detailsButton"}
        />
      </div>
      <div id="DetailsComponents">
        <ModalDropdowns />
      </div>
    </div>
  );
}

export default Details;
