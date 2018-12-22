import gql from 'graphql-tag';

const PlayerRecentPerformanceQuery = gql`
  query($id: String, $range: Int) {
    playerRecentPerformanceQuery(id: $id, range: $range) {
      id
      player {
        name
        id
        firstName
        lastName
        teamId
      }
      match {
        id
        matchId
        hTeamScore
        vTeamScore
        hTeamName
        vTeamName
        hTeamId
        vTeamId
        startDateEastern
        youtubevideos {
          id
          title
          player {
            playerId
            name
            firstName
            lastName
          }
          thumbnailUrlLarge
          videoId
          title
        }
      }
      playerIdFull
      matchIdFull
      statsJSON
    }
  }
`;

export default PlayerRecentPerformanceQuery;
