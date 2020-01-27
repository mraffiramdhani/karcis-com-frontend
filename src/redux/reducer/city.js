const initialState = {
  count: 0,
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true
}

const city = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CITY_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }
    case 'GET_CITY_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }
    case 'GET_CITY_FULFILLED':
      return {
        ...state,
        count: action.payload.data.length,
        data: action.payload.data.data,
        isLoading: false,
        isSuccess: true,
        isError: false
      }
    // case 'GET_ITEM_BY_ID_PENDING':
    //   return {
    //     ...state,
    //     isLoading: true,
    //     isSuccess: false,
    //     isError: false,
    //   }
    // case 'GET_ITEM_BY_ID_REJECTED':
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isSuccess: false,
    //     isError: true
    //   }
    // case 'GET_ITEM_BY_ID_FULFILLED':
    //   return {
    //     ...state,
    //     dataDetailItem: action.payload.data,
    //     isLoading: false,
    //     isSuccess: true,
    //     isError: false
    //   }
    default:
      return state
  }
}

export default city