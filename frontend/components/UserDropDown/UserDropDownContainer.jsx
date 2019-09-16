import { UserDropDownComponent } from './UserDropDownComponent';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleUserDrop } from '../../actions/ui_actions';
import { logout } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    userDropDownStatus: state.ui.userDropDown.status
  }
}

const mdp = (dispatch) => {
  return {
    toggleUserDrop: (status) => dispatch(toggleUserDrop(status)),
    logout: () => dispatch(logout()),
  }
}

export default withRouter(connect(msp, mdp)(UserDropDownComponent));