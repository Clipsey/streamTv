import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import VideoComponent from './VideoComponent';
import { getUserByName } from '../../actions/user_actions';
import { getCategory } from '../../actions/category_actions'

const msp = (state, ownProps) => {

  return {
    // currentUser: state.users[state.session.id],
    users: state.entities.users,
    channelUser: state.entities.users[state.ui.channelId],
    currentUser: state.entities.users[state.session.id],
    categories: state.entities.categories
  }
}

const mdp = (dispatch) => {
  return {
    getUserByName: (username) => dispatch(getUserByName(username)),
    getCategory: (info) => dispatch(getCategory(info))
  }
}

export default withRouter(connect(msp, mdp)(VideoComponent));