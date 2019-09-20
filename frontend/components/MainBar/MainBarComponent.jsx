// import VideoContainer from '../../Video/VideoContainer';
// import VideoContainer from '../../components/Video/Video'
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VideoContainer from '../Video/VideoContainer';
import ChannelContainer from '../Channel/ChannelContainer';
import IndexContainer from '../Index/IndexContainer';
import FollowersContainer from '../Followings/FollowersContainer';
import FolloweesContainer from '../Followings/FolloweesContainer';
import CategoryContainer from '../Category/CategoryContainer';

export class MainBarComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mainWidth = (window.innerWidth - 49);
    const mainStyle = {
      // float: 'left',
      width: '100vw',
      position: 'relative',
      // top: '49px',
      // left: '49px',
      backgroundColor: "#0f0e11",
      boxSizing: 'border-box',
      borderLeft: 'solid 1px #252328',
      overflowY: 'scroll',
      margin: '49px'
    }
    const mainContainer = {
      paddingLeft: '20px',
      paddingTop: '20px',
      paddingRight: '69px',
      boxSizing: 'border-box'
    }

    if (this.props.location.pathname.includes(`/users/`)) {
      mainStyle['padding'] = '49px 0px';
    }

    return (
      <div style={mainStyle} id="mainBarComp">

        <Route path="/users/:username" component={ChannelContainer}></Route>
        <div style={mainContainer} id="mainContainer">
          <Switch>
            <Route exact path="/users/:username" component={VideoContainer}></Route>
            <Route exact path="/users/:username/following" component={FolloweesContainer}></Route>
            <Route exact path="/users/:username/followers" component={FollowersContainer}></Route>
            <Route exact path="/directory/" component={CategoryContainer}></Route>
            <Route path="/" component={IndexContainer}></Route>
          </Switch>
          <br></br>
        </div>
      </div>
    );
  }
}


          
          {/* <GreetingContainer /> */ }
{/* <AuthRoute path="/signup" component={SignupFormContainer} /> */ }
{/* <AuthRoute path="/login" component={LoginFormContainer} /> */ }