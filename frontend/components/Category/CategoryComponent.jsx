// export class CategoryComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: []
//     }

//     // this.resize = this.resize.bind(this);
//     // this.navigateUserClick = this.navigateUserClick.bind(this);
//   }

//   componentDidMount() {
//     
//   }

//   shuffle(array) {
//     var currentIndex = array.length;
//     var temporaryValue, randomIndex;

//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;

//       // And swap it with the current element.
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }

//     return array;

//   };


import React from 'react';

export class CategoryComponent extends React.Component {
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
    this.props.getCategoriesInfo();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  navigateUserClick(destination) {
    return () => {
      this.props.history.push(`/${destination}`);
    }
  }


  resize() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.forceUpdate.bind(this), 0);
  }

  render() {
    const flexContainerStyle = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      // justifyContent: 'space-around'
    }

    const flexItemStyle = {
      display: 'flex',
      flexDirection: 'column',
      height: '33vw',
      maxHeight: '400px',
      width: '20vw',
      maxWidth: '242px',
      minHeight: '200px',
      minWidth: '121px',
      margin: '0px 5px',
      boxSizing: 'border-box',
      backgroundColor: '#0f0e11',
      cursor: 'pointer',
      // position: 'relative',
      // border: 'solid 1px white',
    
    }
    const flexPictureStyle = {
      height: '80%',
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: '4px',
    }
    const flexDescriptionStyle = {
      height: '20%',
      width: '100%',
      boxSizing: 'border-box',
      border: 'solid 1px black',
      fontWeight: 'bold',
      marginTop: '4px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    }
    const viewerShipStyle = {
      marginTop: '2px',
      fontWeight: '300',
      fontSize: '13px'
    }

    const listStyle = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      marginBottom: '20px',
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
      height: '40vw',
      maxHeight: '300px',
      margin: '0px 10px',
      boxSizing: 'border-box',
      backgroundColor: '#0f0e11',
      cursor: 'pointer',
      position: 'relative',
      borderRadius: '4px'
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
      // top: '80%',
      // left: '50%',
      // transform: 'translateX(-50%)'
    }


    const regularIcon = {
      // borderRadius: '1000px',
      width: '90px',
      height: '90px',
      margin: '15px auto',
    }
    const miniIcon = {
      borderRadius: '1000px',
      width: '40px',
      height: '40px',
    }


    let changeValue; 
    let displayCategoriesKeys = []; 
    if (this.props.categories) {
      displayCategoriesKeys = Array.from(Object.keys(this.props.categories));
    }


    let categoryItems = [];
    for (let category in this.props.categories) {
      const catObj = this.props.categories[category];
      const newStyle = Object.assign({}, flexPictureStyle);
      // newStyle['border'] = 'solid 1px white'
      newStyle['backgroundImage'] = `url(${catObj.picture})`;
      newStyle['backgroundSize'] = 'contain';
      newStyle['backgroundPosition'] = 'top center';
      newStyle['backgroundRepeat'] = 'no-repeat';
      categoryItems.push(
        <div key={category} style={flexItemStyle} >
          <div style={newStyle} onClick={this.navigateUserClick(category)} >
          </div>
          <div style={flexDescriptionStyle}>
            {category}
            <div style={viewerShipStyle}>
              {`${Math.floor(Math.random() * 10)}k viewers`}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div style={flexContainerStyle}>
          {categoryItems}
        </div>

      </div>
    )
  }
}