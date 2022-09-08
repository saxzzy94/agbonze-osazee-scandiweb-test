import React from "react";
import setAttributes from "../../../Utils/CartUtils/SetAttributes";
import returnAttributes from "../../../Utils/CartUtils/ReturnAttributes";
import { CartItemTitles, CartProductInfo } from "../../../styles/Cart.styled";
import { AttributesWrapper } from "../../../styles/Attibute.styled";
import { ProductPrice } from "../../../styles/products/Products.styled";

class CartProductInf extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			jsonCart: "",
			jsonPrices: "",
		};
	}

	setAttributes = (order) => setAttributes.call(this, order);

	returnAttributes = (arr) => returnAttributes.call(this, arr);

	componentDidMount() {
		if (!window.localStorage.getItem("cart")) return;

		const cart = window.localStorage.getItem("cart");
		const jsonCart = JSON.parse(cart);
		const x = jsonCart.findIndex((item) => item.uniqueId === this.props.id);
		const product = JSON.parse(JSON.stringify(jsonCart[x]));
		const jsonPrices = JSON.parse(cart)[x].prices;

		this.setState({
			jsonCart: JSON.parse(JSON.stringify(product)),
			jsonPrices: jsonPrices,
		});
	}

	render() {
		const { brand, prodName, attributes } = this.state.jsonCart;
		return (
			<CartProductInfo>
				<>
					<CartItemTitles>
						<h4>{brand}</h4>
						<span>{prodName}</span>
					</CartItemTitles>

					<ProductPrice>
						<span>{this.props.currencySymbol}</span>
						<span>
							{this.state.jsonPrices &&
								this.state.jsonPrices[this.props.currencyNumber].amount}
						</span>
					</ProductPrice>
				</>

				<AttributesWrapper>
					{attributes ? this.returnAttributes(attributes) : ""}
				</AttributesWrapper>
			</CartProductInfo>
		);
	}
}

export default CartProductInf;
