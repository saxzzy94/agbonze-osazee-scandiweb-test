import { client, Field, Query } from "@tilework/opus";
import {
	ERROR_CATEGORY,
	GET_CATEGORY,
	GET_CATEGORY_LIST,
	GET_PRODUCT,
} from "./actionType";

client.setEndpoint("http://localhost:4000/graphql");

export const getCategory = (category) => async (dispatch) => {
	try {
		const queryCategory = new Query("category", true)
			.addArgument("input", "CategoryInput", { title: category })
			.addField(new Field("name"))
			.addField(
				new Field("products", true).addFieldList([
					"id",
					"name",
					"brand",
					"attributes{id, items{value,id}}",
					"inStock",
					"gallery",
					"prices{amount}",
				])
			);
		const result = await client.post(queryCategory);

		dispatch({
			type: GET_CATEGORY,
			payload: result.category,
		});
	} catch (error) {
		console.log(error);
		dispatch({ type: ERROR_CATEGORY, payload: error });
	}
};

export const getCategoryList = () => async (dispatch) => {
	try {
		const queryCategoriesList = new Query("category", true).addField(
			new Field("products", true).addFieldList(["category"])
		);

		const result = await client.post(queryCategoriesList);
		
		dispatch({ type: GET_CATEGORY_LIST, payload: result.category.products });
	} catch (error) {}
};

export const getProduct = (id) => async (dispatch) => {
	try {
		const query = new Query("product", true)
			.addArgument("id", "String!", id)
			.addFieldList([
				"id",
				"name",
				"inStock",
				"gallery",
				"description",
				"brand",
				"attributes {id, items {value, id}}",
				"prices {amount}",
			]);
		const result = await client.post(query);
		dispatch({
			type: GET_PRODUCT,
			payload: result.product,
		});
	} catch (error) {}
};
