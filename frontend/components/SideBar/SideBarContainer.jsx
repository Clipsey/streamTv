import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { SideBarComponent } from './SideBarComponent';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
  }
}

const mdp = (dispatch) => {
  return {

  }
}

export default withRouter(connect(msp, mdp)(SideBarComponent));