//page for creating and updating portfolio
import React from "react";
import { Container } from 'react-bootstrap';

const CreatePort = () => {
  return (
      <Container>
     <div class="bg-light p-5 rounded-lg m-3">
        <h1 class="display-4">Create and Update your Portfolios</h1>
        <p class="lead">This is a page for creating and updating portfolios</p>
        <hr class="my-4"></hr>
        <p>includes a table for stocks, some stock ticker info, and a search field for finding stocks. There will be add and remove buttons, and a field telling you how much money you have left</p>
    </div> 

    <div>
        <p class="lead">Stock table goes here</p>
    </div>

      </Container>
    
  );
};

export default CreatePort;
