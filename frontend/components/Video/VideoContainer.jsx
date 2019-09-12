import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Video from './Video';
import { getUserByName } from '../../actions/session_actions';

const msp = (state, ownProps) => {

  return {
    // currentUser: state.users[state.session.id],
    users: state.entities.users
  }
}

const mdp = (dispatch) => {
  return {
    getUserByName: (username) => dispatch(getUserByName(username))
  }
}

export default withRouter(connect(msp, mdp)(Video));