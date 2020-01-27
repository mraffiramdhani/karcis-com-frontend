import { combineReducers } from 'redux';

import hotel from './hotel';
import city from './city';
import auth from './auth';
import balance from './balance';

const appReducer = combineReducers({
  hotel,
  city,
  auth,
  balance
})

export default appReducer;