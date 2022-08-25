import React from "react";
import * as styles from "./Product.module.css";
import OverallData from "../../../Context";
import creatAttributeNameList from "../../../Utils/CreatAttributeNameList";
import creatAttributeOrdersList from "../../../Utils/CreatAttributeOrdersList";
import setAttributes from "./ProdUtils/SetAttributes";
import returnAttributes from "./ProdUtils/ReturnAttributes";
import {
	AddToCart,
	ProductContainer,
	ProductDescription,
	ProductPrice,
	ProductTitle,
} from "../../../styles/products/Products.styled";
import { CartButton } from "../../../styles/Common.styled";
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
		const { savedPrices,addToCart, attributeOrders, } =
			this.props;
		const { brand, name, attributes, id, instock, prices, gallery} = this.props.product;
		return (
			<>
				<ProductContainer>
					<ProductTitle>{brand}</ProductTitle>
					<span>{name}</span>
					
					{attributes ? this.returnAttributes(attributes) : ""}

					<h4 className={styles.priceTitle}>Price:</h4>

					{/* <ProductPrice>
						<span className={styles.currencySimbol}>
							{this.context.currencySimbol}
						</span>
						<span className={styles.currencyAmount}>
							{savedPrices[this.context.currencyNumber]}
						</span>
					</ProductPrice> */}

					<AddToCart
						onClick={() => {
							addToCart(
								instock,
								id,
								this.creatAttributeNameList(attributes),
								attributeOrders,
								attributes,
								attributes,
								savedPrices,
								gallery,
								name,
								brand
							);
						}}
						instock={instock} >
						{instock ?<span >Add to cart</span>:<span>Out of stock</span> }
						
					</AddToCart>

					<ProductDescription ref={this.descrRef} className={styles.prodDescription}>{}</ProductDescription>
				</ProductContainer>
			</>
		);
	}
}

export default ProductDetails;
