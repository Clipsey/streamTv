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
    if(this.props.currentUser) this.props.logout();
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
      width: '100%',
      height: '50px',
      display: 'flex',
      justifyContent: 'space-between',
      position: 'fixed',
      top: '0',
      left: '0'
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
      fontSize: '14px',
      color: '#9480be',
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

    return (
      <div style={navBarStyle}>
        
        <section style={leftBarStyle}>
          <div onClick={this.routeChange('')} className='buttonClass' style={twitchIconNav}>Icon</div>
          <div onClick={this.routeChange('')} className='buttonClass' style={DiscoverStyle}>Discover</div>
          <div onClick={this.routeChange('directory')} className='buttonClass' style={BrowseStyle}>Browse</div>
        </section>
        
        {/* Change text color to white in change handler */}
        { showSearchBar && 
          <input id="searchBar" style={searchInput} type="text"
            name="searchBar" onChange={this.handleChange('searchBar')}
            value={this.state.searchBar}
            placeholder="Search"
            className={searchClass} />
        }
        {/* {showSearchBar && 
          <div style={searchIcon}> </div>
        } */}

        <section style={rightBarStyle}>
          { !showSearchBar && 
            <div style={visualBoxRight}>Search</div>
          }
          {!this.props.currentUser && <div style={visualBoxRight} className='buttonClass' onClick={this.toggleModal('login')}>Log In</div> }
          {!this.props.currentUser && <div style={visualBoxRight} className='buttonClass' onClick={this.toggleModal('signup')}>Sign Up</div> }
          {this.props.currentUser && <div style={visualBoxRight} className='buttonClass' onClick={this.logoutCheck}>Sign Out</div> } 
          {this.props.currentUser && <div style={visualBoxRight} className='buttonClass' onClick={this.toggleUserDrop}>User</div> }
          
          {/* <div style={visualBoxRight} onClick={this.logoutCheck}>
            {this.props.currentUser ? "Sign Out" : "User"}
          </div> */}

        </section>
      </div>
    )
  }
}

export default NavBarComponent;