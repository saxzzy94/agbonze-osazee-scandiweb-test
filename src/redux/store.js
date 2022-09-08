import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import category from "./reducers/categoryReducer";
import categoryList from "./reducers/categoryListReducer";
import product from "./reducers/productReducer";
import currencies from "./reducers/currencyReducer";
const reducers = combineReducers({
	category,
	categoryList,
	product,
	currencies,
});

const state = {};
const store = configureStore({
	reducer: reducers,
	state,
});

export default store;
