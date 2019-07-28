import React, { useState } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_RECIPE = gql`
  mutation AddRecipe($input: RecipeInput!) {
    addRecipe(input: $input) {
      title
      link
    }
  }
`;

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  return (
    <Mutation mutation={ADD_RECIPE}>
      {(addRecipe, { data }) => (
        <form
          onSubmit={e => {
            e.preventDefault();
            const input = { title, link };
            addRecipe({ variables: { input } });
          }}
        >
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
      )}
    </Mutation>
  );
};

export default AddRecipe;
