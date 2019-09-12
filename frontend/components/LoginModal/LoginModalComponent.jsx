import React from 'react';
import {LoginFormContainer} from '../Session/LoginFormContainer';
import {SignupFormContainer} from '../Session/SignupFormContainer';

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
      username: `${props.username}`,
      password: `${props.password}`
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.clearModal = this.clearModal.bind(this);
    this.tabClick = this.tabClick.bind(this);
  }

  toggleModal() {
    this.props.resetErrors();
    if (this.props.formType === 'login')
      this.props.loginModal(!this.props.modalStatus, 'signup');
    else
      this.props.loginModal(!this.props.modalStatus, 'login');
  }

  clearModal(e) {
    if (e.target.id === 'overlay') {
      this.props.resetErrors();
      this.props.loginModal(false, 'login');
    }
  }

  tabClick(e) {
    if(e.target.id === 'loginTab')
      this.props.loginModal(this.props.modalStatus, 'login');
    else
      this.props.loginModal(this.props.modalStatus, 'signup')
    // this.setState({
    //   tab: e.target.id
    // })
    this.props.resetErrors();
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
      height: '450px',
      position: 'absolute',
      zIndex: '100',
      top: '25%',
      left: `${leftContainer}px`,
    }

    const formBox = {
      backgroundColor: '#232127',
      zIndex: '2',
      width: '380px',
      height: '420px',
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

    if (this.props.modalTab === 'signup') {
      totalBox['height'] = '589px';
      formBox['height'] = '550px';
      totalBox['top'] = '15%';
    }

    

    return (
      <div style={overlay} id="overlay" onClick={this.clearModal}>
        <div style={totalBox}>
          <div style={formBox}>
            {this.props.modalTab === 'login' 
              ? <LoginFormContainer tabClick={this.tabClick}/> 
              : <SignupFormContainer tabClick={this.tabClick}/> 
              }
          </div>
          <div style={xBox} onClick={this.toggleModal}>
          </div>
        </div>
      </div>
      
    )
  }
}

export default LoginModalComponent;