import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Title } from "../../styles/Common.styled";
import {
	ProductContainer,
	ProductItems,
} from "../../styles/products/Products.styled";
import ProductCard from "./ProductCard";
import {getCategory} from '../../redux/actions/actions'

class Category extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			category: "all",
			currentCategoryData: [],
		};
	}

	createList(data) {
		return (
			data.length > 0 &&
			data.map((item, index) => (
				<ProductItems key={item.id}>
					<ProductCard
						currentCategoryData={this.state.currentCategoryData[index]}
						item={item}
						id={item.id}
						gallery={item.gallery}
						prices={item.prices}
						attributes={item.attributes}
						addToCart={this.props.addToCart}
						setCurrentProduct={this.props.setCurrentProduct}
					/>
				</ProductItems>
			))
		);
	}

	async componentDidMount() {
		const { match, getCategory } = this.props;
		console.log(match.params.category);
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

		// const {
		// 	currentCategory,
		// 	categoryChanged,
		// 	setDefaultCategoryChanged,
		// 	getCategory,
		// } = this.props;
		// if (categoryChanged !== "no") {
		// 	const category = currentCategory;
		// 	await getCategory(category);
		// 	this.setState({
		// 		currentCategoryData: resultCategory.category.products,
		// 	});
		// 	setDefaultCategoryChanged();
		// }
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
				<ProductContainer>
					{this.createList(this.props.products)}
				</ProductContainer>
			</Container>
		);
	}
}
const mapStateToProps = (state) => ({
	products: state.category.result,
});

export default connect(mapStateToProps, { getCategory })(withRouter(Category));
