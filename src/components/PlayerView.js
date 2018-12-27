import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import styled from 'styled-components/macro';
import { Trail, animated, Transition } from 'react-spring';
import { Query } from 'react-apollo';
import PlayerRecentPerformanceQuery from '../queries/PlayerRecentPerformance';
import { withRouter } from 'react-router-dom';
import LoadingIndicator from './LoadingIndicator';
import PlayerViewList from './PlayerViewList';

const PlayerView = props => {
  const { selectedRange, setRange, setShowDate } = useContext(AppContext);
  useEffect(() => {
    setShowDate(false);
  }, []);
  return (
    <Query
      query={PlayerRecentPerformanceQuery}
      variables={{ id: props.match.params.id, range: selectedRange }}
    >
      {({ loading, error, data }) => {
        if (loading) return <LoadingIndicator />;
        if (error) return <div>error</div>;
        if (data) {
          return (
            <PlayerViewList
              data={data.playerRecentPerformanceQuery}
              selectedRange={selectedRange}
              setRange={setRange}
            />
          );
        }
      }}
    </Query>
  );
};

export default withRouter(PlayerView);
