import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Video from './Video';

const msp = (state, ownProps) => {
  let streamKey = null;
  let users = Object.values(state.entities.users);
  for (let i = 0; i < users.length; ++i) {
    if (ownProps.match.params.username === users[i].username) {
      streamKey = users[i].stream_key;
      break;
    }
  }
  return {
    // currentUser: state.users[state.session.id],
    // streamKey
  }
}

const mdp = (dispatch) => {
  return {
    
  }
}

export default withRouter(connect(msp, mdp)(Video));