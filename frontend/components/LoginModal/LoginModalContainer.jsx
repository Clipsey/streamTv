import React from 'react';
import {connect} from 'react-redux';
import LoginModalComponent from './LoginModalComponent';
import { toggleLoginModal } from '../../actions/ui_modal_actions';
import { resetErrors } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    user: {
      username: "",
      password: ""
    },
    modalStatus: state.ui.modal,
  }
}
const mdp = (dispatch) => {
  return {
    loginModal: (status) => dispatch(toggleLoginModal(status)),
    resetErrors: () => dispatch(resetErrors())
  }
}

export default connect(msp, mdp)(LoginModalComponent);