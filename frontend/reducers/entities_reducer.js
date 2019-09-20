import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import categoryReducer from './category_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  categories: categoryReducer,
});

export default entitiesReducer;