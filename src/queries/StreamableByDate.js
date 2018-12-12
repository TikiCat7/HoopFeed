import gql from 'graphql-tag';

const StreamableByDate = gql`
  query($date: String) {
    streamableByDate(date: $date) {
      title
      url
      score
      created
      createdISODate
      postId
      numComments
      author
      id
    }
  }
`;

export default StreamableByDate;
