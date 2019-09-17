import { RECEIVE_NO_USER_ERRORS, CLEAR_ERRORS } from '../actions/user_actions';

const missingDataReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NO_USER_ERRORS:
      let errors = action.errorData.responseJSON.errors;
      return errors;
    case CLEAR_ERRORS:
      return null;
    default:
      return state;
  }
};

export default missingDataReducer;