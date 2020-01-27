import { APP_URL, Get, Patch } from '../../config/Api';

export const getBalance = (jwt) => {
    return {
        type: 'GET_BALANCE',
        payload: Get(APP_URL.concat('balance'), jwt)
    }
}

// export const register = (data) => {
//     return {
//         type: 'REGISTER',
//         payload: Post(APP_URL.concat('register'), null, data)
//     }
// }

// export const logout = (jwt) => {
//     return {
//         type: 'LOGOUT',
//         payload: Get(APP_URL.concat('logout'), jwt)
//     }
// }

// export const patchUser = (jwt, data) => {
//     return {
//         type: 'PATCH_USER',
//         payload: Patch(APP_URL.concat('user'), jwt, data)
//     }
// }