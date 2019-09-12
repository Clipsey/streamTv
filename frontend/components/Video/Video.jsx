import React from 'react';
import MediaBar from './mediaBar';
import startup from './mediaSource';

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = null;
  }
  componentWillMount() {
    this.props.getUserByName(this.props.match.params.username).then(() => {
      let user = null;
      let usersArray = Object.values(this.props.users);
      for (let i = 0; i < usersArray.length; ++i) {
        console.log(usersArray[i].username);
        console.log(this.props.match.params.username);
        if (usersArray[i].username === this.props.match.params.username) {
          this.streamKey = usersArray[i].stream_key;
          if (this.timeout == null) {
            console.log("startup in mount")
            startup(this.props.currentUser, this.streamKey);
            this.timeout = setTimeout(() => {
              this.timeout = null;
            }, 10000);
          }
          break;
        }
      }
    });
  }

  componentDidMount() {
    
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