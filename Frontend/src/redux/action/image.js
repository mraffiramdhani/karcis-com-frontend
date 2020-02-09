import { APP_URL, Patch } from '../../config/Api';

export const setProfileImage = (jwt, data) => {
  return {
    type: 'SET_PROFILE_IMAGE',
    payload: Patch(APP_URL.concat('u/profile'), jwt, data, 'multipart/form-data')
  }
}