import React from 'react';

export class SideBarComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const sideBarContainer = {
      backgroundColor: '#19171c',
      width: '49px',
      height: '100%',
      float: 'left',
      borderRight: 'solid 1px #252328',
      display: 'flex',
      flexDirection: 'column'
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

    return (
      <div style={sideBarContainer}>
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
    )
  }
}