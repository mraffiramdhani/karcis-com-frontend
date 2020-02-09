
import { APP_URL, Post, Get, Patch } from '../../config/Api';

export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: Post(APP_URL.concat('login'), null, data)
    }
}

export const register = (data) => {
    return {
        type: 'REGISTER',
        payload: Post(APP_URL.concat('register'), null, data)
    }
}

export const logout = (jwt) => {
    return {
        type: 'LOGOUT',
        payload: Get(APP_URL.concat('logout'), jwt)
    }
}

export const forgotPassword = (email) => {
    return {
        type: 'FORGOT_PASSWORD',
        payload: Post(APP_URL.concat('password'), null, { email })
    }
}

export const checkOTP = (code) => {
    return {
        type: 'CHECK_OTP',
        payload: Post(APP_URL.concat('otp/check'), null, { code })
    }
}

export const resetPassword = (email, password) => {
    return {
        type: 'RESET_PASSWORD',
        payload: Post(APP_URL.concat('password/reset'), null, { email, password })
    }
}

export const patchUser = (jwt, data) => {
    return {
        type: 'PATCH_USER',
        payload: Patch(APP_URL.concat('user'), jwt, data)
    }
}
