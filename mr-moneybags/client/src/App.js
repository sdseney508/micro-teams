import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import {Welcome, ViewPort, CreatePort, User} from "./pages"

import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import ViewPort from "./pages/ViewPort";
import CreatePort from "./pages/CreatePort";
import User from "./pages/User";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})


function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
