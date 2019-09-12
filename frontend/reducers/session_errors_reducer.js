import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return null;
    case RECEIVE_ERRORS:
      let errors = action.errorsArr.responseJSON.errors;
      if (typeof errors === 'object') errors = errors[0];
      return errors;
    case CLEAR_ERRORS:
      return null;
    default:
      return state;
  }
};

export default sessionErrorsReducer;