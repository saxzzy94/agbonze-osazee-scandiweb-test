import React from "react";
import { withRouter } from "react-router-dom";
import { getCategory } from "../redux/actions/actions";
import { connect } from "react-redux";
import Category from "../Components/Categories/Category";
class LandingPage extends React.PureComponent {
	// eslint-disable-next-line
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.changeStartPage("no");
	}

	componentWillUnmount() {
		this.props.changeStartPage("no");
	}

	render() {
		const {
			currentCategory,
			categoryChanged,
			setDefaultCategoryChanged,
			startPage,
			changeStartPage,
			setCurrentProduct,
			addToCart,
			match,
		} = this.props;
		return (
			<Category
				match={match}
				currentCategory={currentCategory}
				categoryChanged={categoryChanged}
				setDefaultCategoryChanged={setDefaultCategoryChanged}
				startPage={startPage}
				changeStartPage={changeStartPage}
				setCurrentProduct={setCurrentProduct}
				addToCart={addToCart}
			/>
		);
	}
}
const mapStateToProps = (state) => ({
	category: state.category.category,
	products: state.category.result,
});
export default connect(mapStateToProps, { getCategory })(
	withRouter(LandingPage)
);
