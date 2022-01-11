import { gql } from '@apollo/client'
// if this doesn't work try importing from 'graphql-tag' https://www.npmjs.com/package/graphql-tag

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;