import React from "react";
import checkForInStock from "../../../redux/actions/CheckForInStock";
import { CountButtons } from "../../../styles/Cart.styled";
import { GalleryWrapper } from "../../../styles/products/Products.styled";
import creatGallery from "../../../Utils/CartUtils/CreatGallery";
import slideRight from "../../../Assets/slider-right.png";
import slideLeft from "../../../Assets/slider-left.png";

class CartProductImage extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			jsonCart: "",
			gallery: "",
			imgStatus: 0,
			productAmount: "",
		};
	}

	creatGallery = () => creatGallery.call(this);

	showAnotherImage(dir) {
		const { gallery, imgStatus } = this.state;

		if (dir === "next" && imgStatus < gallery.length - 1) {
			const newImgStatus = imgStatus + 1;
			this.setState({
				imgStatus: newImgStatus,
			});
		} else if (dir === "prev" && imgStatus > 0) {
			const newImgStatus = imgStatus - 1;
			this.setState({
				imgStatus: newImgStatus,
			});
		}
	}

	async changeProductAmount(sign) {
		const { id, name, setMiniCartProductChanged } = this.props;

		if (!window.localStorage.getItem("cart")) return;

		const cart = window.localStorage.getItem("cart");
		let jsonCart = JSON.parse(cart);
		if (jsonCart.length === 0) return;
		const x = jsonCart.findIndex((item) => item.uniqueId === id);
		let productAmount = jsonCart[x].amount;

		if (sign === "plus") {
			const inStock = await JSON.parse(
				JSON.stringify(await checkForInStock(name))
			);

			if (inStock.product.inStock !== true) return "";
			else {
				const newAmount = productAmount + 1;
				this.setState({
					productAmount: newAmount,
				});
				jsonCart[x].amount = newAmount;
				window.localStorage.setItem("cart", JSON.stringify(jsonCart));
				setMiniCartProductChanged("yes");
			}
		} else if (sign === "minus" && productAmount > 0) {
			const newAmount = productAmount - 1;
			this.setState({
				productAmount: newAmount,
			});
			jsonCart[x].amount = newAmount;
			window.localStorage.setItem("cart", JSON.stringify(jsonCart));
			setMiniCartProductChanged("yes");
		}
	}

	componentDidMount() {
		if (!window.localStorage.getItem("cart")) return;

		const cart = window.localStorage.getItem("cart");
		const jsonCart = JSON.parse(cart);
		const x = jsonCart.findIndex((item) => item.uniqueId === this.props.id);
		const product = JSON.parse(JSON.stringify(jsonCart[x]));
		const gallery = JSON.parse(cart)[x].gallery;

		this.setState({
			jsonCart: JSON.parse(JSON.stringify(product)),
			gallery: gallery,
			productAmount: product.amount,
		});
	}

	render() {
		const { id } = this.props;
		const { productAmount, gallery } = this.state;

		return (
			<div style={{ display: "flex" }}>
				<CountButtons>
					<button onClick={() => this.changeProductAmount("plus", id)}>
						&#43;
					</button>
					<span>{productAmount}</span>
					<button onClick={() => this.changeProductAmount("minus", id)}>
						&#8722;
					</button>
				</CountButtons>

				<GalleryWrapper>
					{this.creatGallery()}
					<button
						onClick={() => this.showAnotherImage("prev")}
						className={gallery.length > 1 ? "sliderDisplayLeft" : "imgHidden"}
						style={{
							backgroundImage: `url(${slideLeft})`,
						}}></button>

					<button
						onClick={() => this.showAnotherImage("next")}
						className={gallery.length > 1 ? "sliderDisplayRight" : "imgHidden"}
						style={{
							backgroundImage: `url(${slideRight})`,
						}}></button>
				</GalleryWrapper>
			</div>
		);
	}
}

export default CartProductImage;
