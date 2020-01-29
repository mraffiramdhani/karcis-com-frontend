const initialState = {
	page: 'Splash'
}

const page = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_PAGE':
			return {
				...state,
				page: action.payload.page
			}
		default:
			return state
	}
}

export default page