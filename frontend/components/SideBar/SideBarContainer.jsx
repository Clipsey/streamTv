import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { SideBarComponent } from './SideBarComponent';
import { showFollows } from '../../actions/follow_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    currentUserFollows: Object.values(state.follows.currentUser),
    users: state.entities.users[state.session.id]
  }
}

const mdp = (dispatch) => {
  return {
    showFollows: (user) => dispatch(showFollows(user))
  }
}

export default withRouter(connect(msp, mdp)(SideBarComponent));