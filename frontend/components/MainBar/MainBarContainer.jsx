import React from 'react';
import { connect } from 'react-redux';
import { MainBarComponent } from './MainBarComponent';
import { withRouter } from 'react-router';

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

export default withRouter(connect(msp, mdp)(MainBarComponent));