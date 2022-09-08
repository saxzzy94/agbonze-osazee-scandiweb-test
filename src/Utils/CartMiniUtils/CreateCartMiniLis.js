import CartMiniProduct from "../../Components/UserCart/CartMini/CartMiniProduct";

function createCartMiniList(data) {
	return (
		data &&
		data.map((item) => (
			<CartMiniProduct
				key={item.uniqueId}
				id={item.uniqueId}
				name={item.name}
				setMiniCartChanged={this.props.setMiniCartChanged}
				miniCartProductChanged={this.props.miniCartProductChanged}
				setMiniCartProductChanged={this.props.setMiniCartProductChanged}
				currencySymbol={this.props.currencySymbol}
				currencyNumber={this.props.currencyNumber}
			/>
		))
	);
}

export default createCartMiniList;
