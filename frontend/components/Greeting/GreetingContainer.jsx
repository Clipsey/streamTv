import { GreetingComponent } from './GreetingComponent';
import { connect } from 'react-redux';

import {createNewUser, login, logout} from '../../actions/session_actions';


const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export const GreetingContainer = connect(mapStateToProps, mapDispatchToProps)(GreetingComponent);