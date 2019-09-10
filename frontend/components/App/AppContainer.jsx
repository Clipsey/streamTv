import { AppComponent } from './AppComponent';
import { connect } from 'react-redux';
import React from 'react';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    modalStatus: state.ui.modal,
  }
}
const mdp = (dispatch) => {
  return {

  }
}

export default connect(msp, mdp)(AppComponent);