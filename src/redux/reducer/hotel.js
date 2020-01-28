const initialState = {
  count: 0,
  data: [],
  dataDetail: [],
  isLoading: true,
  isError: false,
  isSuccess: true
}

const hotel = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HOTEL_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }
    case 'GET_HOTEL_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }
    case 'GET_HOTEL_FULFILLED':
      return {
        ...state,
        count: action.payload.data.data.hotels.length,
        data: action.payload.data.data,
        isLoading: false,
        isSuccess: true,
        isError: false
      }
    case 'GET_HOTEL_BY_ID_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }
    case 'GET_HOTEL_BY_ID_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }
    case 'GET_HOTEL_BY_ID_FULFILLED':
      return {
        ...state,
        count: action.payload.data.data.amenities.length,
        dataDetail: action.payload.data.data,
        isLoading: false,
        isSuccess: true,
        isError: false
      }
    default:
      return state
  }
}

export default hotel