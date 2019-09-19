import { RECEIVE_CURRENT_USER, RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.user.id]: action.user})
    case RECEIVE_USER:
      return Object.assign({}, state, {[action.user.id]: action.user})
    case RECEIVE_USERS:
      let newState = Object.assign({}, state);
      const users = Object.values(action.users);
      for (let user of users) {
        newState[user.id] = user;
      }
      return newState;
    default:
      return state;
  }
}

export default usersReducer;