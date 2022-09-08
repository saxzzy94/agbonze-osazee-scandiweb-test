import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Title } from "../../../styles/Common.styled";
import {
	CategoryContainer,
	CategoryItems,
} from "../../../styles/products/Products.styled";
import ProductCard from "./ProductCard";
import { getCategory, getProduct } from "../../../redux/actions/actions";

class Category extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			category: "all",
		};
	}

	createList(data) {
		return (
			data.length > 0 &&
			data.map((item, index) => (
				<CategoryItems key={item.id}>
					<ProductCard
						currentCategoryData={data[index]}
						item={item}
						id={item.id}
						gallery={item.gallery}
						prices={item.prices}
						attributes={item.attributes}
						addToCart={this.props.addToCart}
						setCurrentProduct={this.props.setCurrentProduct}
						currencyNumber={this.props.currencyNumber}
						currencySymbol={this.props.currencySymbol}
					/>
				</CategoryItems>
			))
		);
	}

	async componentDidMount() {
		const { match, getCategory } = this.props;
		await getCategory(match.params.category || "all");
		this.setState({ category: match.params.category });
	}

	async componentDidUpdate(prevProps, prevState) {
		const currentCategory = this.props.match.params?.category;
		const prevCategory = prevProps.match.params?.category;
		if (currentCategory !== prevCategory) {
			this.setState({ category: this.props.match.params.category });
			await this.props.getCategory(currentCategory || "all");
		}
	}

	componentWillUnmount() {
		this.props.setDefaultCategoryChanged();
	}

	render() {
		return (
			<Container>
				<Title>
					{this.props.category === "all" ? "All products" : this.props.category}
				</Title>
				<CategoryContainer>
					{this.createList(this.props.products)}
				</CategoryContainer>
			</Container>
		);
	}
}
const mapStateToProps = (state) => ({
	products: state.category.result,
});

export default connect(mapStateToProps, { getCategory, getProduct })(
	withRouter(Category)
);
