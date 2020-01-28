import { APP_URL, Get } from '../../config/Api'

var url = APP_URL.concat('order/hotel')

export const getHotelOrder = (jwt) => {
	console.log(jwt)
  return {
    type: 'GET_HOTEL_ORDER',
    payload: Get(url, jwt)
  }
}
