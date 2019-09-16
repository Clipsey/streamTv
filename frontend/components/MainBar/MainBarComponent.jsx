// import VideoContainer from '../../Video/VideoContainer';
// import VideoContainer from '../../components/Video/Video'
import React from 'react';
import { Route } from 'react-router-dom';
import VideoContainer from '../Video/VideoContainer';
import ChannelContainer from '../Channel/ChannelContainer';

export class MainBarComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mainWidth = (window.innerWidth - 49);
    const mainStyle = {
      float: 'left',
      width: `${mainWidth}px`,
      // width: '100%',
      height: '100%',
      position: 'fixed',
      top: '49px',
      left: '49px',
      // border: 'solid white 1px'
      backgroundColor: "#0f0e11",
      boxSizing: 'border-box',
      borderLeft: 'solid 1px #252328'
    }
    const mainContainer = {
      padding: '20px',
    }

    return (
      <div style={mainStyle} id="mainBarComp">

        <Route path="/users/:username" component={ChannelContainer}></Route>
        <div style={mainContainer} id="mainContainer">
          <Route exact path="/users/:username" component={VideoContainer}></Route>
          
          <br></br>
          <p>Debug: Current User Info</p>
          <p>CurrentUser Username: {this.props.currentUser && this.props.currentUser.username}</p>
          <p>CurrentUser StreamKey: {this.props.currentUser && this.props.streamKey}</p>
        </div>
      </div>
    );
  }
}


          
          {/* <GreetingContainer /> */ }
{/* <AuthRoute path="/signup" component={SignupFormContainer} /> */ }
{/* <AuthRoute path="/login" component={LoginFormContainer} /> */ }