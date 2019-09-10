import {TOGGLE_LOGIN_MODAL} from '../actions/ui_modal_actions';

const defaultState = {
  modal: true
}

const uiModalReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case TOGGLE_LOGIN_MODAL:
      newState = Object.assign({}, state);
      newState['modal'] = action.status;
      return newState;
    default:
      return state;
  }
}

export default uiModalReducer;