import React from 'react';
import { Video } from './video';
// import { MediaSource } from './media_source';
import startup from './mediaSource';

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