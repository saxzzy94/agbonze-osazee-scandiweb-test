import React from "react";
import OverallData from "../../../Context";
import { CartWrapper } from "../../../styles/Cart.styled";
import { Container } from "../../../styles/Common.styled";
import * as styles from "./Cart.module.css";
import CartProduct from "./CartProduct";
class Cart extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			jsonCart: "",
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
				/>
			))
		);
	}

	componentDidMount() {
		if (!window.localStorage.getItem("cart")) return;

		const cart = window.localStorage.getItem("cart");
		const jsonCart = JSON.parse(cart);

		this.setState({
			jsonCart: JSON.parse(JSON.stringify(jsonCart)),
		});
	}

	render() {
		return (
			<CartWrapper>
				<Container>
					<h3 className={styles.cartTitle}>Cart</h3>

					<ul className={styles.productList}>{this.createCartList()}</ul>
				</Container>
			</CartWrapper>
		);
	}
}

Cart.contextType = OverallData;

export default Cart;
