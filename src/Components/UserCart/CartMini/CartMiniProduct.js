import React from "react";
import checkForInStock from "../../../redux/actions/CheckForInStock";
import showChosedAttribute from "../../../Utils/CartMiniUtils/ShowChosedAttribute";
import {
	MiniCartProductImage,
	ProductPrice,
} from "../../../styles/products/Products.styled";
import {
	CountButtons,
	MiniCartItems,
	ProductInfo,
} from "../../../styles/Cart.styled";
class CartMiniProduct extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			jsonCart: "",
			uniqueId: "",
			productAmount: "",
			gallery: "",
			prices: "",
			attributes_1: "",
			attrNames: "",
		};
	}

	async changeProductAmount(sign, uniqueId) {
		if (!window.localStorage.getItem("cart")) return;

		const cart = window.localStorage.getItem("cart");
		let jsonCart = JSON.parse(cart);
		let x = jsonCart.findIndex((item) => item.uniqueId === uniqueId);
		let productAmount = jsonCart[x].amount;

		if (sign === "plus") {
			const name = this.props.name;
			const inStock = await JSON.parse(
				JSON.stringify(await checkForInStock(name))
			);

			if (inStock.product.inStock !== true) return "";
			else {
				const newAmount = productAmount + 1;
				this.setState({
					productAmount: newAmount,
				});

				jsonCart[x].amount = newAmount;
				window.localStorage.setItem("cart", JSON.stringify(jsonCart));
				this.props.setMiniCartProductChanged("yes");
			}
		} else if (sign === "minus" && productAmount > 0) {
			const newAmount = productAmount - 1;
			this.setState({
				productAmount: newAmount,
			});

			jsonCart[x].amount = newAmount;
			window.localStorage.setItem("cart", JSON.stringify(jsonCart));
			this.props.setMiniCartProductChanged("yes");
		}
	}

	showChosedAttribute = () => showChosedAttribute.call(this);

	componentDidMount() {
		const cart = window.localStorage.getItem("cart");
		const jsonCart = JSON.parse(cart);
		let x = jsonCart.findIndex((item) => item.uniqueId === this.props.id);
		const newAmount = JSON.parse(cart)[x].amount;
		const newData = JSON.parse(cart)[x];
		const uniqueId = JSON.parse(cart)[x].uniqueId;
		const gallery = JSON.parse(cart)[x].gallery;
		const prices = JSON.parse(cart)[x].prices;
		const attributes_1 = JSON.parse(cart)[x].attributes_1;
		const attrNames = JSON.parse(cart)[x].attrNames;
		this.setState({
			jsonCart: JSON.parse(JSON.stringify(newData)),
			productAmount: newAmount,
			uniqueId: uniqueId,
			gallery: gallery,
			prices: prices,
			attributes_1: attributes_1,
			attrNames: attrNames,
		});
	}

	componentDidUpdate() {
		const cart = window.localStorage.getItem("cart");
		const jsonCart = JSON.parse(cart);

		let x = jsonCart.find((item) => item.uniqueId === this.state.uniqueId);

		const newAmount = x ? x.amount : "";

		this.setState({
			productAmount: newAmount,
		});
	}

	render() {
		const { prices, uniqueId, productAmount, gallery } = this.state;
		const { brand, prodName } = this.state.jsonCart;
		return (
			<MiniCartItems>
				<ProductInfo>
					<h4>
						{brand}
						<br />
						{prodName}
					</h4>

					<ProductPrice>
						<span>{this.props.currencySymbol}</span>
						<span>{prices && prices[this.props.currencyNumber].amount}</span>
					</ProductPrice>

					{this.showChosedAttribute()}
				</ProductInfo>

				<div style={{ display: "flex" }}>
					<CountButtons>
						<button onClick={() => this.changeProductAmount("plus", uniqueId)}>
							&#43;
						</button>

						<span>{productAmount}</span>

						<button onClick={() => this.changeProductAmount("minus", uniqueId)}>
							&#8722;
						</button>
					</CountButtons>

					<MiniCartProductImage>
						<img src={gallery[0]} alt="#" />
					</MiniCartProductImage>
				</div>
			</MiniCartItems>
		);
	}
}

export default CartMiniProduct;
