import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY } from '../actions/category_actions';

const categoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      // newState = Object.assign({}, state);
      newState = Object.assign({}, action.info);
      return newState;
    case RECEIVE_CATEGORY:
      newState = Object.assign({}, state);
      const title = action.info['title'];
      delete newState[action.info['title']];
      newState[title] = action.info;
      return newState;
    default:
      return state; 
  }
}

export default categoriesReducer;