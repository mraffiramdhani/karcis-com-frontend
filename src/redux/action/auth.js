import axios from 'axios';

import { APP_URL, Post, Get } from '../../config/Api'

var url = APP_URL;

export const login = (data) => {
  return {
    type: 'LOGIN',
    payload: Post(url.concat('login'), null, data)
  }
}

export const register = (data) => {
  return {
    type: 'REGISTER',
    payload: Post(url.concat('register'), null, data)
  }
}

export const logout = (jwt) => {
  return {
    type: 'LOGOUT',
    payload: Get(url.concat('logout'), jwt)
  }
}


// export const getItemById = (id_item) => {
//   return {
//     type: 'GET_ITEM_BY_ID',
//     payload: axios.get(url.concat(`/${id_item}`))
//   }
// }