import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { animated, Transition } from 'react-spring';
import Streamable from './Streamable';
import { Query } from 'react-apollo';
import StreamableByDate from '../queries/StreamableByDate';
import { formatDate } from '../util/date';
import AppContext from '../context/AppContext';

const StreamableListWrapper = styled(animated.div)`
  -webkit-overflow-scrolling: touch;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ErrorMsg = styled.span`
  color: white;
  font-weight: 800;
  font-family: 'SF-Pro-Heavy';
  font-size: 18px;
`;

const StreamableList = ({ showStreamables }) => {
  const { matchDate } = useContext(AppContext);
  return (
    <Query
      query={StreamableByDate}
      variables={{ date: formatDate(matchDate, 0) }}
    >
      {({ loading, data, error }) => {
        if (loading) return <div>Loading</div>;
        if (error) return <div>Error</div>;
        if (data) {
          if (data.streamableByDate.length === 0) {
            return <ErrorMsg>No Data Available</ErrorMsg>;
          } else {
            return (
              <Transition
                native
                items={showStreamables}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
              >
                {show =>
                  show &&
                  (props => (
                    <StreamableListWrapper style={props}>
                      {data.streamableByDate
                        .sort((a, b) => (a.score > b.score ? -1 : 1))
                        .slice(0, 5)
                        .map((streamable, index) => (
                          <Streamable key={index} data={streamable} />
                        ))}
                    </StreamableListWrapper>
                  ))
                }
              </Transition>
            );
          }
        }
      }}
    </Query>
  );
};

export default StreamableList;
