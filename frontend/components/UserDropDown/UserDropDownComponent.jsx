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
    if (this.props.location.pathname === `/users/${this.props.currentUser.username}/`) return;
    this.props.history.push(`/users/${this.props.currentUser.username}/`);
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
      // border: '1px solid grey',
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
      // border: '1px solid grey',
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
    const regularIcon = {
      borderRadius: '20px',
      // border: 'solid 1px grey',
      width: '30px',
      height: '30px',
      margin: '10px 5px',
    }

    const channelIconDrop = {
      // marginBottom: ''
      // marginBottom: '200px'
      display: 'block',
      margin: '0 auto'
    }


    return (
      <div style={listContainer} onClick={this.preventDrop}>
        
        <div style={headerStyle}>
          <div style={imageStyle}>
            <img style={imageStyle} src={this.props.currentUser.picture}></img>
          </div>
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
            <div style={channelIconStyle}>
              <svg overflow="visible" className="svgReverse" width="24" height="24" viewBox="5 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z" /></svg>
            </div>
            <div>Channel</div>
          </div>
          <div className="ListElement" style={listRow}>
            <div style={channelIconStyle}>
              <svg overflow="visible" className="svgReverse" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="5 0 48 48"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" /></svg>
            </div>
            <div>Settings</div>
          </div>
        </div>

        <div style={LogOutContainerStyle}>
          <div onClick={this.handleLogOut} className="ListElement" style={listRowTop}>
            <div>
              <div style={channelIconStyle}>
                <svg overflow="visible" className="svgReverse" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="5 0 48 48"><path d="M15 16v5l9-10.062-9-9.938v5c-14.069 1.711-19.348 15.107-10.606 16.981-3.804-2.936 3.251-7.441 10.606-6.981z" /></svg>
              </div>
              <div>Log Out</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}