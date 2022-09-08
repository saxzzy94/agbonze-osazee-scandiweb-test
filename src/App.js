import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Product from "./Components/Categories/Product";
import Cart from "./Components/UserCart/Cart/Cart";
import FakeCart from "./Components/UserCart/Cart/FakeCart";
import { DEFAULT } from "./Utils/Constants";
import forAddToCart from "./Utils/AppUtils/ForAddToCart";
import changeLocalStorage from "./Utils/AppUtils/СhangeLocalStorage";
import forChangeAttributes from "./Utils/AppUtils/ForChangeAttributes";
import Category from "./Components/Categories/Categ/Category";

class App extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			categoryList: [],
			startPage: "yes",
			currentCategory: "",
			savedCategory: "",
			savedHref: "/",
			currentProduct: "",
			categoryChanged: "no",
			currencySymbol: "$",
			currencyNumber: 0,
			countCart: 0,
			miniCartProductChanged: "no",
			miniCartChanged: "no",
			displayCountCart: "no",
			displaySignIn: "no",
			currencies: "",
			currency: "",
			attrs: DEFAULT,
			attributeOrders: "",
		};

		this.addToCart = this.addToCart.bind(this);
		this.setMiniCartProductChanged = this.setMiniCartProductChanged.bind(this);
		this.changeCurrency = this.changeCurrency.bind(this);
		this.changeStartPage = this.changeStartPage.bind(this);
		this.changeCurrentCategory = this.changeCurrentCategory.bind(this);
		this.setSavedCategory = this.setSavedCategory.bind(this);
		this.setSavedHref = this.setSavedHref.bind(this);
		this.setCurrentProduct = this.setCurrentProduct.bind(this);
		this.changeAttributes = this.changeAttributes.bind(this);
		this.changeAttributeOrders = this.changeAttributeOrders.bind(this);
		this.setDefaultAttributes = this.setDefaultAttributes.bind(this);
		this.setDefaultCategoryChanged = this.setDefaultCategoryChanged.bind(this);
	}

	changeStartPage(arg) {
		this.setState({
			startPage: arg,
			savedCategory: "",
		});
	}

	changeCurrentCategory(categ) {
		this.setState({
			currentCategory: categ,
			savedHref: "/",
			categoryChanged: "yes",
		});
	}

	setSavedCategory(categ) {
		this.setState({
			savedCategory: categ,
			currentCategory: categ,
		});
	}

	setSavedHref(href) {
		this.setState({
			savedHref: href,
		});
	}

	setCurrentProduct(prod) {
		this.setState({
			savedHref: "/",
			currentProduct: prod,
		});
	}

	setMiniCartProductChanged(arg) {
		if (window.localStorage.getItem("cart")) {
			const cart = window.localStorage.getItem("cart");
			const cartCount = JSON.parse(cart).length;

			this.setState({
				miniCartProductChanged: arg,
				miniCartChanged: arg,
				displayCountCart: cartCount > 0 ? "yes" : "no",
				countCart: cartCount,
			});
		}
	}

	setDefaultCategoryChanged() {
		this.setState({
			categoryChanged: "no",
			startPage: "yes",
		});
	}

	changeLocalStorage = (
		id,
		attributeNames,
		attributeOrders,
		attributes,
		attributes_1,
		prices,
		gallery,
		prodName,
		brand
	) =>
		changeLocalStorage.call(
			this,
			id,
			attributeNames,
			attributeOrders,
			attributes,
			attributes_1,
			prices,
			gallery,
			prodName,
			brand
		);

	forAddToCart = (
		inStock,
		id,
		attributeNames,
		attributeOrders,
		attributes,
		attributes_1,
		prices,
		gallery,
		prodName,
		brand
	) =>
		forAddToCart.call(
			this,
			inStock,
			id,
			attributeNames,
			attributeOrders,
			attributes,
			attributes_1,
			prices,
			gallery,
			prodName,
			brand
		);

	addToCart(
		inStock,
		id,
		attributeNames,
		attributeOrders,
		attributes,
		attributes_1,
		prices,
		gallery,
		prodName,
		brand
	) {
		const newCount = this.forAddToCart(
			inStock,
			id,
			attributeNames,
			attributeOrders,
			attributes,
			attributes_1,
			prices,
			gallery,
			prodName,
			brand
		);
		if (newCount)
			this.setState({
				countCart: newCount,
				displayCountCart: "yes",
				miniCartChanged: "yes",
				miniCartProductChanged: "yes",
			});
	}

	forChangeAttributes = (attrName, attrValue) =>
		forChangeAttributes.call(this, attrName, attrValue);

	changeAttributes(attrName, attrValue) {
		const newAttrs = this.forChangeAttributes(attrName, attrValue);

		this.setState({
			attrs: newAttrs,
		});
	}

	changeAttributeOrders(arg) {
		this.setState({
			attributeOrders: arg,
		});
	}

	setDefaultAttributes() {
		this.setState({
			attrs: DEFAULT,
		});
	}

	changeCurrency(symbol, currency, index) {
		this.setState({
			currencySymbol: symbol,
			currency: currency,
			currencyNumber: index,
		});
	}

	async componentDidMount() {
	
	}

	render() {
		const {
			countCart,
			displayCountCart,
			currentCategory,
			savedCategory,
			savedHref,
			miniCartChanged,
			miniCartProductChanged,
			categoryChanged,
			currentProduct,
			attributeOrders,
			currencySymbol,
			currencyNumber,
		} = this.state;
		return (
			<BrowserRouter>
				<Nav
					changeCurrency={this.changeCurrency}
					countCart={countCart}
					displayCountCart={displayCountCart}
					currentCategory={this.props.category}
					changeCurrentCategory={this.changeCurrentCategory}
					savedCategory={savedCategory}
					setCurrentProduct={this.setCurrentProduct}
					setSavedHref={this.setSavedHref}
					savedHref={savedHref}
					miniCartChanged={miniCartChanged}
					miniCartProductChanged={miniCartProductChanged}
					setMiniCartProductChanged={this.setMiniCartProductChanged}
					categoryList={this.state.categoryList}
					currencyNumber={currencyNumber}
					currencySymbol={currencySymbol}
				/>

				<Switch>
					<Route exact path={["/", `/category/:category`]}>
						{({ match }) => (
							<Category
								match={match}
								currentCategory={currentCategory}
								categoryChanged={categoryChanged}
								setSavedCategory={this.setSavedCategory}
								setDefaultCategoryChanged={this.setDefaultCategoryChanged}
								setCurrentProduct={this.setCurrentProduct}
								addToCart={this.addToCart}
								products={this.props.products}
								getCategory={this.props.getCategory}
								currencySymbol={currencySymbol}
								currencyNumber={currencyNumber}
							/>
						)}
					</Route>

					<Route path="/product/:id">
						{({ match }) => (
							<Product
								match={match}
								currentProduct={currentProduct}
								changeAttributes={this.changeAttributes}
								addToCart={this.addToCart}
								attributeOrders={attributeOrders}
								changeAttributeOrders={this.changeAttributeOrders}
								setDefaultAttributes={this.setDefaultAttributes}
								currencySymbol={currencySymbol}
								currencyNumber={currencyNumber}
							/>
						)}
					</Route>

					<Route path="/cart">
						<Cart
							setCurrentProduct={this.setCurrentProduct}
							setMiniCartProductChanged={this.setMiniCartProductChanged}
							miniCartChanged={this.state.miniCartChanged}
							currencySymbol={currencySymbol}
							currencyNumber={currencyNumber}
						/>
					</Route>

					<Route path="/fake-cart">
						<FakeCart />
					</Route>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
