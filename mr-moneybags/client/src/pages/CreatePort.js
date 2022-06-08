//page for creating and updating portfolio
import React, { useState, useContext } from "react";
import { stateContext } from "../App";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import $ from "jquery";
import CompanyDetails from "../components/CompanyDetails";

// Import "useMutation" hook
import { useMutation } from "@apollo/client";

// Importing mutations for "mutations.js"
import { UPDATE_PORTFOLIO } from "../utils/mutations";

const CreatePort = (id) => {
  const [state, setState] = useContext(stateContext);
  console.log(state.portfolio);
  const [ticker, setTicker] = useState();
  const shareprice = 10;
  const [ putInPort, {error: error2}] = useMutation(UPDATE_PORTFOLIO);

  const addToPort = async (event) => {
    event.preventDefault();
    if(!($('#amount').val() && $('#symbol').html())) {
      alert("Please enter both Stock Ticker and Number of Shares");
      return;
    }
    try{
      
      //TODO needs to execute the update_port mutation
      // const money = data?.amtleft;
      const { data } = await putInPort({
        variables: {_id: state.portfolio, stock: {name: $('#symbol').html(), purchasePrice: 15, shares: parseInt($('#amount').val())}},
      })
      console.log(data);
      // const amtleft = amountleft - parseInt($('#amount').val()) * shareprice;
      // setAmountLeft(amtleft);
      // setTicker(event.target.parentNode.id)
      // const portObject = $('#symbol').html();
    }

    catch(err) {
      console.log(err);
    }
  }

  const removeFromPort = (event) => {
    event.preventDefault();
    //TODO needs to execute the update_port mutation
    console.log($('#rmAmount').val());
    const amtleft = amountleft - parseInt($('#amount').val()) * shareprice;
    // const money = data?.amtleft || [];
    setAmountLeft(amtleft);
    // console.log(money);
  }

  const [amountleft, setAmountLeft] = useState(10000);

  return (
    <>
      <Container>
        <Row>
          {/* {loading ? (
            <div>Loading....</div>
          ) : (
            <div className="bg-light p-5 rounded-lg m-3">
              <h1 className="display-4">Create and Update your Portfolio</h1>
              <p className="lead">
                Stocks only go up.....right?
              </p>
              <hr className="my-4"></hr>
            </div>
          )} */}
        </Row>
        <Row>
          <Col sm={10}>
            <Button
              variant="primary"
              size="md"
              id="create-port-btn"
              className="cst-button"
              onClick={(event) => addToPort(event)}
              style={{ textAlign: "center" }}
            >
              Add To Port
            </Button>
            <Container>
              Amount of Money Left To Build Porfolio:
              <br>
              </br>
              {amountleft}
            </Container>
            <Container>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm='10' className=""># Of Shares For Portfolio</Form.Label>
                <Form.Control type="text" id='amount' placeholder="# of Shares" />
              </Form.Group>
            </Container>
            <SearchBar />

          </Col>

          <Col sm={6}>
            {ticker && <CompanyDetails ticker={ticker} setTicker={setTicker} />}
          </Col>
        </Row>

      </Container>
      <div>
        {/* STOCK TABLE GOES HERE */}
      </div>
      <Container>

      </Container>
    </>

  );
};

export default CreatePort;
