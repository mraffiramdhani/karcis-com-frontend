import { combineReducers } from 'redux';

import hotel from './hotel';
import city from './city';
import auth from './auth';
import topup from './topup';
import hotelRooms from './hotelRooms';

const appReducer = combineReducers({
  hotel,
  city,
  auth,
  topup,
  hotelRooms
})

export default appReducer;