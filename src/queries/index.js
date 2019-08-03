import gql from "graphql-tag";

export const GET_RECIPES = gql`
  {
    recipes {
      id
      title
      link
    }
  }
`;

export const ADD_RECIPE = gql`
  mutation AddRecipe($input: RecipeInput!) {
    addRecipe(input: $input) {
      id
      title
      link
    }
  }
`;
