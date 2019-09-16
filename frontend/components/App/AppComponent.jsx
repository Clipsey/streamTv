import React from 'react';
// import { GreetingContainer } from '../Greeting/GreetingContainer';
import { Route } from 'react-router-dom';
// import { LoginFormContainer } from '../Session/LoginFormContainer';
// import { SignupFormContainer } from '../Session/SignupFormContainer';
import { createNewUser, login, logout } from '../../actions/user_actions';
import { AuthRoute } from '../util/route_util';

import LoginModalContainer from '../LoginModal/LoginModalContainer';
import NavBarContainer from '../NavBar/NavBarContainer';
import SideBarContainer from '../SideBar/SideBarContainer';
import MainBarContainer from '../MainBar/MainBarContainer';
import UserDropDownContainer from '../UserDropDown/UserDropDownContainer';

export class AppComponent extends React.Component { 
  constructor(props) {
    super(props);
    this.timeout = null;
    this.toggleUserDrop = this.toggleUserDrop.bind(this);
  }

  toggleUserDrop(e) {
    if (this.props.userDropDownStatus === false || this.props.modalStatus === true) return;
    
    this.props.toggleUserDrop(!this.props.userDropDownStatus);
  }

  render() {
    const base = {
      color: 'rgb(218, 216, 222)',
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: "#0f0e11",
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
    }
    const MainDiv = {
      width: '100%',
      height: '100%',
      display: 'relative',
      overflow: 'scroll'
    }

    return (
      <div style={base} onClick={this.toggleUserDrop} id="base"> 
        {this.props.modalStatus         && <LoginModalContainer /> }
        {this.props.userDropDownStatus  && <UserDropDownContainer />}
        <NavBarContainer />
        <div style={MainDiv} id="mainAppComp">
          <SideBarContainer />
          <MainBarContainer />
        </div>
      </div>  
    );
  }
};