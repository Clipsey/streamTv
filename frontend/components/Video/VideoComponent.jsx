import React from 'react';
import startup from './mediaSource';
import './effects.css';

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = null;
    this.streamKey = null;
    this.retry = this.retry.bind(this);
    this.background =
      'linear-gradient(black, #19171c, #19171c, #19171c, #19171c, #19171c, #19171c, #19171c, black)';
    this.maxSize = '100%';
  }

  retry(force) {
    return prevProps => {
      // debugger;
      if (
        force ||
        prevProps.match.params.username !== this.props.match.params.username
      ) {
        this.props
          .getUserByName(this.props.match.params.username)
          .then(action => {
            this.props.getCategory(action.user.stream_category);

            this.streamKey = action.user.stream_key;
            this.streamingUsername = this.props.match.params.username;

            let useFake = true;
            if (
              this.props.currentUser &&
              this.props.currentUser.id === this.props.channelUser.id
            ) {
              useFake = false;
            }

            startup(
              this.props.channelUser,
              this.streamKey,
              result => {
                if (
                  result &&
                  this.background != 'linear-gradient(black, black)'
                ) {
                  this.background = 'linear-gradient(black, black)';
                  this.forceUpdate();
                } else if (
                  !result &&
                  this.background !=
                    'linear-gradient(black, #19171c, #19171c, #19171c, #19171c, #19171c, #19171c, #19171c, black)'
                ) {
                  this.background =
                    'linear-gradient(black, #19171c, #19171c, #19171c, #19171c, #19171c, #19171c, #19171c, black)';
                  this.forceUpdate();
                }
              },
              useFake
            );
            // this.timeout = setTimeout(() => {
            //   this.timeout = null;
            // }, 10000);
            // }
          });
      }
    };
  }

  componentDidMount() {
    this.maxSize = `${document.getElementById('videoContainer').offsetHeight -
      2}px`;
    this.retry(true)();
  }

  componentDidUpdate(prevProps) {
    this.maxSize = `${document.getElementById('videoContainer').offsetHeight -
      2}px`;
    this.retry(false)(prevProps);
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
      boxSizing: 'border-box'
    };

    const videoStyle = {
      width: '100%',
      maxHeight: `${this.maxSize}`,
      muted: 'true',
      boxSizing: 'border-box'
    };

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
      paddingTop: '15px'
    };

    const streamInfoValues = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    };

    const streamInfoTitle = {
      fontSize: '16px',
      marginBottom: '15px'
    };
    const streamInfoCategory = {
      marginBottom: '15px',
      fontSize: '14px'
    };
    const streamInfoTagsAndViewsContainer = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
    };
    const streamInfoViewsContainer = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginRight: '15px'
      // margin: '10px 0px'
    };
    const streamInfoViewImage = {
      marginRight: '7px'
    };
    const streamInfoViewText = {
      fontSize: '14px',
      color: '#7b7687'
    };
    const streamInfoTags = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    };

    const streamInfoImage = {
      width: '60px',
      height: '80px',
      marginRight: '10px',
      float: 'left'
    };

    const TagStyle = {
      backgroundColor: '#232127',
      border: 'solid 1px #2e2c32',
      boxSizing: 'border-box',
      padding: '4px',
      borderRadius: '4px',
      fontSize: '10px',
      marginRight: '5px'
      // marginBottom: '4px'
    };

    const streamDebug = {
      marginTop: '20px'
    };
    const debugHeight = window.innerWidth > 500 ? '170px' : '200px';
    const debugInfo = {
      width: '100%',
      height: `${debugHeight}`,
      borderBottomRightRadius: '6px',
      borderBottomLeftRadius: '6px',
      backgroundColor: '#19171c',
      border: 'solid 1px #252328',
      boxSizing: 'border-box',
      paddingLeft: '10px',
      paddingBottom: '10px',
      paddingTop: '15px'
    };
    const debugTitle = {
      fontWeight: 'bold',
      fontSize: '20px',
      marginBottom: '5px'
    };
    // const

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
            autoPlay={true}
            muted={true}
            // onClick={this.retry(true)}
          />
        </div>
        <div style={streamInfoContainer}>
          <div style={streamInfoImage}>
            {this.props.channelUser && (
              <img
                style={streamInfoImage}
                src={
                  this.props.categories[
                    this.props.channelUser.stream_category
                  ] &&
                  this.props.categories[this.props.channelUser.stream_category][
                    'picture'
                  ]
                }
              ></img>
            )}
          </div>
          <div style={streamInfoValues}>
            <div style={streamInfoTitle}>
              {this.props.channelUser && this.props.channelUser.stream_title}
            </div>
            <div style={streamInfoCategory}>
              Category:{' '}
              {this.props.channelUser && this.props.channelUser.stream_category}
            </div>
            <div style={streamInfoTagsAndViewsContainer}>
              <div style={streamInfoTags}>
                <div style={TagStyle}>Tag1</div>
                <div style={TagStyle}>Tag2</div>
              </div>
              <div style={streamInfoViewsContainer}>
                <div style={streamInfoViewImage}>
                  <svg
                    id="svgEye"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z" />
                  </svg>
                </div>
                <div style={streamInfoViewText}>
                  {Math.floor(Math.random() * 10000)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={streamDebug}>
          {this.props.currentUser &&
            this.props.channelUser &&
            this.props.currentUser.id == this.props.channelUser.id && (
              <div style={debugInfo}>
                <h3 style={debugTitle}>
                  How to Stream - exactly the same as twitch.tv, just replace
                  the Stream Key and Server.
                </h3>
                <p>
                  To Stream to the logged in channel, you need an application
                  such as OBS (Open Broadcasting Software).
                </p>
                <p>
                  OBS will take your input feed and output a data stream that
                  can be sent over RTMP to my Centos-Linux / DigitalOcean
                  server.
                </p>
                <p>
                  If you're still following, you can use this to live stream to
                  the logged in channel:
                  <br />
                  Server: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; rtmp://pitchhost.me:1935/app/
                  <br />
                  Current User's Stream Key: &nbsp; &nbsp; &nbsp; &nbsp;
                  {this.props.users[this.props.currentUser.id].stream_key}
                </p>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default Video;
