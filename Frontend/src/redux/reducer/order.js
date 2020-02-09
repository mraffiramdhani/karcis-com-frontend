const initialState = {}

const order = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_HOTEL_ORDER':
			return {
				...state,
				hotel_id: action.payload.hotel_id
			}
		case 'SET_ROOM_ORDER':
			return {
				...state,
				room_type_id: action.payload.room_type_id
			}
		case 'SET_COUNT_ORDER':
			return {
				...state,
				room_count: action.payload.room_count,
				guest_count: action.payload.guest_count,
				date_range: action.payload.date_range,
				cost: action.payload.cost
			}
		default:
			return state;
	}
}

export default order