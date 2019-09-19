import React from 'react';
import { connect } from 'react-redux';
import { IndexComponent } from './IndexComponent';
import { withRouter } from 'react-router';
import { getUsers } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
  }
}
const mdp = (dispatch) => {
  return {
    getUsers: (request) => dispatch(getUsers(request))
  }
}

export default withRouter(connect(msp, mdp)(IndexComponent));