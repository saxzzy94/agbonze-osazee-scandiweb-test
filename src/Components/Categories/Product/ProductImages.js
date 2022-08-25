import React from "react";
import * as styles from "./Product.module.css";
import PopUp from "../../../Elements/PopUp";
import creatGallery from "./ProdUtils/CreatGallery";
import {
	GalleryList,
	ProductImg,
} from "../../../styles/products/Products.styled";

class ProductImages extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			bigImage: "",
			imageIndex: 0,
		};
		this.setBigImage = this.setBigImage.bind(this);
	}

	setBigImage(arg) {
		this.setState({
			bigImage: arg,
		});
	}

	changeMainImage(index) {
		this.setState({
			imageIndex: index,
		});
	}

	creatGallery = () => creatGallery.call(this);

	render() {
		const { bigImage, imageIndex } = this.state;
		const { gallery } = this.props;

		return (
			<div>
				<GalleryList>{this.creatGallery()}</GalleryList>

				<ProductImg
					style={
						bigImage === "main" ? { display: "none" } : { display: "block" }
					}
					onClick={() => this.setBigImage("main")}
					src={gallery[imageIndex]}
					alt="#"
				/>

				<PopUp
					inner={"img"}
					img={gallery[imageIndex]}
					style={
						bigImage === "main" ? { display: "block" } : { display: "none" }
					}
					bigImage={bigImage}
					setBigImage={this.setBigImage}
				/>
			</div>
		);
	}
}

export default ProductImages;
