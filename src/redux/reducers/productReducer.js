import { GET_PRODUCT } from "../actions/actionType";

const initialState = {
	loading: false,
	product: {},
	errors: [],
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCT:
			return {
				...state,
				loading: false,
				product: action.payload,
			};
		default:
			return initialState;
	}
};
