import { postFollow, getFollows, deleteFollow } from '../utils/utils';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const DELETE_FOLLOW = 'DELETE_FOLLOW';
export const REMOVE_FOLLOWS = 'REMOVE_FOLLOWS';

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});
const receiveFollows = follows => ({
  type: RECEIVE_FOLLOWS,
  follows
});
const removeFollow = follow => ({
  type: DELETE_FOLLOW,
  follow
})
const removeSomeFollows = (status) => ({
  type: REMOVE_FOLLOWS,
  status
})

export const createFollow = follow => dispatch => {
  return postFollow(follow)
    .then(follow => dispatch(receiveFollow(follow)))
}
export const showFollows = user => dispatch => {
  return getFollows(user)
    .then(follows => dispatch(receiveFollows(follows)))
}
export const destroyFollow = follow => dispatch => {
  return postFollow(follow)
    .then(follow => dispatch(receiveFollow(follow)))
}

export const clearHalfFollows = (status) => dispatch => {
  dispatch(removeSomeFollows(status));
}