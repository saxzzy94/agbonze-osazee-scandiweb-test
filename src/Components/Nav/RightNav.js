import React from "react";
import { NavLink } from "react-router-dom";
import linkOff from "../../Utils/NavUtils/LinkOff";
import creatCurrencyButtons from "../../Utils/NavUtils/CreatCurrencyButtons";
import showCurrencySymbol from "../../Utils/NavUtils/ShowCurrencySymbol";
import arrowDown from "../../Assets/arrow-down.svg";
import cart from "../../Assets/empty-cart.png";

import {
	CartIcon,
	Currency,
	CurrencyPicker,
	NavWraper,
} from "../../styles/Nav.styled";
class RightNav extends React.PureComponent {
	linkOff = (event) => linkOff.call(this, event);

	showCurrencySymbol = (index) => showCurrencySymbol.call(this, index);

	creatCurrencyButtons = () => creatCurrencyButtons.call(this);

	render() {
		const { category, showCartMini, displayCountCart, countCart } = this.props;
		return (
			<NavWraper>
				<Currency>{this.props.currencySymbol}</Currency>

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

export default RightNav;
