//page with avatar image, portfoluo summary, stock news of the day

import React, { useState, useContext } from "react";

import { Container, Form, Row, Col, Button, Carousel } from "react-bootstrap";
import { stateContext } from "../App";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";
import "./user.css";
import info from "../components/newapi.json";

import StockTable from "../components/userPortTable";
import userCarousel from "../components/userCarousel";

const User = () => {
  const [carousel, setCarousel] = useState("");

  const goTo = useNavigate();

  const token = Auth.loggedIn() ? Auth.getToken() : null;


  if (!token) {
    return false;
  }

  const createPort = (event) => {
    event.preventDefault();
    console.log("trying to create a portfolio");
    goTo("/createport");
  };

  // async function carouselData() {
  //   const url = `https://api.marketaux.com/v1/news/all?symbols=TSLA%2CAMZN%2CMSFT&filter_entities=true&language=en&api_token=lBI78Ixv5YPqe77AkvXjJwQ35JSh7yxjGeTKTKQw`;
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   console.log(data.data);
  //   setCarousel(data.data);
  //   console.log(carousel);
  // }
  // carouselData();

  return (
    <>
      <Container>
        <Row>
          {/* left hand column */}
          <Col sm={4}>
            <div className="bg-light p-5 rounded-lg m-3">
              <h1 className="display-4">User Profile Picture</h1>
              <p className="lead">
                Shows user avatar, API tickers remaining, a button for creating
                a portfolio
              </p>
              <hr className="my-4"></hr>
              <p></p>
            </div>
          </Col>

          {/* right hand column */}
          <Col sm={8} style={{ textAlign: "center" }}>
            <Button
              variant="primary"
              size="lg"
              id="create-port-btn"
              className="cst-button"
              onClick={(event) => createPort(event)}
              style={{ textAlign: "center" }}
            >
              Create a Portofolio
            </Button>

            <Container>
              <Form.Group className="mb-3">
                <Form.Label className="">Select Portfolio</Form.Label>
                <Form.Select>
                  <option>Portfolio 1</option>
                  <option>Portfolio 2</option>
                  <option>Portfolio 3</option>
                  <option>Portfolio 4</option>
                </Form.Select>
              </Form.Group>
            </Container>
            <div style= {{color: 'black'}}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <h3>Financial News Feed</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Carousel style= {{color: 'black'}}>
                      <Carousel.Item>
                      
                        <img className="d-block w-100" 
                          src={info.data[0].image_url}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>{info.data[0].title}
                          </h3>
                          <p>
                          {info.data[0].snippet}
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>

                      <Carousel.Item>

                        <img
                          className="d-block w-100"
                          src={info.data[1].image_url}
                          alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>{info.data[1].title}</h3>
                          <p>
                          {info.data[1].snippet}
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={info.data[2].image_url}
                          alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>{info.data[2].title}</h3>
                          <p>
                          {info.data[2].snippet}
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
            {/* <userCarousel /> */}
           </Col>
        </Row>
        <Row>
          {/* <StockTable /> */}
        </Row>
      </Container>
    </>
  );
};

export default User;
