import React from 'react';
import './effects.css'

export class SideBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleFollowClick = this.handleFollowClick.bind(this);
  }

  handleFollowClick(followee_name) {
    return () => {
      // if (this.props.location.pathname === `/${destination}`) return;
      if (this.props.location.pathname === `/users/${followee_name}/`)
        return;
      this.props.history.push(`/users/${followee_name}/`);
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
      top: '50px',
      left: '0px',
      zIndex: '1'
    }

    const UsersSection = {
      display: 'flex',
      flexDirection: 'column',
    }

    const section = {
      width: '100%',
      borderBottom: 'solid 1px #252328',
      height: '50px'
    }
    const recommendedIcon = {
      // border: 'solid 1px white',
      width: '20px',
      height: '20px',
      margin: '15px 13px',
      // paddingLeft: '25px'
    }
    const regularIcon = {
      borderRadius: '20px',
      // border: 'solid 1px grey',
      width: '30px',
      height: '30px',
      margin: '10px 5px',
    }
    const svgStyle = {
      margin: '0px 5px',
      marginTop: '7px'
    }
    // const 

    let followings = [];
    if (this.props.currentUser) {
      followings = this.props.currentUserFollows.map( (user) => {
        return <div style={regularIcon} key={user.username} onClick={this.handleFollowClick(user.username)}> 
          {user.picture && <img style={regularIcon} src={user.picture}></img>}
          {!user.picture && <svg style={svgStyle} id="svgProfileChannel" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" /></svg>}
        </div>
      })
    }

    return (
      <div style={sideBarContainer}>
        <div style={UsersSection}>
          { (this.props.currentUser && followings.length >= 1) &&
            <div style={section}>
              <div style={recommendedIcon}>
                <svg id="svgHeart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" /></svg>
              </div>
            </div>
          }
          { (this.props.currentUser && followings.length >= 1) && followings }
          { (!this.props.currentUser || followings.length < 1) &&
            <div style={UsersSection}>
              <div style={section}>
                <div style={recommendedIcon}>
                  
                </div>
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
      </div>
    )
  }
}