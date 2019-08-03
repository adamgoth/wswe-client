import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { ADD_RECIPE, GET_RECIPES } from "../queries";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  return (
    <Mutation
      mutation={ADD_RECIPE}
      update={(cache, { data: { addRecipe } }) => {
        const { recipes } = cache.readQuery({ query: GET_RECIPES });
        cache.writeQuery({
          query: GET_RECIPES,
          data: { recipes: recipes.concat([addRecipe]) }
        });
      }}
    >
      {(addRecipe, { data }) => (
        <form
          onSubmit={e => {
            e.preventDefault();
            const input = { title, link };
            addRecipe({ variables: { input } });
            setTitle("");
            setLink("");
          }}
        >
          <h1>add recipe</h1>
          <label htmlFor="title">title</label>
          <input
            onChange={e => setTitle(e.target.value)}
            name="title"
            type="text"
            value={title}
          />
          <label htmlFor="link">link</label>
          <input
            onChange={e => setLink(e.target.value)}
            name="link"
            type="text"
            value={link}
          />
          <input type="submit" value="add" />
        </form>
      )}
    </Mutation>
  );
};

export default AddRecipe;
