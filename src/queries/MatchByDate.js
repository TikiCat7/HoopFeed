import gql from 'graphql-tag';

const MatchByDateQuery = gql`
  query($date: String) {
    matchByDate(date: $date) {
      id
      matchId
      startTimeUTC
      hTeamId
      hTeamWins
      hTeamLosses
      hTeamScore
      hTeamTriCode
      hTeamQScore
      hTeamRecordFormatted
      vTeamRecordFormatted
      hTeamName
      vTeamName
      vTeamId
      vTeamWins
      vTeamLosses
      vTeamScore
      vTeamTriCode
      vTeamQScore
      isGameActivated
      currentPeriod
      statusNum
      gameClock
      isHalfTime
      isEndOfPeriod
      hTeamQScore
      vTeamQScore
      matchStats {
        playerIdFull
        statsJSON
        player {
          name
          teamId
        }
      }
      youtubevideos {
        id
        videoId
        title
        thumbnailUrlLarge
        player {
          playerId
          name
        }
      }
    }
  }
`;

export default MatchByDateQuery;
