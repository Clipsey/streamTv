import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './effects.css'

export class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      day: "",
      month: "January",
      year: "",
      email: ""
    }

    this.props.formType === 'signup' ? 
      this.buttonText = "Sign Up" :
      this.buttonText = "Log In";

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin() {
    this.setState({
      username: "TestUser",
      password: "123456"
    }, this.handleSubmit);

  }

  handleChange(e) {
    if(this.props.errors.session)
      this.props.resetErrors();
    if (e.target.name === 'day') {
      const dayValue = parseInt(e.target.value, 10);
      if (dayValue === NaN || dayValue > 32 || dayValue < 1) {
        return;
      }
    }
    if (e.target.name === 'year') {
      const yearValue = parseInt(e.target.value, 10);
      if (yearValue === NaN) {
        return;
      }
    }
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    if (e) e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.resetErrors();
    this.props.processForm(user)
      .then((action) => {
        this.props.loginModal(false, 'login');
        if (this.props.formType !== 'signup') {
          this.sendObj = Object.assign({}, action.user);
          this.sendObj.follow = 'follower';
          this.props.showFollows(this.sendObj);
        }
      })
      .fail(() => {
        // console.log(this.props.errors);
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
      // border: 'solid 1px white',
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
      // border: 'solid 1px red',
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
      height: '15px',
      padding: '8px',
      margin: '5px 0px',
      fontSize: '12px'
    }
    const passwordInput = {
      color: 'white',
      backgroundColor: '#19171c',
      borderRadius: '4px',
      height: '15px',
      padding: '8px',
      margin: '4px 0px',
      fontSize: '12px'
    }
    const errorFormIcon = {
      borderRadius: '20px',
      // border: 'solid 1px red',
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
      width: '100%'
    }

    const dobContainer = {
      marginTop: '16px',
      display: 'flex',
      flexDirection: 'column'
    }
    const dobTop = {
      display: 'flex',
      justifyContent: 'space-between'
    }

    const dobLabel = {
      marginTop: '16px',
      marginLeft: '3px',
      display: 'flex',
      justifyContent: 'space-between'
    }
    const dobBottom = {
      display: 'flex',
      justifyContent: 'space-between'
    }
    const dobMonthStyle = {
      color: 'white',
      backgroundColor: '#19171c',
      borderRadius: '4px',
      height: '15px',
      padding: '8px',
      margin: '4px 0px',
      fontSize: '12px',
      width: '55%',
      height: '100%'
    }
    const dobDayStyle = {
      color: 'white',
      backgroundColor: '#19171c',
      borderRadius: '4px',
      height: '15px',
      padding: '8px',
      margin: '4px 0px',
      fontSize: '12px',
      width: '17.5%',
      height: '100%',
      marginLeft: '10px',
      marginRight: '10px'
    }
    const dobYearStyle = {
      color: 'white',
      backgroundColor: '#19171c',
      borderRadius: '4px',
      height: '15px',
      padding: '8px',
      margin: '4px 0px',
      fontSize: '12px',
      width: '17.5%',
      height: '100%'
    }

    const emailLabel = {
      marginTop: '16px',
      marginLeft: '3px',
      display: 'flex',
      justifyContent: 'space-between'
    }
    const emailInput = {
      color: 'white',
      backgroundColor: '#19171c',
      borderRadius: '4px',
      height: '15px',
      padding: '8px',
      margin: '5px 0px',
      fontSize: '12px'
    }
    const pClass = {
      marginTop: '15px',
      color: "#898395",
      fontSize: '11px',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }

    const errorSVG = {
      fill: '#e21212',
      overflow: 'visible'
    }




    // console.log(this.props);
    // Object.values(this.props.session).map((array) => {
    //   errors.concat(array);
    // });

    let usernameClass = 'regularFocus';
    let passwordClass = 'regularFocus';
    let emailClass = 'regularFocus';
    let dobMonthFocus = 'regularFocus';
    let dobDayFocus = 'regularFocus';
    let dobYearFocus = 'regularFocus';

    let errors = this.props.errors.session;
    let errorsDiv = null;
    if (errors && errors.length > 0) {

      errorsDiv = <div key={errors}>{errors}</div>
      if (errors.includes('Username')) {
        usernameClass = 'redFocus';
      } else if (errors.includes('Password')) {
        passwordClass = 'redFocus';
      } else if (errors.includes('Email')) {
        emailClass = 'redFocus';
      } else if (errors.includes('birthday')) {
        dobDayFocus = 'redFocus'
        dobMonthFocus = 'redFocus'
        dobYearFocus = 'redFocus'
      }
    }

    // <img style={twitchPictureStyle} src="https://twitch-name-dev.s3-us-west-1.amazonaws.com/GlitchIcon_White_128px.png"></img>

    return (

      <div>
        <form style={containerStyle} onSubmit={this.handleSubmit}>
          
          <div style={headerStyle}>
            {/* Add picture-icon here */}
            <div style={iconStyle}>
              <img style={iconStyle} src="https://twitch-name-dev.s3-us-west-1.amazonaws.com/GlitchIcon_White_128px.png"></img>
            </div>
            { this.props.formType === 'login' ? <p>Log in to Twitch</p> : <p>Join Twitch today</p> }
          </div>

          <div style={tabsStyle}>
            <div style={this.props.formType === 'login' ? activeTab : inActiveTab }
              onClick={this.props.tabClick}
              id="loginTab">
              Log In
              </div>
            <div style={this.props.formType === 'signup' ? activeTab : inActiveTab }
              onClick={this.props.tabClick}
              id="signupTab">
              Sign Up
              </div>
          </div>

          {errors !== null && 
            <div style={errorStyle}>
              <div style={errorIconStyle}>
                <svg style={errorSVG} width='50px' height='50px' viewBox='3 3 35 35'>
                  <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2H6a1 1 0 0 0-1 1z" fillRule="evenodd"></path>  
                </svg>
              </div>
              <div style={errorTextStyle}>{errorsDiv}</div>
              <div style={errorSuggestionStyle}>Try not being wrong?</div>
            </div>
          }
          
          <div style={usernameLabel}>
            <div style={labelText}>Username</div>
            { errors && errors.includes("Username") && 
              <div style={errorFormIcon}>
                <div style={errorIconStyle}>
                  <svg style={errorSVG} width='50px' height='50px' viewBox='17 22 75 57'>
                    <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2H6a1 1 0 0 0-1 1z" fillRule="evenodd"></path>
                  </svg>
                </div>
              </div>
            }
          </div>
          <input id="username" style={usernameInput} type="text" 
            name="username" onChange={this.handleChange} 
            value={this.state.username} 
            className={usernameClass}/>
          {/* Add picture-icon here - for show password eye */}
          <div style={passwordLabel}>
            <div style={labelText}>Password</div>
            { errors && errors.includes('Password') && 
              <div style={errorFormIcon}>
                <div style={errorIconStyle}>
                  <svg style={errorSVG} width='50px' height='50px' viewBox='17 22 75 57'>
                    <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2H6a1 1 0 0 0-1 1z" fillRule="evenodd"></path>
                  </svg>
                </div>
              </div>
            }
          </div>
          <input id="password"style={passwordInput} type="password" 
            name="password" onChange={this.handleChange} 
            value={this.state.password} 
            className={passwordClass}/>

          {this.props.formType === 'signup' && 
            <div style={dobContainer}>
              <div style={dobTop}>
                <div style={labelText}>Date of Birth</div>
                {this.props.errors.session == "Signup was incorrect." &&
                  <div style={errorFormIcon}>
                    <div style={errorIconStyle}>
                      <svg style={errorSVG} width='50px' height='50px' viewBox='17 22 75 57'>
                        <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2H6a1 1 0 0 0-1 1z" fillRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                }
              </div>
              <label style={dobBottom} id="dobId">
                <select id="selectOverride" name="month" style={dobMonthStyle} className={dobMonthFocus} placeholder="Month"
                  onChange={this.handleChange}>
                  <option value="Month" disabled>Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <input type="text" value={this.state.day} onChange={this.handleChange} style={dobDayStyle} className={dobDayFocus} name="day" placeholder="Day"></input>
                <input type="text" value={this.state.year} onChange={this.handleChange} style={dobYearStyle} className={dobYearFocus} name="year" placeholder="Year"></input>
              </label>
            </div>
          }

          {this.props.formType === 'signup' && 
            <div style={emailLabel}>
              <div style={labelText}>Email</div>
              { errors && errors.includes('Email') &&
                <div style={errorFormIcon}>
                  <div style={errorIconStyle}>
                    <svg style={errorSVG} width='50px' height='50px' viewBox='17 22 75 57'>
                      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2H6a1 1 0 0 0-1 1z" fillRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              }
            </div>
          }
          {this.props.formType === 'signup' && 
            <input id="emailId" style={emailInput} type="email"
              name="email" onChange={this.handleChange}
              value={this.state.email}
              className={emailClass} />
          }
          {this.props.formType === 'signup' && 
            <p style={pClass}>By clicking Sign Up, you are indicating that you have read and 
              agree to the Terms of Service and Privacy Policy.</p>
          }

          <button style={buttonStyle}> {this.buttonText} </ button>
        </form>
        {this.props.formType === 'login' && <button style={buttonStyle} onClick={this.demoLogin}> Demo Login </ button> }
      </div>
    );
  }
}