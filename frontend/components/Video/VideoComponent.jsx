import React from 'react';
import MediaBar from './mediaBar';
import startup from './mediaSource';

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = null;
  }
  componentDidMount() {
    this.props.getUserByName(this.props.match.params.username).then((action) => {
      console.log(action.user)
      this.streamKey = action.user.stream_key;
      if (this.timeout == null) {
        console.log("startup in mount");
        startup(this.props.currentUser, this.streamKey);
        this.timeout = setTimeout(() => {
          this.timeout = null;
        }, 10000);
      }
    });
  }

  render() {

    const videoContainer = {
      zIndex: '97',
      border: 'solid red 1px',
      width: '100%',
    }

    return (
      <div className="video-box" style={videoContainer}>
        <video
          id="videoTag"
          width="100%"
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