const initialState = {
  count: 0,
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true
}

const city = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CITIES_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }
    case 'GET_CITIES_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }
    case 'GET_CITIES_FULFILLED':
      return {
        ...state,
        count: action.payload.data.length,
        data: action.payload.data.data,
        isLoading: false,
        isSuccess: true,
        isError: false
      }
    default:
    return state
  }
}

export default city