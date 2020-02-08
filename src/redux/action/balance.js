import { APP_URL, Get, Patch } from '../../config/Api';

export const getBalance = (jwt) => {
  return {
    type: 'GET_BALANCE',
    payload: Get(APP_URL.concat('balance'), jwt)
  }
}

export const getBalanceHistory = (jwt) => {
	return {
		type: 'GET_BALANCE_HISTORY',
		payload: Get(APP_URL.concat('balance/history'), jwt)
	}
}