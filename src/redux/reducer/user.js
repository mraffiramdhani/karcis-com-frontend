const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: ''
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      }
    case 'CHECK_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      }
    case 'CHECK_USER_FULFILLED':
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        isSuccess: action.payload.data.success,
        message: action.payload.data.message
      }

    case 'UPLOAD_IMAGE':
      return {
        ...state,
        uri: action.payload.uri
      }
    default:
      return state;
  }
}

export default user;