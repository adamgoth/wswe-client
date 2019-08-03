import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const Recipes = () => (
  <Query
    query={gql`
      {
        recipes {
          id
          title
          link
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.recipes.map(r => (
        <p key={r.title}>
          <a href={r.link} target="_blank" rel="noopener noreferrer">
            {r.title}
          </a>
        </p>
      ));
    }}
  </Query>
);

export default Recipes;
