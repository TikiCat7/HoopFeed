import React, { useState } from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import AppContext from '../context/AppContext';
import VideoContext from '../context/VideoContext';
import Header from './Header';
import Content from './Content';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  }),
  cache: new InMemoryCache(),
});

const App = () => {
  const [showVideoOverlay, toggleVideoOverlay] = useState(false);
  const [selectedVideo, setVideoId] = useState(null);
  const [videoPlaying, toggleVideoPlay] = useState(false);
  const [selectedIndex, setIndex] = useState(null);
  const [matchDate, setMatchDate] = useState(new Date());

  return (
    <ApolloProvider client={client}>
      <AppContext.Provider
        value={{
          selectedIndex,
          setIndex,
          matchDate,
          setMatchDate,
        }}
      >
        <VideoContext.Provider
          value={{
            showVideoOverlay,
            toggleVideoOverlay,
            videoPlaying,
            toggleVideoPlay,
            selectedVideo,
            setVideoId,
          }}
        >
          <Header />
          <Content />
        </VideoContext.Provider>
      </AppContext.Provider>
    </ApolloProvider>
  );
};

export default App;
