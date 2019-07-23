import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const addRecipe = e => {
    e.preventDefault();
    setRecipes([...recipes, { title, link }]);
  };

  return (
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
      <div>
        {recipes.map(r => (
          <p>
            <a key={r.title} href={r.link}>
              {r.title}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
