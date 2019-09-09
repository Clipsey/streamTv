import React from 'react';
import MediaBar from './mediaBar';

export const Video = (props) => (
  <div className="video-box">
    <h1 style={{fontFamily: 'sans-serif'}} >React is Working</h1>
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