const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true
}

const balance = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BALANCE_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }
    case 'GET_BALANCE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }
    case 'GET_BALANCE_FULFILLED':
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

export default balance