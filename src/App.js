import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";

import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <AddRecipe />
        <Recipes />
      </div>
    </ApolloProvider>
  );
};

export default App;
