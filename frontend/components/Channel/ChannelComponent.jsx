import React from 'react';
import './effects.css';

export class ChannelComponent extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.followClick = this.followClick.bind(this);
    this.user = {};
  }

  handleClick(destination) {
    return () => {
      // if (this.props.location.pathname === `/${destination}`) return;
      if (this.props.location.pathname === `/users/${this.props.match.params.username}/${destination}`) 
        return;
      this.props.history.push(`/users/${this.props.match.params.username}/${destination}`);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.username !== this.props.match.params.username) {
      this.props.getUserByName(nextProps.match.params.username).then((action) => {
        this.sendObj = Object.assign({}, action.user);
        this.sendObj.follow = 'followee';
        this.props.showFollows(this.sendObj);
        this.props.receiveChannel(action.user.id)
      }).fail(() => {
        this.props.history.push(`/`);
      });
    }
  }

  componentDidMount() {
    this.props.getUserByName(this.props.match.params.username).then((action) => {
      this.sendObj = Object.assign({}, action.user);
      this.sendObj.follow = 'followee';
      this.props.showFollows(this.sendObj);
      this.props.receiveChannel(action.user.id)
    }).fail(() => {
      this.props.history.push(`/`);
    });
  }

  toggleModal(formType) {
    return () => {
      this.props.loginModal(!this.props.modalStatus, formType);
    }
  }

  followClick(e) {
    let followee_id = null;
    let follower_id = null;
    if (this.props.currentUser) {
      followee_id = this.props.channelUser.id;
      follower_id = this.props.currentUser.id;
    }
    if (followee_id === follower_id && followee_id && follower_id) {
      return;
    }
    if (this.props.currentUser 
        && !this.props.follows.currentChannel[this.props.currentUser.id]) {
      this.props.createFollow({
        followee_id,
        follower_id
      })
    } else if (this.props.currentUser
               && this.props.follows.currentChannel[this.props.currentUser.id]) {
      this.props.destroyFollow({
        followee_id,
        follower_id
      })
    } else {
      this.toggleModal('login')();
    }
  }

  render() {

    const topBarStyle = {
      height: '37px',
      width: '100vw',
      backgroundColor: '#19171c',
      borderBottom: 'solid 1px #252328',
      // borderLeft: 'solid 1px #252328',
      paddingTop: '6px',
      paddingBottom: '6px',
      paddingLeft: '20px',
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      fontSize: '13px',
      color: '#b19dd8',
      display: 'flex',
      justifyContent: 'space-between',
      position: 'fixed',
      top: '49px',
      zIndex: '1'
    }
    const listContainer = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      lineHeight: '38px'
    }
    
    const userContainer = {
      cursor: 'pointer'
    }
    
    const imageContainer = {
      borderBottom: 'solid 4px #6441a4',
      height: '37px',
      width: '40px',
    }
    
    const imageElement = {
      borderRadius: '20px',
      height: '33px',
      width: '33px',
      marginLeft: '2px',
      marginTop: '2px',
      // border: 'solid 1px grey',
      overflow: 'hidden'
    }
    const usernameElement = {
      color: "#dad8de",
      height: '37px',
      marginLeft: '7px',
      paddingRight: '20px',
      borderRight: 'solid 1px #252328',
      cursor: 'pointer'
    }
    const followerElement = {
      height: '37px',
      display: 'flex',
      flexDirection: 'row',
      padding: '0px 15px',
      borderRight: 'solid 1px #252328'
    }
    const followingElement = {
      height: '37px',
      display: 'flex',
      flexDirection: 'row',
      padding: '0px 15px',
    }
    const followText = {
      margin: '0px 5px',
      fontSize: '14px'
    }
    const numberText = {
      paddingRight: '4px',
      color: '#868092',
      fontSize: '14px'
    }
    const followButton = {
      width: '82px',
      height: '30px',
      padding: '5px 10px',
      borderRadius: '5px',
      marginRight: '100px',
      boxSizing: 'border-box',
      marginTop: '3px'
    }
    const heartIconContainer = {
      // borderRadius: '20px',
      height: '18px',
      width: '18px',
      float: 'left',
      marginTop: '1px',
      marginRight: '6px',
      marginLeft: '2px',
    }
    const heartIcon = {
      display: 'inline',
      margin: '0 auto',
      // marginLeft: '-25%',
      height: '100%',
      width: 'auto',
    }
    const FollowText = {
      fontSize: '11px',
      fontWeight: '500',
      color: 'white',
      lineHeight: '20px'
    }

    const profilePictureStyle = {
      display: 'inline',
      margin: '0 auto',
      // marginLeft: '-25%',
      height: '100%',
      width: 'auto',
      marginBottom: '10px'
    }

    let followButtonId = "followButton";

    let displayFollowButtonText = true;
    if (this.props.currentUser && this.props.follows.currentChannel[this.props.currentUser.id]) {
      displayFollowButtonText = false;
      followButtonId = "followButtonSmall"
      followButton['width'] = '43px';
      heartIcon['marginLeft'] = '0px';
      // followButton[]
    }
    let displayPicture = false;
    if (this.props.channelUser && this.props.channelUser.picture) {
      displayPicture = true;
      imageElement['border'] = "";
    }
    

    // console.log(this.props.currentUser);

    return (
      <div style={topBarStyle}>
        <div>
          <div style={listContainer}>
            <div onClick={this.handleClick('')} style={userContainer}>
              {(this.props.channelUser) &&
                <div style={imageElement}>
                  {this.props.channelUser.picture && <img style={profilePictureStyle} src={this.props.channelUser.picture}></img>}
                  {!this.props.channelUser.picture && <svg id="svgProfileChannel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" /></svg>}
                </div>
              }
            </div>
            <div onClick={this.handleClick('')} style={usernameElement}>{this.props.match.params.username}</div>
  
            <div onClick={this.handleClick('followers')} className="followHover" style={followerElement}>
              <div style={followText}>Followers</div>
              <div style={numberText}>{this.props.channelFollowers.length || 0}</div>
            </div>
            <div onClick={this.handleClick('following')} className="followHover" style={followingElement}>
              <div style={followText}>Following</div>
              <div style={numberText}>{this.props.channelFollowings.length || 0}</div>
            </div>
          </div>
        </div>
        { ((this.props.channelUser && this.props.currentUser && this.props.currentUser.id !== this.props.channelUser.id) || (!this.props.currentUser)) &&
          <div id={followButtonId} style={followButton} className='buttonClass' onClick={this.followClick}>
            {/* <div style={heartIcon}></div> */}
            <div style={heartIconContainer}>
              {displayFollowButtonText && <svg id="followSvg" style={heartIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.653 19.415c-1.162 1.141-2.389 2.331-3.653 3.585-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 1.269-.424 2.546-1.154 3.861l-1.483-1.484c.403-.836.637-1.631.637-2.377 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.239-2.191 1.414 1.414zm7.347-5.415h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z" /></svg>}
              {!displayFollowButtonText && <svg id="followSvg" style={heartIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.582 19.485c-1.141 1.119-2.345 2.287-3.582 3.515-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 1.577-.649 3.168-1.742 4.828l-1.447-1.447c.75-1.211 1.189-2.341 1.189-3.381 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.168-2.121 1.414 1.414zm7.418-5.485h-8v2h8v-2z" /></svg>}
            </div>
            {displayFollowButtonText && <div style={FollowText}>Follow</div> }
          </div>
        }
      </div>
    )
  }
}