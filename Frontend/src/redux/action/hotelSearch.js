export const resetSearchParam = () => {
	return {
		type: 'RESET_SEARCH_PARAM'
	}
}

export const setCheckIn = (check_in) => {
  return {
    type: 'SET_CHECK_IN',
    payload: {
      check_in
    }
  }
}

export const setCheckOut = (check_out) => {
  return {
    type: 'SET_CHECK_OUT',
    payload: {
      check_out
    }
  }
}

export const setRoomCount = (room_count) => {
  return {
    type: 'SET_ROOM_COUNT',
    payload: {
      room_count
    }
  }
}

export const setGuestCount = (guest_count) => {
  return {
    type: 'SET_GUEST_COUNT',
    payload: {
      guest_count
    }
  }
}

export const nearMeParam = () => {
  return {
    type: 'NEAR_ME'
  }
}

export const setCityId = (city_id, city_name) => {
  return {
    type: 'SET_CITY_ID',
    payload: {
    	city_id,
    	city_name
    }
  }
}
