import React from 'react';
import { GreetingContainer } from '../Greeting/GreetingContainer';
import { Route } from 'react-router-dom';
import { LoginFormContainer } from '../Session/LoginFormContainer';
import { SignupFormContainer } from '../Session/SignupFormContainer';
import { createNewUser, login, logout } from '../../actions/session_actions';
import { AuthRoute } from '../util/route_util';

// import { Video } from '../Video/Video';
import VideoContainer from '../Video/VideoContainer';
import startup from '../Video/mediaSource';

import NavBarContainer from '../NavBar/NavBarContainer';
import LoginModalContainer from '../LoginModal/LoginModalContainer'

export class AppComponent extends React.Component { 
  constructor(props) {
    super(props);
    this.timeout = null;
  }

  render() {

    const emptyBar = {
      width: '100%',
      height: '50px',
    }
    const base = {
      backgroundColor: "#232129",
      color: 'rgb(218, 216, 222)',
      height: "100%"
    }

    if (this.props.currentUser && this.timeout == null) {
      console.log("startup in render")
      this.timeout = setTimeout(() => {
        startup(this.props.currentUser, this.props.streamKey);
        this.timeout = null;
      }, 10000);
    }
    return (
      <div style={base}> 
        <NavBarContainer />
        <div style={emptyBar}></div>
        {this.props.modalStatus && <LoginModalContainer /> }

        <h1>streamTv</h1>
        <h2>{this.props.currentUser && this.props.currentUser.username}</h2>
        <p>{this.props.currentUser && this.props.streamKey}</p>
        
        {/* <GreetingContainer /> */}
        {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
        <Route path="/users/:username" component={VideoContainer}></Route>
      </div>  
    );
  }
};