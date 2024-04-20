import { gql } from "@apollo/client";

const GET_ALL_EVENTS = gql`
  query GetEvents {
    events {
      id
      name
      description
      place
      entry
      date
    }
  }
`;

export { GET_ALL_EVENTS };
