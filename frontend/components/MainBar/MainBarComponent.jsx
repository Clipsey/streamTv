// import VideoContainer from '../../Video/VideoContainer';
// import VideoContainer from '../../components/Video/Video'
import React from 'react';
import startup from '../Video/mediaSource';
import { Route } from 'react-router-dom';
import VideoContainer from '../Video/VideoContainer';
import ChannelContainer from '../Channel/ChannelContainer';

export class MainBarComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mainWidth = (window.innerWidth - 52);
    const mainStyle = {
      // margin: '3px',
      float: 'left',
      width: `${mainWidth}px`,
      height: '100%',
      border: 'solid white 1px'
    }
    return (
      <div style={mainStyle}>
        <p>Debug: Current User Info</p>
        <p>CurrentUser Username: {this.props.currentUser && this.props.currentUser.username}</p>
        <p>CurrentUser StreamKey: {this.props.currentUser && this.props.streamKey}</p>
        {/* <Route path="/users/:username" component={ChannelContainer}></Route> */}
        <Route path="/users/:username" component={VideoContainer}></Route>
      </div>
    );
  }
}


          
          {/* <GreetingContainer /> */ }
{/* <AuthRoute path="/signup" component={SignupFormContainer} /> */ }
{/* <AuthRoute path="/login" component={LoginFormContainer} /> */ }