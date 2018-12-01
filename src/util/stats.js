const findTopStats = stats => {
  let sortedStats = stats.sort((a, b) => {
    return statsSum(a.statsJSON) > statsSum(b.statsJSON) ? -1 : 1;
  });
  return formatStats(sortedStats);
};

const findTopPerformers = matchData => {
  let topPerformers = [];
  matchData.map(match => {
    if (match.matchStats.length > 0) {
      const withTeamNames = match.matchStats.map(stat => {
        stat.hTeamId = match.hTeamId;
        stat.hTeamname = match.hTeamName;
        stat.vTeamId = match.vTeamId;
        stat.vTeamname = match.vTeamName;
        stat.videos = filterByVideoByPlayer(
          match.youtubevideos,
          stat.playerIdFull,
        );
        return stat;
      });
      topPerformers = topPerformers.concat(withTeamNames);
    }
  });
  return findTopStats(topPerformers).slice(0, 5);
};

const formatStats = stats => {
  stats.map(stat => {
    stat.statsFormatted = createStatLine(stat.statsJSON);
    stat.statType = checkStatType(stat.statsJSON);
    return stat;
  });
  // only return stats for players that actually played
  return stats.filter(stat => stat.statsJSON.min !== 0);
};

const checkStatType = stat => {
  let doubleDigitCount = 0;
  let fiveCount = 0;
  if (stat.p >= 10) doubleDigitCount++;
  if (stat.a >= 10) doubleDigitCount++;
  if (stat.or + stat.dr >= 10) doubleDigitCount++;
  if (stat.b >= 10) doubleDigitCount++;
  if (stat.s >= 10) doubleDigitCount++;

  if (stat.p >= 5) fiveCount++;
  if (stat.a >= 5) fiveCount++;
  if (stat.or + stat.dr >= 5) fiveCount++;
  if (stat.b >= 5) fiveCount++;
  if (stat.s >= 5) fiveCount++;

  if (fiveCount >= 5) {
    return '5 x 5';
  } else if (doubleDigitCount >= 3) {
    return 'Triple Double';
  } else if (doubleDigitCount >= 2) {
    return 'Double Double';
  } else if (doubleDigitCount >= 4) {
    return 'Quadruple Double';
  } else {
    return '';
  }
};

const createStatLine = stat => {
  let finalStat = [];
  finalStat.push({ type: 'PTS', value: stat.p });
  finalStat.push({ type: 'AST', value: stat.a });
  finalStat.push({ type: 'REB', value: stat.or + stat.dr });
  finalStat.push({ type: 'BLK', value: stat.b });
  finalStat.push({ type: 'MIN', value: stat.min });
  finalStat.push({ type: 'STL', value: stat.s });
  finalStat.push({ type: 'FGM', value: stat.fgm });
  finalStat.push({ type: 'FGA', value: stat.fga });
  finalStat.push({
    type: 'FG%',
    value: stat.fga === 0 ? 0 : ((stat.fgm / stat.fga) * 100).toFixed(0),
  });
  finalStat.push({ type: '3PM', value: stat.tm });
  finalStat.push({ type: '3PA', value: stat.ta });
  finalStat.push({
    type: '3P%',
    value: stat.ta === 0 ? 0 : ((stat.tm / stat.ta) * 100).toFixed(0),
  });
  return finalStat;
};

const statsSum = statsJSON => {
  // sum of points + assists + rebound + blocks
  return statsJSON.p + statsJSON.a + statsJSON.or + statsJSON.dr + statsJSON.b;
};

const mergeVideosToStats = (stats, videos) => {
  return stats.map(stat => {
    return {
      topStats: stat,
      videos: filterByVideoByPlayer(videos, stat.playerIdFull),
      name: stat.player.name,
      firstName: stat.player.firstName,
      lastName: stat.player.lastName,
    };
  });
};

const filterByVideoByPlayer = (videos, playerId) => {
  let matchingVideos = [];
  videos.forEach(video => {
    video.player.forEach(player => {
      if (player.playerId === playerId) {
        matchingVideos.push(video);
      }
    });
  });
  return matchingVideos;
};

module.exports = {
  findTopStats,
  mergeVideosToStats,
  findTopPerformers,
};
