import React from "react";
import { withRouter } from "react-router-dom";
import {
	CartItemTitles,
	CartTitle,
	CartWrapper,
} from "../../../styles/Cart.styled";
import { Container } from "../../../styles/Common.styled";
import CartProduct from "./CartProduct";
class Cart extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			jsonCart: "",
			total: 0,
			quantity: 0,
		};
	}
	createCartList() {
		return (
			this.state.jsonCart &&
			this.state.jsonCart.map((item) => (
				<CartProduct
					key={item.uniqueId}
					id={item.uniqueId}
					name={item.name}
					setCurrentProduct={this.props.setCurrentProduct}
					setMiniCartProductChanged={this.props.setMiniCartProductChanged}
					currencySymbol={this.props.currencySymbol}
					currencyNumber={this.props.currencyNumber}
				/>
			))
		);
	}
	checkOut() {
		if (!window.localStorage.getItem("cart")) return;

		const cart = window.localStorage.getItem("cart");
		const jsonCart = JSON.parse(cart);
		let total = 0;
		let quantity = 0;
		const checkDeleted = jsonCart.filter((item) => item.amount > 0);

		checkDeleted.forEach((element) => {
			total +=
				element.prices[this.props.currencyNumber].amount * element.amount;

			quantity += element.amount;
		});
		window.localStorage.setItem("cart", JSON.stringify(checkDeleted));

		this.setState({
			currencySymbol: this.props.currencySymbol,
			total: total.toFixed(2),
			jsonCart: checkDeleted,
			quantity: quantity,
		});

		this.props.setMiniCartProductChanged("yes");
	}

	componentDidMount() {
		if (!window.localStorage.getItem("cart")) return;

		const cart = window.localStorage.getItem("cart");
		const jsonCart = JSON.parse(cart);
		this.checkOut();
		this.setState({
			jsonCart: JSON.parse(JSON.stringify(jsonCart)),
		});
	}
	componentDidUpdate() {
		if (this.props.miniCartChanged !== "no") {
			const cart = window.localStorage.getItem("cart");
			let jsonCart = JSON.parse(cart);

			this.setState({
				jsonCart: JSON.parse(JSON.stringify(jsonCart)),
			});

			this.checkOut();

			this.props.setMiniCartProductChanged("no");
		}
	}

	render() {
		return (
			<Container>
				<CartWrapper>
					<CartTitle>Cart</CartTitle>
					<ul>{this.createCartList()}</ul>
				</CartWrapper>
				<CartItemTitles>
					<span>
						Tax 21%:{" "}
						<strong>{((this.state.total * 21) / 100).toFixed(2)}</strong>
					</span>
				</CartItemTitles>
				<CartItemTitles>
					<span>
						Quantity: <strong>{this.state.quantity}</strong>
					</span>
				</CartItemTitles>
				<CartItemTitles>
					<span>
						Total:<strong>{this.state.total}</strong>
					</span>
				</CartItemTitles>
			</Container>
		);
	}
}

export default withRouter(Cart);
