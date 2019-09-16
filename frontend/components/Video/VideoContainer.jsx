import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import VideoComponent from './VideoComponent';
import { getUserByName } from '../../actions/user_actions';

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

export default withRouter(connect(msp, mdp)(VideoComponent));