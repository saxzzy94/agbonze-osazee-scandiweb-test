import { GET_CATEGORY } from "../actions/actionType";

const initialState = {
	loading: false,
	category: "",
	result: [],
	errors: [],
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_CATEGORY:
			return {
				...state,
				loading: false,
				category: action.payload.name,
				result: action.payload.products,
			};
		default:
			return initialState;
	}
};
