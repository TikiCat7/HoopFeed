import React, { useState } from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppContext from '../context/AppContext';
import VideoContext from '../context/VideoContext';
import Header from './Header';
import Content from './Content';
import PlayerView from './PlayerView';

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
  const [selectedMatchVideos, setSelectedMatchVideos] = useState([]);
  const [showMatches, toggleMatchesList] = useState(true);
  const [showTopPerformers, togglePerformersList] = useState(false);
  const [showStreamables, toggleStreamablesList] = useState(false);
  const [selectedRange, setRange] = useState(5);
  const [showDate, setShowDate] = useState(true);

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <AppContext.Provider
          value={{
            selectedIndex,
            setIndex,
            matchDate,
            setMatchDate,
            showMatches,
            toggleMatchesList,
            showTopPerformers,
            togglePerformersList,
            showStreamables,
            toggleStreamablesList,
            selectedRange,
            setRange,
            showDate,
            setShowDate,
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
              selectedMatchVideos,
              setSelectedMatchVideos,
            }}
          >
            {!showVideoOverlay && <Header />}
            <Switch>
              <Route exact path="/" component={Content} />
              <Route exact path="/player/:id" component={PlayerView} />
            </Switch>
          </VideoContext.Provider>
        </AppContext.Provider>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
