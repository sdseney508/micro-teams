//shows performance and indiviual stocks within a selected portfolio. link to update (CreatePort)

import React from "react";
import { Container } from 'react-bootstrap';

const ViewPort = () => {
  return (
    <>
      <Container>
          <div className="bg-light p-5 rounded-lg m-3">
            <h1 className="display-4">View a Portfolio</h1>
            <p className="lead">shows performance and indiviual stocks within a selected portfolio.</p>
            <hr className="my-4"></hr>
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
