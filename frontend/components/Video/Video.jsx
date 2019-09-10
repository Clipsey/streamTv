import React from 'react';
import MediaBar from './mediaBar';

export const Video = (props) => (
  <div className="video-box">
    <video
      id="videoTag"
      width="1280px"
      height="720px"
      autoPlay={true}
      muted={true}
      >
      </video>
    <MediaBar />
  </div>
)