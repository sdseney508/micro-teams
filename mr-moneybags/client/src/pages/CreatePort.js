//page for creating and updating portfolio
import React, { useState, useContext } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { stateContext } from "../App";
import SearchBar from "../components/SearchBar";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import SearchCards from "../components/SearchCard";
import CompanyDetails from "../components/CompanyDetails";
import LoadingScreen from "../components/LoadingScreen";
import StockChart from "../components/StockChart";

const CreatePort = () => {
  const [result, setResult] = useState({ bestMatches: [] });
  const [loading, setLoading] = useState("");
  const [ticker, setTicker] = useState("");
  const shareprice = 10;

  const addToPort = (event) => {
    event.preventDefault();
    console.log($('#amount').val());
    const amtleft = amountleft - parseInt($('#amount').val())*shareprice;
    setAmountLeft(amtleft);
  }

  const removeFromPort = (event) => {
    event.preventDefault();
    console.log($('#rmAmount').val());
    const amtleft = amountleft - parseInt($('#amount').val())*shareprice;
    setAmountLeft(amtleft);
  }

  const [amountleft, setAmountLeft] = useState(10000);

  return (
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
          <SearchBar />
          <Container>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm='10' className=""># Of Shares For Portfolio</Form.Label>
              <Form.Control type="text" id='amount' placeholder="# of Shares" />
            </Form.Group>
          </Container>
          <Container>
            Amount of Money Left To Build Porfolio:
            <br>
            </br>
            {amountleft}
          </Container>

        </Col>
        
        <Col sm={6}>
        {ticker && <CompanyDetails ticker={ticker} setTicker={setTicker} />  }
        </Col>
      </Row>
      <div className="bg-light p-5 rounded-lg m-3">
        <h1 className="display-4">Create and Update your Portfolios</h1>
        <p className="lead">
          This is a page for creating and updating portfolios
        </p>
        <hr className="my-4"></hr>
        <p>
          includes a table for stocks, some stock ticker info, and a search
          field for finding stocks. There will be add and remove buttons, and a
          field telling you how much money you have left
        </p>
      </div>

      <div>
        <p className="lead">Stock table goes here</p>
      </div>
    </Container>
  );
};

export default CreatePort;
