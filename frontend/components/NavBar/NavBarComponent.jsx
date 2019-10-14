import React from 'react';
import './effects.css'

export class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal    = this.toggleModal.bind(this);
    this.logoutCheck    = this.logoutCheck.bind(this);
    this.routeChange    = this.routeChange.bind(this);
    this.resize         = this.resize.bind(this);
    this.handleChange   = this.handleChange.bind(this);
    this.toggleUserDrop = this.toggleUserDrop.bind(this);
    this.timeout = null;
    
    this.state = {
      searchBar: ""
    }
  }

  toggleModal(formType) {
    return () => {
      if (this.props.currentUser) return;
      this.props.loginModal(!this.props.modalStatus, formType);
    }
  }

  handleChange(field) {
    return (e) => this.setState({
      [field]: e.target.value
    })
  }

  routeChange(destination) {
    return () => {
      if (this.props.location.pathname === `/${destination}`)  return;
      this.props.history.push(`/${destination}`);
    }
  }

  logoutCheck() {
    if(this.props.currentUser) {
      this.props.logout();
      this.props.clearHalfFollows('logout');
    };
  }

  toggleUserDrop() {
    this.props.toggleUserDrop(!this.props.userDropDownStatus);
  }

  resize() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.forceUpdate.bind(this), 0);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }



  render() {
    const navBarStyle = {
      marginTop: '0px',
      marginLeft: '0px',
      backgroundColor: '#4b367c',
      width: '100vw',
      height: '50px',
      display: 'flex',
      justifyContent: 'space-between',
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '1'
    }
    const leftBarStyle = {
      display: 'flex',
      justifyContent: 'flex-start'
    }
    const rightBarStyle = {
      display: 'flex',
      justifyContent: 'flex-end'
    }

    const visualBoxLeft = {
      height: '100%',
      lineHeight: '50px',
      fontFamily: 'sans-serif',
      paddingLeft: '5px',
      paddingRight: '6px',
      textAlign: 'center',
      margin: 'auto',
      fontSize: '16px',
      height: '48px',
      padding: '0px 10px',
      borderRadius: '1px'
    }
    const visualBoxRight = {
      height: '100%',
      lineHeight: '50px',
      fontFamily: 'sans-serif',
      paddingLeft: '5px',
      paddingRight: '6px',
      textAlign: 'center',
      margin: 'auto',
      fontSize: '14px',
      color: '#ffffff',
      height: '48px'
    }
    const twitchIconNav = {
      width: '49px',
      height: '100%',
      textAlign: 'center',
      lineHeight: '50px',
      fontFamily: 'sans-serif',
      color: 'white'
    }
    const searchInput = {
      color: '#faf9fa',
      backgroundColor: '#0f0e11',
      borderRadius: '4px',
      paddingLeft: '30px',
      paddingTop: '3px',
      paddingBottom: '3px',
      // margin: 'auto',
      // marginLeft: '50px',
      marginTop: '10px',
      fontSize: '12px',
      height: '22px',
      width: '33%',
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
    }
    const searchIcon = {
      position: 'absolute',
      borderRadius: '20px',
      border: 'solid 1px white',
      height: '10px',
      width: '10px',
      top: '19px',
      left: '250px'
    }
    const twitchPictureStyle = {
      display: 'inline',
      margin: '0 auto',
      // marginLeft: '-25%',
      height: '50%',
      width: '50%'
      // width: 'auto'
    }

    // color: 'rgb(218, 216, 222)',


    {/* Add picture-icon here */ }

    let DiscoverStyle = Object.assign({}, visualBoxLeft);
    let BrowseStyle = Object.assign({}, visualBoxLeft);
    if (this.props.location.pathname === '/') {
      DiscoverStyle['color'] = 'white';
      DiscoverStyle['borderBottom'] = 'solid 1.5px white';
      DiscoverStyle['lineHeight'] = '53.5px'
    } else if (this.props.location.pathname === '/directory') {
      BrowseStyle['color'] = 'white';
      BrowseStyle['borderBottom'] = 'solid 1.5px white';
      BrowseStyle['lineHeight'] = '53.5px'
    }

    let searchClass = 'regularFocus';
    let barWidth = window.innerWidth;
    let showSearchBar = barWidth <= 835 ? false : true

    const profilePictureStyle = {
      display: 'inline',
      margin: '0 auto',
      // marginLeft: '-25%',
      height: '50%',
      width: 'auto',
      borderRadius: '20px',
      marginBottom: '8px'
    }

    // console.log(this.props.currentUser)

    return (
      <div style={navBarStyle}>
        
        <section style={leftBarStyle}>
          <div onClick={this.routeChange('')} className='buttonClass' style={twitchIconNav}>
            <img style={twitchPictureStyle} src="https://twitch-name-dev.s3-us-west-1.amazonaws.com/GlitchIcon_White_128px.png"></img>
          </div>
          <div onClick={this.routeChange('')} className='buttonClass' style={DiscoverStyle}>Discover</div>
          <div onClick={this.routeChange('directory')} className='buttonClass' style={BrowseStyle}>Browse</div>
        </section>
        
        {/* Change text color to white in change handler */}
        {/* { showSearchBar && 
          <input id="searchBar" style={searchInput} type="text"
            name="searchBar" onChange={this.handleChange('searchBar')}
            value={this.state.searchBar}
            placeholder="Search"
            className={searchClass} />
        } */}
        {/* {showSearchBar && 
          <div style={searchIcon}> </div>
        } */}

        <section style={rightBarStyle}>
          {/* { !showSearchBar && 
            <div style={visualBoxRight}>Search</div>
          } */}
          {!this.props.currentUser && <div style={visualBoxRight} className='buttonClass' onClick={this.toggleModal('login')}>Log In</div> }
          {!this.props.currentUser && <div style={visualBoxRight} className='buttonClass' onClick={this.toggleModal('signup')}>Sign Up</div> }
          {/* {this.props.currentUser && <div style={visualBoxRight} className='buttonClass' onClick={this.logoutCheck}>Sign Out</div> }  */}
          {this.props.currentUser && <div style={visualBoxRight} className='buttonClass' onClick={this.toggleUserDrop}>
            {this.props.currentUser.picture && <img style={profilePictureStyle} src={this.props.currentUser.picture}></img>}
            {!this.props.currentUser.picture && <svg id="svgProfile" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" /></svg>}
          </div> }
          
          {/* <div style={visualBoxRight} onClick={this.logoutCheck}>
            {this.props.currentUser ? "Sign Out" : "User"}
          </div> */}

        </section>
      </div>
    )
  }
}

export default NavBarComponent;