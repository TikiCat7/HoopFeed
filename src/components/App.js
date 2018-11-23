import React, { useState } from 'react';
import { ApolloProvider } from 'react-apollo';
import AppContext from '../context/AppContext';
import VideoContext from '../context/VideoContext';
import Header from './Header';
import Content from './Content';

const App = ({ client }) => {
  const [showVideoOverlay, toggleVideoOverlay] = useState(false);
  const [selectedVideo, setVideoId] = useState(null);
  const [videoPlaying, toggleVideoPlay] = useState(false);
  const [selectedIndex, setIndex] = useState(null);
  const [matchDate, setMatchDate] = useState(new Date());
  const [selectedMatchVideos, setSelectedMatchVideos] = useState([]);

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
            selectedMatchVideos,
            setSelectedMatchVideos,
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
