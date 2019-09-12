import React from 'react';
import MediaBar from './mediaBar';

class Video extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    if (this.props.currentUser && this.timeout == null) {
      console.log("startup in mount")
      startup(this.props.currentUser, this.props.streamKey);
      this.timeout = setTimeout(() => {
        this.timeout = null;
      }, 10000);
    }
  }

  render() {
    return (
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
    );
  }
}

export default Video;