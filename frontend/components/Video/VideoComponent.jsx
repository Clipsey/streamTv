import React from 'react';
import startup from './mediaSource';

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = null;
    this.streamKey = null;
    this.retry = this.retry.bind(this);
    this.background = 'linear-gradient(black, #19171c, #19171c, #19171c, #19171c, #19171c, #19171c, #19171c, black)';
  }

  retry(force) {
    return () => {
      if (force || this.streamingUsername !== this.props.match.params.username) {
        this.props.getUserByName(this.props.match.params.username).then((action) => {
          this.streamKey = action.user.stream_key;
          this.streamingUsername = this.props.match.params.username;
          if (this.timeout == null) {
            startup(this.props.currentUser, this.streamKey, 
              (result) => {
                if (result && this.background != 'linear-gradient(black, black)') {
                  this.background = 'linear-gradient(black, black)';
                  this.forceUpdate();
                }
                else if (!result && this.background != 'linear-gradient(black, #19171c, #19171c, #19171c, #19171c, #19171c, #19171c, #19171c, black)') {
                  this.background = 'linear-gradient(black, #19171c, #19171c, #19171c, #19171c, #19171c, #19171c, #19171c, black)';
                  this.forceUpdate();
                }
              }
            );
            this.timeout = setTimeout(() => {
              this.timeout = null;
            }, 10000);
          }
        });
      }
    }
  }

  componentDidMount() {
    this.maxSize = `${document.getElementById('videoContainer').offsetHeight - 3}px`;
    this.retry(true);
  }
  
  componentDidUpdate() {
    this.maxSize = `${document.getElementById('videoContainer').offsetHeight - 3}px`;
    this.retry(false);
  }

  render() {
    // const parentStyles = document.getElementById('mainContainer')//.getBoundingClientRect();
    // console.log(parentStyles);
    const maxHeight = window.innerHeight - 20 - 98 - 25;

    const videoContainer = {
      zIndex: '97',
      width: '100%',
      maxHeight: `${maxHeight}px`,
      backgroundImage: this.background,
    }
    
    const videoStyle = {
      width: '100vw',
      // autoPlay: 'true',
      // height: '100%',
      maxHeight: `${maxHeight}px`,
      muted: 'true',
    }

    const streamInfoContainer = {
      width: '100%',
      height: '117px',
      borderBottomRightRadius: '6px',
      borderBottomLeftRadius: '6px',
      backgroundColor: '#19171c',
      border: 'solid 1px #252328',
      boxSizing: 'border-box',
      paddingLeft: '10px',
      paddingBottom: '10px',
      paddingTop: '15px',
    }

    const streamInfoValues = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    }

    const streamInfoTitle = {
      fontSize: '15px', 
      marginBottom: '15px'
    }
    const streamInfoCategory = {
      marginBottom: '15px',
      fontSize: '13px'
    }
    const streamInfoTagsAndViewsContainer = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
    }
    const streamInfoViewsContainer = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginRight: '15px'
      // margin: '10px 0px'
    }
    const streamInfoViewImage = {
      marginRight: '7px'
    }
    const streamInfoViewText = {
      fontSize: '14px',
      color: '#e21212'
    }
    const streamInfoTags = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    }
    
    const streamInfoImage = {
      border: 'white solid 1px',
      width: '60px',
      height: '80px',
      marginRight: '10px',
      float: 'left',
    }

    const TagStyle = {
      backgroundColor: '#232127',
      border: 'solid 1px #2e2c32',
      boxSizing: 'border-box',
      padding: '4px',
      borderRadius: '4px',
      fontSize: '10px',
      marginRight: '5px'
    }


    return (
      <div>
        <div className="video-box" id="videoContainer" style={videoContainer}>
          <video
            id="videoTag"
            style={videoStyle}
            playsInline
            controls
            // width="100%"
            // height="100%"
            // autoPlay={true}
            // muted={true}
            onClick={this.retry(true)}
            />
        </div>
        <div style={streamInfoContainer}>
          <div style={streamInfoImage}></div>
          <div style={streamInfoValues}>
            <div style={streamInfoTitle}>Super Special Awesome Stream | Hosted by @superspecialawesome</div>
            <div style={streamInfoCategory}>Category</div>
            <div style={streamInfoTagsAndViewsContainer}>
              <div style={streamInfoTags}>
                <div style={TagStyle}>Tag1</div>
                <div style={TagStyle}>Tag2</div>
              </div>
              <div style={streamInfoViewsContainer}>
                <div style={streamInfoViewImage}>EYE</div>
                <div style={streamInfoViewText}>99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;