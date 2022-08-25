import React from "react";
import { NavLink } from "react-router-dom";
import OverallData from "../../Context";
import linkOff from "./NavUtils/LinkOff";
import creatCurrencyButtons from "./NavUtils/CreatCurrencyButtons";
import showCurrencySimbol from "./NavUtils/ShowCurrencySimbol";
import currencyImg from "../../Images/currency.svg";
import arrowDown from "../../Images/arrow-down.svg";
import cart from "../../Images/empty-cart.png";

import {
	CartIcon,
	Currency,
	CurrencyPicker,
	NavWraper,
} from "../../styles/Nav.styled";
class RightNav extends React.PureComponent {
	constructor(props) {
		// eslint-disable-line
		super(props);
	}

	linkOff = (event) => linkOff.call(this, event);

	showCurrencySimbol = (index) => showCurrencySimbol.call(this, index);

	creatCurrencyButtons = () => creatCurrencyButtons.call(this);

	render() {
		const { category, showCartMini, displayCountCart, countCart } = this.props;
		return (
			<NavWraper>
				<Currency>
					<img src={currencyImg} alt="currency" />
				</Currency>

				<CurrencyPicker>
					<i>
						<img src={arrowDown} alt="arrow-down" />
					</i>
					<ul>{this.creatCurrencyButtons()}</ul>
				</CurrencyPicker>

				<CartIcon
					onClick={() => {
						showCartMini();
					}}>
					<span
						style={
							displayCountCart === "yes"
								? { display: "flex" }
								: { display: "none" }
						}>
						<img src={cart} alt="arrow-down" />
						{countCart}
					</span>

					<NavLink
						onClick={(event) => this.linkOff(event)}
						to={"/fake-cart/" + category}>
						<img src={cart} alt="cart" />
					</NavLink>
				</CartIcon>
			</NavWraper>
		);
	}
}

RightNav.contextType = OverallData;

export default RightNav;
