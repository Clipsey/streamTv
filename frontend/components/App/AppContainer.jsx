import { AppComponent } from './AppComponent';
import { connect } from 'react-redux';
import React from 'react';

const msp = (state, ownProps) => {
  let streamKey = null;
  if (state.session.id != null) {
    streamKey = state.entities.users[state.session.id]['stream_key'];
  }
  return {
    currentUser: state.entities.users[state.session.id],
    modalStatus: state.ui.modal,
    streamKey
  }
}
const mdp = (dispatch) => {
  return {

  }
}

export default connect(msp, mdp)(AppComponent);