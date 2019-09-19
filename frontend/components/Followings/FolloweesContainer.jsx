import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FollowingsComponent } from './FollowingsComponent';

const msp = (state, ownProps) => {
  return {
    type: "Followees",
    currentUser: state.entities.users[state.session.id],
    users: Object.values(state.follows.currentChannelFollowings)
  }
}

const mdp = (dispatch) => {
  return {

  }
}

export default withRouter(connect(msp, mdp)(FollowingsComponent))