import qs from 'qs';
import axios from 'axios';

import { APP_URL, APP_URL_IMAGE_HOTEL, Get } from '../../config/Api'

var url = APP_URL.concat('hotel')

export const getHotel = (params) => {
  return {
    type: 'GET_HOTEL',
    payload: axios.get(url)
  }
  // if (params !== '' && params !== undefined && params !== null) {
  //   url += '?';
  //   console.log('raw param', params)
  //   Object.keys(params).map((v, i) => {
  //     url += `search[${v}]=${params[v]}`;
  //     console.log('key param', v)
  //   });
  // }
  // else {
  //   url = APP_URL.concat('hotel')
  // }
}

export const getHotelById = (id) => {
  return {
    type: 'GET_HOTEL_BY_ID',
    payload: axios.get(url.concat(`/${id}`))
  }
}

// export const getItemById = (id_item) => {
//   return {
//     type: 'GET_ITEM_BY_ID',
//     payload: axios.get(url.concat(`/${id_item}`))
//   }
// }
