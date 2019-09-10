import React from 'react';
import { GreetingContainer } from '../Greeting/GreetingContainer';
import { Route } from 'react-router-dom';
import { LoginFormContainer } from '../LoginFormContainer';
import { SignupFormContainer } from '../SignupFormContainer';
import { createNewUser, login, logout } from '../../actions/session_actions';
import { AuthRoute } from '../util/route_util';

import { Video } from '../Video/video';
import startup from '../Video/mediaSource';

import NavBarContainer from '../NavBar/NavBarContainer';
import LoginModalContainer from '../LoginModal/LoginModalContainer'

export class AppComponent extends React.Component { 
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    startup(this.props.currentUser);
  }

  render() {
    startup(this.props.currentUser);
    return (
      <div> 
        <NavBarContainer />
        {this.props.modalStatus && <LoginModalContainer /> }

        <h1>streamTv</h1>
        
        {/* <GreetingContainer /> */}
        {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
        <Video />
      </div>  
    );
  }
};