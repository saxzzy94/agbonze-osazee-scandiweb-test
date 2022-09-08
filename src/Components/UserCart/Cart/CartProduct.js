import React from "react";
import { CartLine, CartProductWrapper } from "../../../styles/Cart.styled";
import CartProductImage from "./CartProductImage";
import CartProductInf from "./CartProductInf";

class CartProduct extends React.PureComponent {
	// eslint-disable-next-line
	constructor(props) {
		super(props);
	}

	render() {
		const { id, name, setCurrentProduct, setMiniCartProductChanged } =
			this.props;
		return (
			<>
				<CartLine></CartLine>
				<CartProductWrapper>
					<CartProductInf
						id={id}
						currencySymbol={this.props.currencySymbol}
						currencyNumber={this.props.currencyNumber}
					/>

					<CartProductImage
						id={id}
						name={name}
						setCurrentProduct={setCurrentProduct}
						setMiniCartProductChanged={setMiniCartProductChanged}
					/>
				</CartProductWrapper>
			</>
		);
	}
}

export default CartProduct;
