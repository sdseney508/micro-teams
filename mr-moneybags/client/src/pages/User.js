//page with avatar image, portfoluo summary, stock news of the day

import React from "react";
import { Container } from 'react-bootstrap';

const User = () => {
  return (
      <Container>
          <div class="bg-light p-5 rounded-lg m-3">
            <h1 class="display-4">User Profile</h1>
            <p class="lead">Shows user avatar, API tickers remaining, a button for creating a portfolio</p>
            <hr class="my-4"></hr>
            <p>portfolios will show up as a modal or a dropdownm below, stock news yahoo API will be linked as well.</p>
        </div>
            
      </Container>
    
  );
};

export default User;
