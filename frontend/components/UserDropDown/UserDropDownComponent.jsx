import React from 'react';
import './effects.css';

export class UserDropDownComponent extends React.Component {
  constructor(props) {
    super(props);
    let status = false;
    if (this.props.currentUser) {
      status = true;
    }
    this.state = {
      onlineStatus: status
    }
    this.timeout = null;
    this.preventDrop = this.preventDrop.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleProfileSwitch = this.handleProfileSwitch.bind(this);
  }

  preventDrop(e) {
    e.stopPropagation();
  }

  handleSwitch() {
    if (this.timeout !== null) return
    this.timeout = setTimeout(
      () => {
        this.setState({
          onlineStatus: !this.state.onlineStatus
        })
        this.timeout = null;
      }, 0
    );
  }
  handleLogOut() {
    this.props.toggleUserDrop(!this.props.userDropDownStatus);
    this.props.logout();
  }
  handleProfileSwitch() {
    this.props.toggleUserDrop(!this.props.userDropDownStatus);
    if (this.props.location.pathname === `/users/${this.props.currentUser.username}`) return;
    this.props.history.push(`/users/${this.props.currentUser.username}`);
  }

  render() {

    const leftContainer = (window.innerWidth - 218);


    const listContainer = {
      height: '203px',
      width: '178px',
      backgroundColor: '#19171c',
      position: 'absolute',
      left: `${leftContainer}px`,
      top: '48px',
      borderRadius: '4px',
      boxShadow: '0px 0px 1px black',
      border: 'solid 1px #252328',
      fontFamily: 'sans-serif',
      fontSize: '12px',
      color: '#dad8de',
      paddingTop: '10px',
      paddingRight: '10px',
      paddingLeft: '10px',
      zIndex: '98'
    }

    const headerStyle = {
      // padding: '10px',
      marginLeft: '0px',
      height: '50px',
    }
    const imageStyle = {
      borderRadius: '20px',
      border: '1px solid grey',
      width: '35px',
      height: '35px',
      float: 'left'
    }
    const userStyle = {
      float: 'left'
    }
    const usernameStyle = {
      marginTop: '5px',
      marginLeft: '7px',
      fontWeight: 'bold'
    }
    const statusContainer = {
      marginLeft: '7px',
      marginTop: '5px',
    }
    const colorBox = {
      backgroundColor: '#898395',
      width: '6px',
      height: '6px',
      float: 'left',
      marginTop: '5px',
    }
    const statusText = {
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      color: '#898395',
      fontSize: '12px',
      marginLeft: '10px',
      paddingTop: '1px'
    }
    const onlineContainer = {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      margin: '0px 5px'
    }
    const labelClassStyle = {
      marginRight: '5px',
    }
    const OnlineStyle = {
      marginTop: '4px',
    }
    const channelStyle = {
      marginTop: '14px',
      borderTop: 'solid 1px #252328',
      borderBottom: 'solid 1px #252328',
      width: '178px',
    }
    const channelIconStyle = {
      borderRadius: '10px',
      border: '1px solid grey',
      float: 'left',
      marginRight: '5px',
      width: '10px',
      height: '10px',
    }
    const listRowTop = {
      marginTop: '8px',
      marginBottom: '5px',
      padding: '7px 4px',
    }
    const listRow = {
      marginBottom: '8px',
      padding: '7px 4px',
    }

    const LogOutContainerStyle = {
      marginTop: '5px',
      width: '178px',
    }


    return (
      <div style={listContainer} onClick={this.preventDrop}>
        
        <div style={headerStyle}>
          <div style={imageStyle}></div>
          <div style={userStyle}>
            <div style={usernameStyle}>{this.props.currentUser.username}</div>
            <div style={statusContainer}>
              <div style={colorBox}></div>
              <div style={statusText}>
                {this.state.onlineStatus ? 'Online' : 'Offline'}
              </div>
            </div>
          </div>
        </div>

        <div style={onlineContainer}>
          <div style={OnlineStyle}>Show Offline</div>
          <div style={labelClassStyle}>
            <label className="switch" onClick={this.handleSwitch}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        
        <div style={channelStyle}>
          <div onClick={this.handleProfileSwitch} className="ListElement" style={listRowTop}>
            <div style={channelIconStyle}></div>
            <div>Channel</div>
          </div>
          <div className="ListElement" style={listRow}>
            <div style={channelIconStyle}></div>
            <div>Settings</div>
          </div>
        </div>

        <div style={LogOutContainerStyle}>
          <div onClick={this.handleLogOut} className="ListElement" style={listRowTop}>
            <div>
              <div style={channelIconStyle}></div>
              <div>Log Out</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}