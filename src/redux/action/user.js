import { APP_URL, Get } from '../../config/Api';

export const checkEmail = (email) => {
  return {
    type: 'CHECK_USER',
    payload: {
      email
    }
  }
}