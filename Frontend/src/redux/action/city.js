import qs from 'qs';

import { APP_URL, Get } from '../../config/Api';

var url = APP_URL.concat('city')

export const getCities = (params) => {
	if(params !== '' && params !== null && params !== undefined){
		url += `?search[name]=${params}`
	}
	else {
		url = APP_URL.concat('city')
	}
  return {
    type: 'GET_CITIES',
    payload: Get(url)
  }
}
