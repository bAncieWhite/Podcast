import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const EpisodePlayer = ({ audioUrl }) => {
  return (
    <div>
      <AudioPlayer
        autoPlay
        src={audioUrl}
        onPlay={e => console.log("Playing")}
      />
    </div>
  );
};

export default EpisodePlayer;
