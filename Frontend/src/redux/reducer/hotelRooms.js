const initialState = {
  count: 0,
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true
}

const hotelRooms = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ROOM_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }
    case 'GET_ROOM_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }
    case 'GET_ROOM_FULFILLED':
      return {
        ...state,
        count: action.payload.data.data.rooms.length,
        data: action.payload.data.data,
        isLoading: false,
        isSuccess: true,
        isError: false
      }
    default:
      return state
  }
}

export default hotelRooms