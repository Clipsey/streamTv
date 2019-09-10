import React from 'react';
import {LoginFormContainer} from '../../components/LoginFormContainer';
import {SignupFormContainer} from '../../components/SignupFormContainer';

// #392e5c
// #2c2541
// #232127
// #19171c
// #0f0e11

//purples
// #b19dd8 - Underline Purple
// #6441a4 - Active Purple
// rgb(177, 157, 216);
// #898395
// #6e6779 - Inactive Purple
// #322f37 - Bright Grey
// #898395 - Dull Bright Grey

// #7d5bbe

class LoginModalComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: "Log In",
      username: `${props.username}`,
      password: `${props.password}`
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.clearModal = this.clearModal.bind(this);
  }

  toggleModal() {
    this.props.loginModal(!this.props.modalStatus);
    this.props.resetErrors();
  }

  clearModal(e) {
    if (e.target.id === 'overlay') {
      this.props.loginModal(false);
      this.props.resetErrors();
    }
  }

  render () {
    const leftContainer = (window.innerWidth - 430)/2;
    
    const overlay = {
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: '99',
      top: '0'
    }

    const totalBox = {
      // '380 + 20 + 30 + 5'
      width: '460px',
      height: '437px',
      position: 'absolute',
      zIndex: '100',
      top: '25%',
      left: `${leftContainer}px`,
    }

    const formBox = {
      backgroundColor: '#232127',
      zIndex: '2',
      width: '380px',
      height: '407px',
      padding: '30px 20px',
      borderRadius: '4px',
      float: 'left'
    }
    const xBox = {
      backgroundColor: 'rbga(0, 0, 0, 0.8)',
      width: '30px',
      height: '30px',
      marginLeft: '5px',
      border: 'solid 1px white',
      float: 'left'
    }

    return (
      <div style={overlay} id="overlay" onClick={this.clearModal}>
        <div style={totalBox}>
          <div style={formBox}>
            {this.state.tab === 'Log In' ? <LoginFormContainer /> : <SignupFormContainer /> }
          </div>
          <div style={xBox} onClick={this.toggleModal}>
          </div>
        </div>
      </div>
      
    )
  }
}

export default LoginModalComponent;