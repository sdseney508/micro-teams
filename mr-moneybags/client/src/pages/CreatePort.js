//page for creating and updating portfolio
import React, { useState, useContext } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { stateContext } from "../App";
import SearchBar from "../components/SearchBar";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import CompanyDetails from "../components/CompanyDetails";
import LoadingScreen from "../components/LoadingScreen";
import StockChart from "../components/StockChart";

const CreatePort = () => {
  const [ticker, setTicker] = useState();
  const shareprice = 10;

  const addToPort = (event) => {
    event.preventDefault();
    //TODO needs to execute the update_port mutation
    console.log($('#amount').val());
    const amtleft = amountleft - parseInt($('#amount').val()) * shareprice;
    setAmountLeft(amtleft);
    setTicker(event.target.parentNode.id)
    const portObject = $('#symbol').html();
    console.log(portObject);
    console.log(ticker);
  }

  const removeFromPort = (event) => {
    event.preventDefault();
    //TODO needs to execute the update_port mutation
    console.log($('#rmAmount').val());
    const amtleft = amountleft - parseInt($('#amount').val()) * shareprice;
    setAmountLeft(amtleft);
  }

  const [amountleft, setAmountLeft] = useState(10000);

  return (
    <>
      <Container>
        <Row>
          <div className="bg-light p-5 rounded-lg m-3">
            <h1 className="display-4">Create and Update your Portfolio</h1>
            <p className="lead">
              This is your page for creating and updating your money bags $$$
            </p>
            <hr className="my-4"></hr>
            <p>
              Stocks only go up...right?
            </p>
          </div>

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

      <Container>
        <div>
          {/* STOCK TABLE GOES HERE */}
        </div>
      </Container>
    </>

  );
};

export default CreatePort;
