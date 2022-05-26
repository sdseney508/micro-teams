import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import ViewPort from "./pages/ViewPort";
import CreatePort from "./pages/CreatePort";
import User from "./pages/User";


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Welcome />} />
          <Route path="/viewport" element={<ViewPort />} />
          <Route path="/createport" element={<CreatePort />} />
          <Route path="/user" element={<User />} />

          <Route
            path="*"
            element={<h1 className="display-2">Sorry Chief - Wrong page!</h1>}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
