import {TOGGLE_LOGIN_MODAL, TOGGLE_USER_DROPDOWN} from '../actions/ui_actions';

const defaultState = {
  modal: false,
  formType: 'login',
  userDropDown: {
    status: false
  }
}

const uiModalReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case TOGGLE_LOGIN_MODAL:
      newState = Object.assign({}, state);
      newState['modal'] = action.status;
      newState['formType'] = action.formType;
      return newState;
    case TOGGLE_USER_DROPDOWN:
      newState = Object.assign({}, state);
      newState.userDropDown.status = action.status;
      return newState;
    default:
      return state;
  }
}

export default uiModalReducer;