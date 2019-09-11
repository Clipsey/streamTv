import { connect } from 'react-redux';
import NavBarComponent from './NavBarComponent';
import { toggleLoginModal } from '../../actions/ui_modal_actions';
import { logout } from '../../actions/session_actions';


const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    modalStatus: state.ui.modal,
    state: state
  }
}
const mdp = dispatch => {
  return {
    loginModal: (status, formType) => dispatch(toggleLoginModal(status, formType)),
    logout: () => dispatch(logout())
  }
}

export default connect(msp, mdp)(NavBarComponent);