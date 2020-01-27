import axios from 'axios';
import qs from 'qs';

import { APP_URL } from '../../config/Api'

const url = APP_URL.concat('hotel')

export const getHotel = () => {
  return {
    type: 'GET_HOTEL',
    payload: axios.get(url)
  }
}