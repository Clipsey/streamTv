import { Greeting } from './Greeting';
import { connect } from 'react-redux';

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export const GreetingContainer = connect(mapStateToProps, mapDispatchToProps)(Greeting);