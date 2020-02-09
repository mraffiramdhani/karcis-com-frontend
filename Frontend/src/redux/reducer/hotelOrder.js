const initialState = {
	count: 0,
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
				count: action.payload.data.data.length,
				data: action.payload.data.data,
				isLoading: false,
				isError: false,
				isSuccess: action.payload.data.success,
			}

		case 'SET_HOTEL_ORDER_PENDING':
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			}
		case 'SET_HOTEL_ORDER_REJECTED':
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
			}
		case 'SET_HOTEL_ORDER_FULFILLED':
			return {
				...state,
				isLoading: false,
				isError: false,
				isSuccess: action.payload.data.success,
			}

		case 'GET_HOTEL_ORDER_HISTORY_PENDING':
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			}
		case 'GET_HOTEL_ORDER_HISTORY_REJECTED':
			return {
				...state,
				isLoading: false,
				isError: true,
				isSuccess: false,
			}
		case 'GET_HOTEL_ORDER_HISTORY_FULFILLED':
			return {
				...state,
				count: action.payload.data.data.length,
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