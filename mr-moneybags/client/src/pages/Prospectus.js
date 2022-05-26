//shows a stock's company prospectus (overview, fundamentals, company news)


import React from "react";
import { Container } from 'react-bootstrap';

const Prospectus = () => {
  return (
      <Container>
         <div class="bg-light p-5 rounded-lg m-3">
            <h1 class="display-4">Company Prospectus</h1>
            <p class="lead">shows a stock's company prospectus (overview, fundamentals, company news)</p>
            <hr class="my-4"></hr>
            <p>This will populate with two fields, one for API calls on fundamentalso and one for Yahoo News API - but for now, the space is reserved.</p>
        </div>

      </Container>
    
  );
};

export default Prospectus;
