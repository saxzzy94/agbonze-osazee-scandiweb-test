import { GET_CURRENCIES } from "../actions/actionType";

const initialState = {
	loading: false,
	currencies: [],
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_CURRENCIES:
			return {
				...state,
				loading: false,
				currencies: action.payload,
			};
		default:
			return initialState;
	}
};
