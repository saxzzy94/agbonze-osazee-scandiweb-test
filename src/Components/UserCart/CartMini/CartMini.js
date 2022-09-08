import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import {
	MiniCartButtons,
	MiniCartListWrapper,
	MiniCartTitle,
	MiniCartWraper,
	PriceSummary,
	Summary,
} from "../../../styles/Cart.styled";
import createCartMiniList from "../../../Utils/CartMiniUtils/CreateCartMiniLis";

class CartMini extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			jsonCart: "",
			currencySymbol: "$",
			total: "00.00",
		};
	}

	createCartMiniList = (data) => createCartMiniList.call(this, data);

	checkOut() {
		if (!window.localStorage.getItem("cart")) return;

		const cart = window.localStorage.getItem("cart");
		const jsonCart = JSON.parse(cart);
		let total = 0;
		const checkDeleted = jsonCart.filter((item) => item.amount > 0);

		checkDeleted.forEach((element) => {
			total += element.prices[this.props.currencyNumber] * element.amount;
		});
		window.localStorage.setItem("cart", JSON.stringify(checkDeleted));

		this.setState({
			currencySymbol: this.props.currencySymbol,
			total: total.toFixed(2),
			jsonCart: checkDeleted,
		});

		this.props.setMiniCartProductChanged("yes");
	}

	componentDidMount() {
		if (!window.localStorage.getItem("cart")) return;

		const cart = window.localStorage.getItem("cart");
		let jsonCart = JSON.parse(cart);

		this.setState({
			jsonCart: JSON.parse(JSON.stringify(jsonCart)),
		});
		this.checkOut();

		this.props.setMiniCartProductChanged("no");
	}

	componentDidUpdate() {
		if (!window.localStorage.getItem("cart")) return;

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
		const { jsonCart, currencySymbol, total } = this.state;
		return (
			<MiniCartWraper>
				<MiniCartTitle>
					My bag, <span>{jsonCart.length}</span>
					<span> items</span>
				</MiniCartTitle>

				<MiniCartListWrapper>
					<ul>{this.createCartMiniList(jsonCart)}</ul>
				</MiniCartListWrapper>

				<Summary>
					<h4>Total</h4>
					<PriceSummary>
						<span>
							{currencySymbol}
							{total}
						</span>
					</PriceSummary>
				</Summary>

				<MiniCartButtons>
					<button
						onClick={() => {
							this.props.hideCartMini();
							this.props.setSavedHref("/cart");
						}}
						id="view-bag">
						<NavLink to="/cart">View bag</NavLink>
					</button>

					<button onClick={() => this.checkOut()} id="check-out">
						Check out
					</button>
				</MiniCartButtons>
			</MiniCartWraper>
		);
	}
}

export default withRouter(CartMini);
