import React from "react";
import PopUp from "../../../Elements/PopUp";
import creatGallery from "../../../Utils/ProdUtils/CreatGallery";
import {
	GalleryList,
	ImgProduct,
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
			<div style={{ display: "flex" }}>
				<GalleryList>{this.creatGallery()}</GalleryList>

				<ImgProduct
					style={
						bigImage === "main" ? { display: "none" } : { display: "block" }
					}>
					<img
						onClick={() => this.setBigImage("main")}
						src={gallery[imageIndex]}
						alt="#"
					/>
				</ImgProduct>

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
