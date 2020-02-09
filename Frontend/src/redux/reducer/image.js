const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true
}

const image = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROFILE_IMAGE_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }
    case 'SET_PROFILE_IMAGE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }
    case 'SET_PROFILE_IMAGE_FULFILLED':
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isSuccess: action.payload.data.success,
        isError: false
      }
    default:
    return state
  }
}

export default image