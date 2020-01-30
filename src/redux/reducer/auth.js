const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_PENDING':
            return {
                data: [],
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'LOGIN_REJECTED':
            return {
                ...state,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'LOGIN_FULFILLED':
            return {
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success,
                message: action.payload.data.message
            }

        case 'REGISTER_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'REGISTER_REJECTED':
            return {
                ...state,
                data: [],
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        case 'REGISTER_FULFILLED':
            return {
                ...state,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success,
                message: action.payload.data.message
            }

        case 'LOGOUT_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            }
        case 'LOGOUT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
            }
        case 'LOGOUT_FULFILLED':
            return {
                ...state,
                data: [],
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success,
                message: action.payload.data.message
            }

        case 'FORGOT_PASSWORD_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            }
        case 'FORGOT_PASSWORD_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
            }
        case 'FORGOT_PASSWORD_FULFILLED':
            return {
                ...state,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success,
                message: action.payload.data.message
            }

        case 'CHECK_OTP_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            }
        case 'CHECK_OTP_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
            }
        case 'CHECK_OTP_FULFILLED':
            return {
                ...state,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success,
                message: action.payload.data.message
            }

        case 'RESET_PASSWORD_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            }
        case 'RESET_PASSWORD_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
            }
        case 'RESET_PASSWORD_FULFILLED':
            return {
                ...state,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success,
                message: action.payload.data.message
            }

        case 'PATCH_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            }
        case 'PATCH_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
            }
        case 'PATCH_USER_FULFILLED':
            state.data.name = action.payload.data.data.name
            state.data.username = action.payload.data.data.username
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.data.success,
            }
        default:
            return state
    }
}

export default auth
