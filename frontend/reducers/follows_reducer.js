import { RECEIVE_FOLLOW, RECEIVE_FOLLOWS, DELETE_FOLLOW, REMOVE_FOLLOWS } from '../actions/follow_actions';

const defaultState = {
  currentUser: {},
  currentChannel: {},
}

const followsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = null;
  switch (action.type) {
    case RECEIVE_FOLLOW:
      newState = Object.assign({}, state);
      newState['currentUser'][action.follow.followee.id] = action.follow.followee.username;
      newState['currentChannel'][action.follow.follower.id] = action.follow.follower.username;
      return newState;
    case RECEIVE_FOLLOWS:
      newState = Object.assign({}, state);
      if (action.follows.get_request === 'followee') {
        newState['currentChannel'] = action.follows.users_info;
      } else {
        newState['currentUser'] = action.follows.users_info;
      }
      return newState;
    case DELETE_FOLLOW:
      return state;
    case REMOVE_FOLLOWS:
      newState = Object.assign({}, state);
      if (action.status === 'logout')
        newState['currentUser'] = {};
      else
        newState['currentChannel'] = {};
      return newState;
    default:
      return state;
  }
};

export default followsReducer;