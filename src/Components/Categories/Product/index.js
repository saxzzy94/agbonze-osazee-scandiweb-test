import React from "react";
import { connect } from "react-redux";
import ProductImages from "./ProductImages";
import ProductInf from "./ProductInf";
import { ProductItems } from "../../../styles/products/Products.styled";
import { Container } from "../../../styles/Common.styled";
import { getProduct } from "../../../redux/actions/actions";
class Product extends React.PureComponent {
	constructor(props) {
		super(props);
		this.descrRef = React.createRef();
		this.state = {
			product: "",
			gallery: "",
			prices: "",
			instok: "",
			attributes: "",
			attributes_1: "",
			productAdded: "no",
		};
	}

	async componentDidMount() {
		const { getProduct } = this.props;
		await getProduct(this.props.match.params.id);
	}

	componentWillUnmount() {
		this.props.setDefaultAttributes();
	}

	render() {
		const {
			changeAttributes,
			addToCart,
			attributeOrders,
			changeAttributeOrders,
			product,
			currencyNumber,
			currencySymbol,
		} = this.props;

		return (
			Object.keys(product).length > 0 && (
				<Container>
					<ProductItems>
						<ProductImages
							gallery={product.gallery}
							currentProduct={product.id}
							savedProduct={this.props.match.params.id}
						/>

						<ProductInf
							product={product}
							changeAttributes={changeAttributes}
							addToCart={addToCart}
							attributeOrders={attributeOrders}
							changeAttributeOrders={changeAttributeOrders}
							currencyNumber={currencyNumber}
							currencySymbol={currencySymbol}
						/>
					</ProductItems>
				</Container>
			)
		);
	}
}
const mapStateToProps = (state) => ({ product: state.product.product });
export default connect(mapStateToProps, { getProduct })(Product);
