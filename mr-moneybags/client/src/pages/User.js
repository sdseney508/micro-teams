//page with avatar image, portfoluo summary, stock news of the day

import React from "react";
import { Container, Form } from 'react-bootstrap';
import Auth from '../utils/auth';

const User = () => {

  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (!token) {
    return false;
  }

  return (
    <>
      <Container>
        <div class="bg-light p-5 rounded-lg m-3">
          <h1 class="display-4">User Profile</h1>
          <p class="lead">Shows user avatar, API tickers remaining, a button for creating a portfolio</p>
          <hr class="my-4"></hr>
          <p>portfolios will show up as a modal or a dropdownm below, stock news yahoo API will be linked as well.</p>
        </div>

      </Container>

      <Container>

        <Form.Group className="mb-3">
          <Form.Label>Select Portfolio</Form.Label>
          <Form.Select>
            <option>Portfolio 1</option>
            <option>Portfolio 2</option>
            <option>Portfolio 3</option>
            <option>Portfolio 4</option>
          </Form.Select>
          </Form.Group>

      </Container>



    </>


  );
};

export default User;
