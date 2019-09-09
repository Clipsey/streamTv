import {connect} from 'react-redux';
import {SessionForm} from './SessionForm';
import {login} from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: 'login',
  loggedIn: state.session.id !== null ? true : false
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (formUser) => dispatch(login(formUser))
});


export const LoginFormContainer =  connect(mapStateToProps, mapDispatchToProps)(SessionForm);