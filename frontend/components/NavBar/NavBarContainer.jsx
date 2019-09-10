import { connect } from 'react-redux';
import NavBarComponent from './NavBarComponent';
import { toggleLoginModal } from '../../actions/ui_modal_actions';


const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    modalStatus: state.ui.modal,
    state: state
  }
}
const mdp = dispatch => {
  return {
    loginModal: (status, formType) => dispatch(toggleLoginModal(status, formType))
  }
}

export default connect(msp, mdp)(NavBarComponent);