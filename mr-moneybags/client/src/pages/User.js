//page with avatar image, portfoluo summary, stock news of the day

import React, { useState, useContext } from "react";

// import Avatar from "avataaars";
// import { generateRandomAvatarOptions } from "../components/avatar";

import { Container, Row, Col, Carousel, Form, Button } from "react-bootstrap";
import { stateContext } from "../App";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";
import "./user.css";
import newsinfo from "../components/newapi.json";
import { QUERY_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import $ from "jquery";
// Import "useMutation" hook
import { useMutation } from "@apollo/client";
// Importing mutations for "mutations.js"
import { ADD_PORTFOLIO } from "../utils/mutations";

const User = () => {
  const { loading, error, data } = useQuery(QUERY_ME, {
    variables: { token: localStorage.getItem("api-token") },
  });

  const [ addPort, {error: error2}] = useMutation(ADD_PORTFOLIO);

  const goTo = useNavigate();

  const userinfo = data?.me || {};

  console.log(userinfo);
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (!token) {
    return false;
  }
const createPort = async () => {
    //TODO need to add the mutation to create the portfolio in the database
    if (!$("#port-name").val()) {
      alert("Please enter a portfolio name");
      return;
    }
    try {
      let port_name = $("#port-name").val();
      console.log(port_name);
      const { data } = await addPort({
        variables: {portfolioName: port_name, token: token},
        })
        console.log(userinfo);
      goTo("/createPort");

      console.log("trying to create a portfolio");

      if(!data) {
       console.log("something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
    
  };

  // async function carouselData() {
  //   const url = `https://api.marketaux.com/v1/news/all?symbols=TSLA%2CAMZN%2CMSFT&filter_entities=true&language=en&api_token=lBI78Ixv5YPqe77AkvXjJwQ35JSh7yxjGeTKTKQw`;
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   carousel = data.data;
  //   console.log(carousel);
  //   // setCarousel(data.data);
  //   // console.log(carousel);
  //   return carousel;
  // }
  // carouselData();

  return (
    <>
      <Container>
        <Row>
          {/* left hand column */}
          <Col sm={4}>
            <div className="bg-light p-5 rounded-lg m-3">
              {/* <Container className="text-white rounded-circle" style={{ width: '150px', height: '150px', background: 'green' }}>
                <p className="p-0 m-0 text-center" style={avatarStyling}>RS</p> */}

              <Container>
                <>
                  {/* <Avatar
                    style={{ width: "200px", height: "200px" }}
                    avatarStyle="Circle"
                    {...generateRandomAvatarOptions()}
                  /> */}
                </>
              </Container>
              <p className="lead">
                Welcome, financially savvy user.
              </p>
              <hr className="my-4"></hr>
              <p></p>
            </div>
          </Col>

          {/* right hand column */}
          <Col sm={8} style={{ textAlign: "center" }}>
            <Form.Group as={Row} className="mb-3">
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
              <Form.Control
                type="text"
                id="port-name"
                placeholder="New Portfolio Name"
              />
            </Form.Group>
            <Container>
              <Form.Group className="mb-3">
                {/* DATA RETURNS UNDEFINED */}
                {/* {data.me.portfolios.length > 0 ?
                  <>
                    <Form.Label className="">Select Portfolio</Form.Label>
                    <Form.Select>
                    </Form.Select>
                  </>
                  :
                  <p>You have no portfolios</p>
                } */}
              </Form.Group>
            </Container>
            <div style={{ color: "black" }}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <h3>Financial News Feed</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Carousel style={{ color: "black" }}>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={newsinfo.data[0].image_url}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>{newsinfo.data[0].title}</h3>
                          <p>{newsinfo.data[0].snippet}</p>
                        </Carousel.Caption>
                      </Carousel.Item>

                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={newsinfo.data[1].image_url}
                          alt="Second slide"
                        />
                        <Carousel.Caption>
                          <h3>{newsinfo.data[1].title}</h3>
                          <p>{newsinfo.data[1].snippet}</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={newsinfo.data[2].image_url}
                          alt="Third slide"
                        />
                        <Carousel.Caption>
                          <h3>{newsinfo.data[2].title}</h3>
                          <p>{newsinfo.data[2].snippet}</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default User;
