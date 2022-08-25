import { GET_CATEGORY_LIST } from "../actions/actionType";

const initialState = {
	loading: false,
	categoryList: [],
	errors: [],
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_CATEGORY_LIST:
			return {
				...state,
				loading: false,
				categoryList: action.payload,
			};
		default:
			return initialState;
	}
};
