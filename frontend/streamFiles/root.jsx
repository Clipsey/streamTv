import React from 'react';
import { Video } from './player/video';
import startup from './player/mediaSource';

export class Root extends React.Component {
  constructor(props) {
    super(props);
    this
  }

  render() {
    startup(1000);
    return (
      <div>
        <Video />
      </div>
    )
  }
}