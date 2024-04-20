import { gql } from "@apollo/client";

const DELETE_EVENT = gql`
  mutation deleteEvent($id: ID!) {
    deleteEvent(id: $id) {
      id
      name
      description
      place
      entry
      date
    }
  }
`;

export { DELETE_EVENT };
