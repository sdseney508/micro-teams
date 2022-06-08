//page for creating and updating portfolio
import React from "react";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import info from "../components/newapi.json";

const Welcome = () => {
  return (
    <>
      <Col>
        <Row>
          <Container>
            <div className="bg-light p-5 rounded-lg m-3">
              <h1 className="display-4">Welcome to Mr. Moneybags</h1>
              <p className="lead">This is a simple finance app that enables you to simulate stock portfolios.</p>
              <hr className="my-4"></hr>
            </div>
          </Container>
        </Row>
        <Carousel style={{ color: 'black' }}>
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
      </Col>

    </>
  );






};

export default Welcome;
