//shows performance and indiviual stocks within a selected portfolio. link to update (CreatePort)

import React from "react";
import { Container } from 'react-bootstrap';

const ViewPort = () => {
  return (
    <>
      <Container>
          <div class="bg-light p-5 rounded-lg m-3">
            <h1 class="display-4">View a Portfolio</h1>
            <p class="lead">shows performance and indiviual stocks within a selected portfolio.</p>
            <hr class="my-4"></hr>
            <p>There will be a button to link to update via CreatePort, and a table showing stock info within the portfolio. 
                Additionally, portfolio perfomance will be shown below. </p>
        </div>
         
      </Container>

      <Container>
        {/* table goes here */}
      </Container>
    
    </>
    
    
  );
};

export default ViewPort;
