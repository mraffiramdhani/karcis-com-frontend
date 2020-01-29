import { combineReducers } from 'redux';

import hotel from './hotel';
import city from './city';
import auth from './auth';
import topup from './topup';
import hotelRooms from './hotelRooms';
import balance from './balance';
import hotelSearch from './hotelSearch'
import page from './page';
import hotelOrder from './hotelOrder';
import order from './order';

const appReducer = combineReducers({
  hotel,
  city,
  auth,
  topup,
  hotelRooms,
  balance,
  hotelSearch,
  page,
  hotelOrder,
  order
})

export default appReducer;