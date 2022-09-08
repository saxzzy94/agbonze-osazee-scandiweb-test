import React from "react";
import { connect } from "react-redux";
import imgLogo from "../../Assets/a-logo.png";
import CartMini from "../UserCart/CartMini/CartMini";
import NavCategories from "./NavCategories";
import {
	Backdrop,
	Logo,
	NavContainer,
	NavWraper,
} from "../../styles/Nav.styled";
import { Container } from "../../styles/Common.styled";
import { getCategoryList, getCurrencies } from "../../redux/actions/actions";
import RightNav from "./RightNav";
class Nav extends React.PureComponent {
	constructor(props) {
		super(props);
		this.miniCartRef = React.createRef();

		this.state = {
			open: false,
			categoryList: [],
			category: "",
		};
		this.markActive = this.markActive.bind(this);
		this.showCartMini = this.showCartMini.bind(this);
	}

	showCartMini() {
		this.setState({
			open: !this.state.open,
		});
	}

	markActive(category) {
		this.setState({
			category: category,
		});
	}
	async componentDidMount() {
		await this.props.getCategoryList();

		const unique = Array.from(
			new Set(this.props.categoryList.map(JSON.stringify))
		).map(JSON.parse);
		const currency = await getCurrencies();
		this.setState({
			categoryList: unique,
			currencies: currency,
		});
	}

	async componentDidUpdate() {
		const body = document.querySelector("body");
		if (this.state.open) {
			body.style.overflowY = "hidden";
		} else {
			body.style.overflowY = "scroll";
		}
	}

	render() {
		const {
			changeCurrentCategory,
			savedCategory,
			changeCurrency,
			countCart,
			displayCountCart,
			savedHref,
			miniCartChanged,
			setSavedHref,
			miniCartProductChanged,
			setMiniCartProductChanged,
			currencySymbol,
			currencyNumber,
		} = this.props;
		return (
			<NavContainer>
				<Container>
					<NavWraper>
						<NavCategories
							category={this.state.category}
							markActive={this.markActive}
							changeCurrentCategory={changeCurrentCategory}
							savedCategory={savedCategory}
							categoryList={this.state.categoryList}
						/>
						<Logo>
							<img src={imgLogo} alt="logo" />
						</Logo>
						<RightNav
							changeCurrency={changeCurrency}
							countCart={countCart}
							displayCountCart={displayCountCart}
							savedHref={savedHref}
							category={this.state.category}
							showCartMini={this.showCartMini}
							currencies={this.state.currencies}
							currencySymbol={currencySymbol}
							currencyNumber={currencyNumber}
						/>
					</NavWraper>
				</Container>

				<Backdrop
					onClick={() => this.setState({ open: false })}
					open={this.state.open}></Backdrop>
				{this.state.open && (
					<CartMini
						hideCartMini={this.showCartMini}
						category={this.state.category}
						miniCartChanged={miniCartChanged}
						setSavedHref={setSavedHref}
						savedHref={savedHref}
						miniCartProductChanged={miniCartProductChanged}
						setMiniCartProductChanged={setMiniCartProductChanged}
						currencySymbol={currencySymbol}
						currencyNumber={currencyNumber}
					/>
				)}
			</NavContainer>
		);
	}
}
const mapStateToProps = (state) => ({
	categoryList: state.categoryList.categoryList,
	currencies: state.currencies.currencies,
});
export default connect(mapStateToProps, { getCategoryList })(Nav);
