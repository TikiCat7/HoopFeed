const findTopStats = stats => {
  let sortedStats = stats.sort((a, b) => {
    return statsSum(a.statsJSON) > statsSum(b.statsJSON) ? -1 : 1;
  });
  return formatStats(sortedStats);
};

const formatStats = stats => {
  stats.map(stat => {
    return (stat.statsFormatted = createStatLine(stat.statsJSON));
  });
  // only return stats for players that actually played
  return stats.filter(stat => stat.statsJSON.min !== 0);
};

const createStatLine = stat => {
  let finalStat = [];
  finalStat.push({ type: 'PTS', value: stat.p });
  finalStat.push({ type: 'AST', value: stat.a });
  finalStat.push({ type: 'REB', value: stat.or + stat.dr });
  if (stat.b > 0) finalStat.push({ type: 'BLK', value: stat.b });
  if (stat.min > 0) finalStat.push({ type: 'MIN', value: stat.min });
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
};
