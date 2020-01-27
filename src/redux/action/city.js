import axios from 'axios';

import { APP_URL } from '../../config/Api'

var url = APP_URL.concat('city');

export const getCities = (params) => {
  if (params !== '' && params !== undefined && params !== null) {
    url += `?search[name]=${params}`;
  }
  else {
    url = APP_URL.concat('city')
  }
  return {
    type: 'GET_CITY',
    payload: axios.get(url)
  }
}

// export const getItemById = (id_item) => {
//   return {
//     type: 'GET_ITEM_BY_ID',
//     payload: axios.get(url.concat(`/${id_item}`))
//   }
// }