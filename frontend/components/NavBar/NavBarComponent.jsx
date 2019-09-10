import React from 'react';

// default : #6441a4
// light: #7d5bbe

//two divs
// flex-start on left,
// flex-end on right

export class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(formType) {
    return () => this.props.loginModal(!this.props.modalStatus, formType);
  }

  render() {
    const navBarStyle = {
      marginTop: '0px',
      marginLeft: '0px',
      backgroundColor: '#6441a4',
      width: '100%',
      height: '50px',
      display: 'flex',
      color: 'white',
      justifyContent: 'space-between'
    }
    const leftBarStyle = {
      display: 'flex',
      justifyContent: 'flex-start'
    }
    const rightBarStyle = {
      display: 'flex',
      justifyContent: 'flex-end'
    }

    const visualBox = {
      height: '100%',
      lineHeight: '50px',
      fontFamily: 'sans-serif',
      paddingLeft: '5px',
      paddingRight: '6px',
      textAlign: 'center',
      margin: 'auto'
    }

    {/* Add picture-icon here */ }

    return (
      <div style={navBarStyle}>
        <section style={leftBarStyle}>
          <div style={visualBox}>Icon</div>
          <div style={visualBox}>Discover</div>
          <div style={visualBox}>Browse</div>
          <div style={visualBox}>More</div>
        </section>
        <section style={rightBarStyle}>
          <div style={visualBox}>Search</div>
          <div style={visualBox}>Crown</div>
          <div style={visualBox} onClick={this.toggleModal('login')} >Log In</div>
          <div style={visualBox}>Sign Up</div>
          <div style={visualBox}>User</div>
        </section>
      </div>
    )
  }
}

export default NavBarComponent;