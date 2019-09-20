import React from 'react';
// import 
// import image from '../../../app/assets/images/Combo_Purple_RGB.png';

export class FollowingsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.resize = this.resize.bind(this);
    this.navigateUserClick = this.navigateUserClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  navigateUserClick(username) {
    return () => {
      this.props.history.push(`/users/${username}`);
    }
  }


  resize() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.forceUpdate.bind(this), 0);
  }

  render() {
    const listStyle = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      marginBottom: '20px'
    }

    const recommendedStyle = {
      color: '#dad8de',
      fontSize: '16px',
      marginBottom: '15px',
      marginLeft: '5px'
    }

    const elementStyle = {
      display: 'flex',
      flexGrow: '1',
      flexDirection: 'column',
      height: '160px',
      margin: '0px 5px',
      boxSizing: 'border-box',
      backgroundColor: '#19171c',
      cursor: 'pointer',
      position: 'relative'
    }

    const streamUsername = {
      minWidth: '0px',
      color: '#b8b5c0',
      fontSize: '11px',
      marginBottom: '4px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      position: 'absolute',
      fontWeight: 'Bold',
      top: '80%',
      left: '50%',
      transform: 'translateX(-50%)'
      // left: '38%',
      // margin: '0 auto',
    }


    const regularIcon = {
      borderRadius: '1000px',
      width: '90px',
      height: '90px',
      margin: '15px auto',
      // position: 'relative'
    }
    const miniIcon = {
      borderRadius: '1000px',
      width: '40px',
      height: '40px',
    }

    const userDivs1 = [];
    const userDivs2 = [];
    const userDivs3 = [];
    const userDivs4 = [];
    let divCounter = 1;
    if (window.innerWidth > 1900) {
      divCounter = 7;
    } else if (window.innerWidth > 1600) {
      divCounter = 6;
    } else if (window.innerWidth > 1300) {
      divCounter = 5;
    } else if (window.innerWidth > 1000) {
      divCounter = 4;
    } else if (window.innerWidth > 600) {
      divCounter = 3;
    } else if (window.innerWidth > 300) {
      divCounter = 2;
    }

    let displayUsers = Array.from(this.props.users);
    let length = displayUsers.length;
    if (displayUsers.length > 1) {
      for (let i = 0; i < divCounter && displayUsers.length > 0; ++i) {
        let user = displayUsers.pop();
        userDivs1.push(
          <div key={user.username} style={elementStyle} onClick={this.navigateUserClick(user.username)} >
            <div>
              <div style={regularIcon}>
                <img style={regularIcon} src={user.picture}></img>
              </div>
            </div>
            <div style={streamUsername}>{user.username}</div>
          </div>
        );
      }
      for (let i = 0; i < divCounter && displayUsers.length > 0; ++i) {
        let user = displayUsers.pop();
        userDivs2.push(
          <div key={user.username} style={elementStyle} onClick={this.navigateUserClick(user.username)} >
            <div>
              <div style={regularIcon}>
                <img style={regularIcon} src={user.picture}></img>
              </div>
            </div>
            <div style={streamUsername}>{user.username}</div>
          </div>
        )
      }
      for (let i = 0; i < divCounter && displayUsers.length > 0; ++i) {
        let user = displayUsers.pop();
        userDivs3.push(
          <div key={user.username} style={elementStyle} onClick={this.navigateUserClick(user.username)} >
            <div>
              <div style={regularIcon}>
                <img style={regularIcon} src={user.picture}></img>
              </div>
            </div>
            <div style={streamUsername}>{user.username}</div>
          </div>
        )
      }
      while (displayUsers.length > 0) {
        let user = displayUsers.pop();
        userDivs4.push(
          <div key={user.username} style={elementStyle} onClick={this.navigateUserClick(user.username)} >
            <div>
              <div style={regularIcon}>
                <img style={regularIcon} src={user.picture}></img>
              </div>
            </div>
            <div style={streamUsername}>{user.username}</div>
          </div>
        )
      }
    }

    return (
      <div>
        <div>
          <div style={recommendedStyle}>{this.props.type}</div>
          <div style={listStyle}>
            {userDivs1}
          </div>
          <div style={listStyle}>
            {userDivs2}
          </div>
          <div style={listStyle}>
            {userDivs3}
          </div>
          <div style={listStyle}>
            {userDivs4}
          </div>
        </div>

      </div>
    )
  }
}