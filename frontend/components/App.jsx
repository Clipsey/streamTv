import React from 'react';
import { GreetingContainer } from './GreetingContainer';
import { Route } from 'react-router-dom';
import { LoginFormContainer } from './LoginFormContainer';
import { SignupFormContainer } from './SignupFormContainer';
import { createNewUser, login, logout } from '../actions/session_actions';
import { AuthRoute } from '../components/util/route_util';

export class App extends React.Component { 
  constructor(props) {
    super(props);
  }  
  render() {
    return (
      <div>
        <header>
          <h1>streamTv</h1>
          <GreetingContainer />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <AuthRoute path="/login" component={LoginFormContainer} />
        </header>
      </div>  
    );
  }  
};