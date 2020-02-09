import { APP_URL, Patch } from '../../config/Api'

var url = APP_URL.concat('top-up');

export const topUp = (jwt, data) => {
  return {
    type: 'TOP_UP',
    payload: Patch(url, jwt, data)
  }
}

// export const getItemById = (id_item) => {
//   return {
//     type: 'GET_ITEM_BY_ID',
//     payload: axios.get(url.concat(`/${id_item}`))
//   }
// }