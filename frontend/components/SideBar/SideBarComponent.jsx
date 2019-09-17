import React from 'react';

export class SideBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleFollowClick = this.handleFollowClick.bind(this);
  }

  handleFollowClick(followee_name) {
    return () => {
      // if (this.props.location.pathname === `/${destination}`) return;
      if (this.props.location.pathname === `/users/${this.props.match.params.username}/${followee_name}`)
        return;
      this.props.history.push(`/users/${this.props.match.params.username}/${followee_name}`);
    }
  }

  componentDidMount() {
    this.sendObj = Object.assign({}, this.props.currentUser);
    this.sendObj.follow = 'follower';
    this.props.showFollows(this.sendObj);
  }

  render() {
    const sideBarContainer = {
      backgroundColor: '#19171c',
      width: '49px',
      height: '100%',
      float: 'left',
      borderRight: 'solid 1px #252328',
      position: 'fixed',
      top: '49px',
      left: '0px'
    }

    const noUsersSection = {
      display: 'flex',
      flexDirection: 'column',
    }

    const section = {
      width: '100%',
      borderBottom: 'solid 1px #252328',
      height: '50px'
    }
    const recommendedIcon = {
      borderRadius: '20px',
      border: 'solid 1px white',
      width: '25px',
      height: '25px',
      margin: '12px',
      // paddingLeft: '25px'
    }
    const regularIcon = {
      borderRadius: '20px',
      border: 'solid 1px grey',
      width: '25px',
      height: '25px',
      margin: '12px',
    }

    let followings = [];
    if (this.props.currentUser) {
      followings = this.props.currentUserFollows.map( (username) => {
        return <div style={regularIcon} key={username} onClick={this.handleFollowClick(username)}> </div>
      })
    }
    console.log(this.props.currentUserFollows);
    console.log(followings);

    return (
      <div style={sideBarContainer}>
        { this.props.currentUser &&
          followings
        }
        { (!this.props.currentUser || followings.length < 1) &&
          <div style={noUsersSection}>
            <div style={section}>
              <div style={recommendedIcon}></div>
            </div>
            <div style={regularIcon}></div>
            <div style={regularIcon}></div>
            <div style={regularIcon}></div>
            <div style={regularIcon}></div>
            <div style={regularIcon}></div>
            <div style={regularIcon}></div>
          </div>
        }
      </div>
    )
  }
}