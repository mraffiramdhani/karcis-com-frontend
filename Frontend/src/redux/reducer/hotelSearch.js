const hotelSearch = (state = {}, action) => {
  switch (action.type) {
    case 'RESET_SEARCH_PARAM':
      return {
        city_name: 'Hotel Dekat Anda.'
      }

    case 'SET_CHECK_IN':
      return {
        ...state,
        check_in: action.payload.check_in
      }

    case 'SET_CHECK_OUT':
      return {
        ...state,
        check_out: action.payload.check_out
      }

    case 'NEAR_ME':
      delete state.city_id
      return {
        city_name: 'Hotel Dekat Anda.' 
      }

    case 'SET_CITY_ID':
      return {
        ...state,
        city_id: action.payload.city_id,
        city_name: action.payload.city_name
      }

    case 'SET_ROOM_COUNT':
      return {
        ...state,
        room_count: action.payload.room_count
      }

    case 'SET_GUEST_COUNT':
      return {
        ...state,
        guest_count: action.payload.guest_count
      }
      
    default:
    return state
  }
}

export default hotelSearch