import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Apollo client setup
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext} from '@apollo/client/link/context'; 

//pages and components
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import ViewPort from "./pages/ViewPort";
import CreatePort from "./pages/CreatePort";
import User from "./pages/User";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



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
