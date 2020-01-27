import qs from 'qs';

import { APP_URL, Get } from '../../config/Api';

const url = APP_URL.concat('city')

export const getCities = () => {
  return {
    type: 'GET_CITIES',
    payload: Get(url)
  }
}
