import React from "react";
import { NavLink } from "react-router-dom";
import OverallData from "../../Context";
import creatAttributeOrdersList from "../../Utils/CreatAttributeOrdersList";
import creatAttributeNameList from "../../Utils/CreatAttributeNameList";
import {
	ProductAmount,
	ProductDescription,
	ProductDetails,
	ProductImg,
	ProductPrice,
	ProductTitle,
} from "../../styles/products/Products.styled";
import { CartButton } from "../../styles/Common.styled";
import cart from "../../Images/white-cart.png";

class ProductCard extends React.PureComponent {
	creatAttributeNameList = (arg) => creatAttributeNameList.call(this, arg);

	creatAttributeOrdersList = (arg) => creatAttributeOrdersList.call(this, arg);

	render() {
		const {
			id,
			setCurrentProduct,
			gallery,
			item,
			prices,
			addToCart,
			currentCategoryData,
			attributes,
		} = this.props;

		return (
			<>
				<NavLink to={"/product/" + id}>
					<ProductImg
						onClick={() => setCurrentProduct(id)}
						src={gallery[0] || gallery}
						alt="#"
					/>
				</NavLink>

				<ProductDetails>
					<ProductTitle>
						{item.brand} <span>{item.name}</span>
					</ProductTitle>

					<ProductPrice>
						<span>{this.context.currencySimbol}</span>
						<ProductAmount>
							{prices[this.context.currencyNumber].amount}
						</ProductAmount>
					</ProductPrice>
				</ProductDetails>

				<div>
					<CartButton
						onClick={() => {
							addToCart(
								item.inStock,
								id,
								this.creatAttributeNameList(currentCategoryData.attributes),
								this.creatAttributeOrdersList(currentCategoryData.attributes),
								attributes,
								attributes[0] ? attributes[0].items : "",
								prices.map((item) => item.amount),
								gallery,
								item.name,
								item.brand
							);
						}}
						inStock={item.inStock}
						disabled={item.inStock ? false : true}>
						<span>
							<img src={cart} alt="cart" />
						</span>
					</CartButton>
				</div>
			</>
		);
	}
}

ProductCard.contextType = OverallData;

export default ProductCard;
