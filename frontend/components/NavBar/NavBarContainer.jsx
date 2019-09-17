import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { toggleLoginModal, toggleUserDrop } from '../../actions/ui_actions';
import { logout } from '../../actions/user_actions';
import { clearHalfFollows } from '../../actions/follow_actions';

import NavBarComponent from './NavBarComponent';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    modalStatus: state.ui.modal,
    state: state,
    userDropDownStatus: state.ui.userDropDown.status,
  }
}
const mdp = dispatch => {
  return {
    loginModal: (status, formType) => dispatch(toggleLoginModal(status, formType)),
    logout: () => dispatch(logout()),
    toggleUserDrop: (status) => dispatch(toggleUserDrop(status)),
    clearHalfFollows: (status) => dispatch(clearHalfFollows(status))
  }
}

export default withRouter(connect(msp, mdp)(NavBarComponent));