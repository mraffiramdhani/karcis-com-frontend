const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true
}

const topup = (state = initialState, action) => {
  switch (action.type) {
    case 'TOP_UP_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }
    case 'TOP_UP_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }
    case 'TOP_UP_FULFILLED':
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

export default topup