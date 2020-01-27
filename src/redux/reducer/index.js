import { combineReducers } from 'redux';

import hotel from './hotel';
import city from './city';
import auth from './auth';
import topup from './topup';
import hotelRooms from './hotelRooms';
import balance from './balance';
import hotelSearch from './hotelSearch'

const appReducer = combineReducers({
  hotel,
  city,
  auth,
  topup,
  hotelRooms,
  balance,
  hotelSearch
})

export default appReducer;