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
    console.log("categories");
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

    const userDivs1 = [];
    const userDivs2 = [];
    const userDivs3 = [];
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

    let changeValue; 
    let displayCategoriesKeys = []; 
    if (this.props.categories) {
      displayCategoriesKeys = Array.from(Object.keys(this.props.categories));
    }
    // console.log(displayCategoriesKeys);

    // return (
    //   <div>
    //     {displayCategoriesKeys && displayCategoriesKeys[0]}
    //     <div>Categories</div>
    //   </div>
    // )



    if (displayCategoriesKeys.length > 1) {
      for (let i = 0; i < divCounter && displayCategoriesKeys.length > 0; ++i) {
        let category = displayCategoriesKeys.pop();
        let catObj = this.props.categories[category];
        const newStyle = Object.assign({}, elementStyle);
        newStyle['backgroundImage'] = `url(${catObj.picture})`;
        newStyle['backgroundSize'] = 'contain';
        newStyle['backgroundPosition'] = 'center center';
        newStyle['backgroundRepeat'] = 'no-repeat';
        userDivs1.push(
          <div key={category} style={newStyle} onClick={this.navigateUserClick(category)} >
          </div>
        );
      }
      for (let i = 0; i < divCounter && displayCategoriesKeys.length > 0; ++i) {
        let category = displayCategoriesKeys.pop();
        let catObj = this.props.categories[category];
        const newStyle = Object.assign({}, elementStyle);
        newStyle['backgroundImage'] = `url(${catObj.picture})`;
        newStyle['backgroundSize'] = 'contain';
        newStyle['backgroundPosition'] = 'center center';
        newStyle['backgroundRepeat'] = 'no-repeat';
        userDivs2.push(
          <div key={category} style={newStyle} onClick={this.navigateUserClick(category)} >
          </div>
        );
      }
      for (let i = 0; i < divCounter && displayCategoriesKeys.length > 0; ++i) {
        let category = displayCategoriesKeys.pop();
        let catObj = this.props.categories[category];
        const newStyle = Object.assign({}, elementStyle);
        newStyle['backgroundImage'] = `url(${catObj.picture})`;
        newStyle['backgroundSize'] = 'contain';
        newStyle['backgroundPosition'] = 'center center';
        newStyle['backgroundRepeat'] = 'no-repeat';
        userDivs3.push(
          <div key={category} style={newStyle} onClick={this.navigateUserClick(category)} >
          </div>
        );
      }
    }

    if (userDivs1.length + userDivs2.length + userDivs3.length < divCounter * 3) {

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
        </div>

      </div>
    )
  }
}