import React from 'react';
import { GreetingContainer } from '../Greeting/GreetingContainer';
import { Route } from 'react-router-dom';
import { LoginFormContainer } from '../Session/LoginFormContainer';
import { SignupFormContainer } from '../Session/SignupFormContainer';
import { createNewUser, login, logout } from '../../actions/session_actions';
import { AuthRoute } from '../util/route_util';

import { Video } from '../Video/Video';
import startup from '../Video/mediaSource';

import NavBarContainer from '../NavBar/NavBarContainer';
import LoginModalContainer from '../LoginModal/LoginModalContainer'

export class AppComponent extends React.Component { 
  constructor(props) {
    super(props);
    this.timeout = null;
  }

  componentDidMount() {
    if(this.props.currentUser && this.timeout == null) {
      console.log("startup in mount")
      startup(this.props.currentUser, this.props.streamKey);
      this.timeout = setTimeout( () => {
        this.timeout = null;
      }, 10000);
    }
  }

  render() {

    const emptyBar = {
      width: '100%',
      height: '50px',
    }

    if (this.props.currentUser && this.timeout == null) {
      console.log("startup in render")
      this.timeout = setTimeout(() => {
        startup(this.props.currentUser, this.props.streamKey);
        this.timeout = null;
      }, 10000);
    }
    return (
      <div> 
        <NavBarContainer />
        <div style={emptyBar}></div>
        {this.props.modalStatus && <LoginModalContainer /> }

        <h1>streamTv</h1>
        <h2>{this.props.currentUser && this.props.currentUser.username}</h2>
        <p>{this.props.currentUser && this.props.streamKey}</p>
        
        {/* <GreetingContainer /> */}
        {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
        <Video />
      </div>  
    );
  }
};