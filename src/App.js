import React, { useState } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Recipes from "./Recipes";

import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const addRecipe = e => {
    e.preventDefault();
    setRecipes([...recipes, { title, link }]);
  };

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <form onSubmit={e => addRecipe(e)}>
          <h1>add recipe</h1>
          <label htmlFor="title">title</label>
          <input
            onChange={e => setTitle(e.target.value)}
            name="title"
            type="text"
          />
          <label htmlFor="link">link</label>
          <input
            onChange={e => setLink(e.target.value)}
            name="link"
            type="text"
          />
          <input type="submit" value="add" />
        </form>
        <Recipes />
      </div>
    </ApolloProvider>
  );
};

export default App;
