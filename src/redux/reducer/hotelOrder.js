const initialState = {
	data: [],
	isLoading: false,
	isError: false,
	isSuccess: false,
}

const hotelOrder = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_HOTEL_ORDER_PENDING':
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			}
		case 'GET_HOTEL_ORDER_REJECTED':
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
			}
		case 'GET_HOTEL_ORDER_FULFILLED':
			return {
				...state,
				data: action.payload.data.data,
				isLoading: false,
				isError: false,
				isSuccess: action.payload.data.success,
			}
		default:
			return state
	}
}

export default hotelOrder