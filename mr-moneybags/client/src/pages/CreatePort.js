//page for creating and updating portfolio
import React, { useState, useContext } from "react";
import { stateContext } from "../App";
import { Container, Form, Row, Col, Button, ListGroup, Card } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import $ from "jquery";
import CompanyDetails from "../components/CompanyDetails";
import StockTable from "../components/dead_to_me";
// Import "useMutation" hook
import { useMutation } from "@apollo/client";
// Importing mutations for "mutations.js"
import { UPDATE_PORTFOLIO } from "../utils/mutations";
import { QUERY_ME, getPortfolios } from "../utils/queries";
import { useQuery } from "@apollo/client";


const CreatePort = () => {
  
  const [state, setState] = useContext(stateContext);
  let cardData = [];
  const [ticker, setTicker] = useState('');
  const [ putInPort, {error: error2}] = useMutation(UPDATE_PORTFOLIO);
  
  const addToPort = async (event) => {
    event.preventDefault();
    if(!($('#amount').val() && $('#symbol').html())) {
      alert("Please enter both Stock Ticker and Number of Shares");
      return;
    }
    try{
  
      const { data } = await putInPort({
        variables: {_id: state.portfolio, stock: {name: state.selectedTicker, purchasePrice: parseInt(state.close), shares: parseInt($('#amount').val())}},
      })
      cardData = data?.updatePortfolio.stocks;
      console.log(cardData);
    }
  
    catch(err) {
      console.log(err);
    }
  }

  // const removeFromPort = (event) => {
  //   event.preventDefault();
  //   //TODO needs to execute the update_port mutation
  //   console.log($('#rmAmount').val());
  //   const amtleft = amountleft - parseInt($('#amount').val()) * state.close;
  //   // const money = data?.amtleft || [];
  //   setAmountLeft(amtleft);
  //   // console.log(money);
  // }

  const [amountleft, setAmountLeft] = useState(10000);

  return (
    <>
      <Container>
     
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

 
    </>

  );
};

export default CreatePort;
