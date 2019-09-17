import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import missingDataReducer from './missing_data_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  missing: missingDataReducer,
});

export default errorsReducer;