import { fetchCategories, fetchCategory } from '../utils/utils';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

const receiveCategoryInfo = info => ({
  type: RECEIVE_CATEGORIES,
  info
});
const receiveCategory = info => ({
  type: RECEIVE_CATEGORY,
  info
}); 

export const getCategoriesInfo = request => dispatch => {
  return fetchCategories(request)
    .then(info => dispatch(receiveCategoryInfo(info)))
}

export const getCategory = title => dispatch => {
  console.log("getCategory")
  return fetchCategory(title)
    .then(info => dispatch(receiveCategory(info)))
}