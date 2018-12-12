import React from 'react';
import styled from 'styled-components/macro';

const StreamableCard = styled.div`
  color: white;
  background-color: #1e1e1e;
  width: 90%;
  /* max-width: 330px; */
  /* height: 250px; */
  padding: 20px 0px;
  min-height: 150px;
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

const StreamableRow = styled(Row)`
  /* margin-left: 55px; */
`;

const Title = styled.p`
  font-size: 13px;
  font-family: 'SF-Pro-Heavy';
  font-weight: 800;
  margin: 0px;
`;

const RedditLink = styled.a`
  color: white;
  text-decoration: unset;
  cursor: pointer;
  font-size: 10px;
`;

const Streamable = ({ data }) => {
  return (
    <StreamableCard>
      <StreamableRow>
        <div
          style={{
            width: '100%',
            height: '0px',
            position: 'relative',
            paddingBottom: '56.227%',
          }}
        >
          <iframe
            title="video"
            src={`https://streamable.com/s/${
              data.url.split('https://streamable.com/')[1]
            }`}
            frameBorder="0"
            width="100%"
            height="100%"
            allowFullScreen
            style={{ width: '100%', height: '100%', position: 'absolute' }}
          />
        </div>
      </StreamableRow>
      <Row>
        <Title>{data.title}</Title>
      </Row>
      <Row>
        <RedditLink href={`http://redd.it/${data.postId}`}>
          Reddit Link
        </RedditLink>
      </Row>
      <Row>
        Score: {data.score}, Comments: {data.numComments}
      </Row>
    </StreamableCard>
  );
};

export default Streamable;
