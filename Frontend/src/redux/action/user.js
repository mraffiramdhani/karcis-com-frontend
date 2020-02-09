import { APP_URL, Post } from '../../config/Api';

var url = APP_URL.concat('user');

export const checkEmail = (email) => {
  return {
    type: 'CHECK_USER',
    payload: Post(url.concat('/email/check'), null, { email })
  }
}

export const uploadImage = (uri) => {
  return {
    type: 'UPLOAD_IMAGE',
    payload: {
      uri
    }
  }
}