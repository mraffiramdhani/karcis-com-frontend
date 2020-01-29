export const setHotel = (hotel_id) => {
	return {
		type: 'SET_HOTEL_ORDER',
		payload: {
			hotel_id
		}
	}
}

export const setRoom = (room_type_id) => {
	return {
		type: 'SET_ROOM_ORDER',
		payload: {
			room_type_id
		}
	}
}

export const setCount = (room_count, guest_count, date_range, cost) => {
	return {
		type: 'SET_COUNT_ORDER',
		payload: {
			room_count,
			guest_count,
			date_range,
			cost
		}
	}
}