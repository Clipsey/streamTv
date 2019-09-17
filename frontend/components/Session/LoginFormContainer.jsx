import {connect} from 'react-redux';
import {SessionForm} from './SessionForm';
import { login, getUserById } from '../../actions/user_actions';
import { toggleLoginModal } from '../../actions/ui_actions';
import { resetErrors } from '../../actions/user_actions';
import { showFollows } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: 'login',
    loggedIn: state.session.id !== null ? true : false
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (formUser) => dispatch(login(formUser)),
    loginModal: (status, formType) => dispatch(toggleLoginModal(status, formType)),
    resetErrors: () => dispatch(resetErrors()),
    showFollows: (user) => dispatch(showFollows(user)),
    getUserById: (id) => dispatch(getUserById(id))
  }
};


export const LoginFormContainer =  connect(mapStateToProps, mapDispatchToProps)(SessionForm);