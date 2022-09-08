import React from "react";
import creatAttributeNameList from "../../../Utils/CreatAttributeNameList";
import creatAttributeOrdersList from "../../../Utils/CreatAttributeOrdersList";
import setAttributes from "../../../Utils/ProdUtils/SetAttributes";
import returnAttributes from "../../../Utils/ProdUtils/ReturnAttributes";
import {
	AddToCart,
	ProductContainer,
	ProductDescription,
	ProductPrice,
	ProductTitle,
} from "../../../styles/products/Products.styled";
class ProductDetails extends React.PureComponent {
	constructor(props) {
		super(props);
		this.descrRef = React.createRef();
	}

	setAttributes = (order) => setAttributes.call(this, order);

	returnAttributes = (arr) => returnAttributes.call(this, arr);

	creatAttributeNameList = (arg) => creatAttributeNameList.call(this, arg);

	creatAttributeOrdersList = (arg) => creatAttributeOrdersList.call(this, arg);

	componentDidMount() {
		const { attributeOrders, changeAttributeOrders } = this.props;
		const { attributes, description } = this.props.product;

		this.descrRef.current.innerHTML = description;
		if (attributeOrders === "") {
			const orders = this.creatAttributeOrdersList(attributes);
			changeAttributeOrders(orders);
		}
	}

	componentDidUpdate() {
		const { changeAttributeOrders } = this.props;
		const { attributes, description } = this.props.product;

		this.descrRef.current.innerHTML = description;
		if (this.props.attributeOrders === "") {
			const orders = this.creatAttributeOrdersList(attributes);
			changeAttributeOrders(orders);
		}
	}

	componentWillUnmount() {
		this.props.changeAttributeOrders("");
	}

	render() {
		const { addToCart, attributeOrders } = this.props;
		const { brand, name, attributes, id, inStock, prices, gallery } =
			this.props.product;
		return (
			<>
				<ProductContainer>
					<ProductTitle>{brand}</ProductTitle>
					<span>{name}</span>

					{attributes ? this.returnAttributes(attributes) : ""}

					<h4>Price:</h4>

					<ProductPrice>
						{/* currency symbol */}
						<span>{this.props.currencySymbol}</span>
						<span>{prices[this.props.currencyNumber].amount}</span>
					</ProductPrice>

					<AddToCart
						onClick={() => {
							addToCart(
								inStock,
								id,
								this.creatAttributeNameList(attributes),
								attributeOrders,
								attributes,
								attributes[0] ? attributes[0].items : "",
								prices,
								gallery,
								name,
								brand
							);
						}}
						inStock={inStock}>
						{inStock ? <span>Add to cart</span> : <span>Out of stock</span>}
					</AddToCart>

					<ProductDescription ref={this.descrRef}></ProductDescription>
				</ProductContainer>
			</>
		);
	}
}

export default ProductDetails;
