import React, { useState } from 'react';

import AppContext from './AppContext';
import VideoContext from './VideoContext';
import Header from './Header';
import Content from './Content';
import matches from '../matchData';

const App = () => {
  const [showVideoOverlay, toggleVideoOverlay] = useState(false);
  const [selectedVideo, setVideoId] = useState(null);
  const [selectedIndex, setIndex] = useState(null);

  return (
    <AppContext.Provider
      value={{
        selectedIndex,
        setIndex,
      }}
    >
      <VideoContext.Provider
        value={{
          showVideoOverlay,
          toggleVideoOverlay,
          selectedVideo,
          setVideoId,
        }}
      >
        <Header />
        <Content matches={matches} />
      </VideoContext.Provider>
    </AppContext.Provider>
  );
};

export default App;
