import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      savedBooks {
				bookId
				title
        image
        authors
        description
			}
    }
  }
`;
