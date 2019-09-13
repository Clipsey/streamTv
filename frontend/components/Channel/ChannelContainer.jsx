import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ChannelComponent } from './ChannelComponent';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
  }
}

const mdp = (dispatch) => {
  return {
    getUserByName: (username) => dispatch(getUserByName(username))
  }
}

export default withRouter(connect(msp, mdp)(ChannelComponent));