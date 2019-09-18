import { RECEIVE_FOLLOW, RECEIVE_FOLLOWS, DELETE_FOLLOW, REMOVE_FOLLOWS } from '../actions/follow_actions';

const defaultState = {
  currentUser: {},
  currentChannel: {},
  currentChannelFollowings: {}
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
        newState['currentChannelFollowings'] = action.follows.users_info_for_channel
      } else {
        newState['currentUser'] = action.follows.users_info;
      }
      return newState;
    case DELETE_FOLLOW:
      newState = Object.assign({}, state);
      delete newState['currentChannel'][action.follow.follower_id];
      delete newState['currentUser'][action.follow.followee_id];
      return newState;
    case REMOVE_FOLLOWS:
      newState = Object.assign({}, state);
      if (action.status === 'logout')
        newState['currentUser'] = {};
      else
        newState['currentChannel'] = {};
        newState['currentChannelFollowings'] = {};
      return newState;
    default:
      return state;
  }
};

export default followsReducer;