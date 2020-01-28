const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isAuth: false,
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_PENDING':
            return {
                data: [],
                isLoading: true,
                isError: false,
                isAuth: false
            }
        case 'LOGIN_REJECTED':
            return {
                ...state,
                data: [],
                isLoading: false,
                isError: true,
                isAuth: false
            }
        case 'LOGIN_FULFILLED':
            return {
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isAuth: action.payload.data.success,
            }

        case 'REGISTER_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isAuth: false
            }
        case 'REGISTER_REJECTED':
            return {
                ...state,
                data: [],
                isLoading: false,
                isError: true,
                isAuth: false
            }
        case 'REGISTER_FULFILLED':
            return {
                ...state,
                data: action.payload.data.data,
                isLoading: false,
                isError: false,
                isAuth: action.payload.data.success,
            }

        case 'LOGOUT_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isAuth: false,
            }
        case 'LOGOUT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isAuth: false,
            }
        case 'LOGOUT_FULFILLED':
            return {
                ...state,
                data: [],
                isLoading: false,
                isError: false,
                isAuth: false,
            }

        case 'PATCH_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isAuth: false,
            }
        case 'PATCH_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isAuth: false,
            }
        case 'PATCH_USER_FULFILLED':
            state.data.name = action.payload.data.data.name
            state.data.username = action.payload.data.data.username
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth: action.payload.data.success,
            }
        default:
            return state
    }
}

export default auth
