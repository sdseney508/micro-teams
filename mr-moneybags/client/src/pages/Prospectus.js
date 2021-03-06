//shows a stock's company prospectus (overview, fundamentals, company news)


import React from "react";
import StockTable from '../components/tables.js';
import { Container } from 'react-bootstrap';

function Prospectus() {
  return (
    <>
     <Container>
         <div className="bg-light p-5 rounded-lg m-3">
            <h1 className="display-4">Company Prospectus</h1>
            <p className="lead">shows a stock's company prospectus (overview, fundamentals, company news)</p>
            <hr className="my-4"></hr>
            <p>This will populate with two fields, one for API calls on fundamentalso and one for Yahoo News API - but for now, the space is reserved.</p>
        </div>

      </Container>

      <Container>
        <StockTable />
      </Container>
    
    </>
    
  );
};

export default Prospectus;
