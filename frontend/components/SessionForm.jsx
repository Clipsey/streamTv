import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    }

    this.props.formType === 'signup' ? 
      this.buttonText = "Sign Up" :
      this.buttonText = "Log In";

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.props.resetErrors();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => {
        this.props.loginModal(false);
        this.setState({
          username: "",
          password: ""
        });
      })
      .fail(() => {
        console.log(this.props.errors);
      })

  }

  render() {

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      color: 'white',
    }

    const headerStyle = {
      fontFamily: 'sans-serif',
      display: 'flex',
      justifyContent: 'center',
      height: '30px',
      lineHeight: '35px',
      fontWeight: 'bold',
      color: '#dad8de',
    }
    const iconStyle = {
      height: '100%',
      width: '30px',
      marginRight: '8px',
      border: 'solid 1px white',
    }

    const errorStyle = {
      backgroundColor: '#322f37',
      height: '42px',
      borderRadius: '8px',
      borderTop: 'solid red 1px',
      borderRight: 'solid red 1px',
      borderBottom: 'solid red 1px',
      borderLeft: 'solid red 5px',
      padding: '5px',
      marginTop: '12px',
      marginBottom: '2px'
    }
    const errorIconStyle = {
      borderRadius: '20px',
      border: 'solid 1px red',
      height: '22px',
      marginTop: '7px',
      marginLeft: '10px',
      marginRight: '7px',
      width: '22px',
      float: 'left',
    }
    const errorTextStyle = {
      fontFamily: 'sans-serif',
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#dad8de',
      marginTop: '7px'
    }
    const errorSuggestionStyle = {
      fontFamily: 'sans-serif',
      fontSize: '12px',
      color: '#898395',
      marginTop: '4px'
    }

    const tabsStyle = {
      width: '100%',
      borderBottom: '1px solid hsla(0,0%,100%,.05)',
      height: '30px',
      marginTop: '20px',
      marginBottom: '8px'
    }
    const activeTab = {
      float: 'left',
      height: '100%',
      borderBottom: 'solid 2px #6441a4',
      width: '60px',
      fontSize: '14px',
      textAlign: 'center',
      lineHeight: '30px',
      fontFamily: 'sans-serif',
      color: '#b19dd8'
    }
    const inActiveTab = {
      float: 'left',
      height: '100%',
      width: '60px',
      fontSize: '14px',
      textAlign: 'center',
      lineHeight: '30px',
      fontFamily: 'sans-serif',
      color: '#6e6779'
    }
    
    const usernameLabel = {
      marginTop: '16px',
      marginLeft: '3px',
      display: 'flex',
      justifyContent: 'space-between'
    }
    const passwordLabel = {
      marginTop: '16px',
      marginLeft: '3px',
      display: 'flex',
      justifyContent: 'space-between'
    }
    const labelText = {
      fontFamily: 'sans-serif',
      fontSize: '12px',
      fontWeight: 'bold',
      lineHeight: '20px'
    }
    const usernameInput = {
      color: 'white',
      backgroundColor: '#19171c',
      borderRadius: '4px',
      border: 'solid 1px #392e5c',
      height: '15px',
      padding: '8px',
      margin: '5px 0px',
      fontSize: '12px'
    }
    const passwordInput = {
      color: 'white',
      backgroundColor: '#19171c',
      borderRadius: '4px',
      border: 'solid 1px #392e5c',
      height: '15px',
      padding: '8px',
      margin: '4px 0px',
      fontSize: '12px'
    }
    const errorFormIcon = {
      borderRadius: '20px',
      border: 'solid 1px red',
      height: '10px',
      marginTop: '7px',
      marginLeft: '10px',
      marginRight: '7px',
      width: '10px',
      float: 'left',
    }

    const buttonStyle = {
      backgroundColor: '#6441a4',
      border: '0px',
      color: 'white',
      height: '30px',
      textAlign: 'center',
      lineHeight: '10px',
      marginTop: '20px',
      borderRadius: '4px',
      fontSize: '13px',
    }

    const shadowBox = {
      boxShadow: '0 0 6px -2px #7d5bbe',
    }





    // console.log(this.props);
    // Object.values(this.props.session).map((array) => {
    //   errors.concat(array);
    // });

    let errors = this.props.errors.session;
    if (errors) {
      errors = errors.map((error) => {
        return <div key={error}>{error}</div>
      });
      if (errors.length > 0) {
        if (this.props.errors.session == "Can't find that user.") {
          usernameInput['border'] = 'solid 2px red'; 
          // usernameInput['boxShadow'] = shadowBox.boxShadow;
        }
        else if (this.props.errors.session == "That password was incorrect.") {
          passwordInput['border'] = 'solid 2px red';
          // passwordInput['boxShadow'] = shadowBox.boxShadow;

        }
      }
    }
    console.log(errors);

    return (

      <div>
        <form style={containerStyle} onSubmit={this.handleSubmit}>
          
          <div style={headerStyle}>
            {/* Add picture-icon here */}
            <div style={iconStyle}></div>
            { this.props.formType === 'login' ? <p>Log in to Twitch</p> : <p>Join Twitch today</p> }
          </div>

          <div style={tabsStyle}>
            <div style={this.props.formType === 'login' ? activeTab : inActiveTab }>Log In</div>
            <div style={this.props.formType === 'signup' ? activeTab : inActiveTab }>Sign Up</div>
          </div>

          {errors.length > 0 && 
            <div style={errorStyle}>
              {/* Add picture-icon here  - for Twitch Icon on login/sign up form */}
              <div style={errorIconStyle}></div>
              <div style={errorTextStyle}>{errors}</div>
              <div style={errorSuggestionStyle}>Try not being wrong?</div>
            </div>
          }
          
          <div style={usernameLabel}>
            <div style={labelText}>Username</div>
            { this.props.errors.session == "Can't find that user." && 
              <div style={errorFormIcon}></div>
            }
          </div>
          <input id="username" style={usernameInput} type="text" 
                 name="username" onChange={this.handleChange} 
                 value={this.state.username} />
          {/* Add picture-icon here - for show password eye */}
          <div style={passwordLabel}>
            <div style={labelText}>Password</div>
            {this.props.errors.session == "That password was incorrect." && 
              <div style={errorFormIcon}></div>
            }
          </div> 
          <input id="password"style={passwordInput} type="password" 
                 name="password" onChange={this.handleChange} 
                 value={this.state.password} />

          <button style={buttonStyle}> {this.buttonText} </ button>
        </form>
      </div>
    );
  }
}