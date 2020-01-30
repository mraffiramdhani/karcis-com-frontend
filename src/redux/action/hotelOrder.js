import { APP_URL, Get, Post } from '../../config/Api'

var url = APP_URL.concat('order/hotel')

export const getHotelOrder = (jwt) => {
  return {
    type: 'GET_HOTEL_ORDER',
    payload: Get(url, jwt)
  }
}

export const setHotelOrder = (jwt, data) => {
  return {
    type: 'SET_HOTEL_ORDER',
    payload: Post(url, jwt, data)
  }
}

export const getHotelOrderHistory = (jwt) => {
  return {
    type: 'GET_HOTEL_ORDER_HISTORY',
    payload: Get(url.concat('/history'), jwt)
  }
}
