import React from "react";
import { DEFAULT } from "../Utils/Constants";
import callFunctions from "../Utils/AttrButtonsUtils/CallFunctions";
import addAttrToCart from "../Utils/AttrButtonsUtils/AddAttrToCart";
import createButtons from "../Utils/AttrButtonsUtils/CreateButtons";
import { AttributeContainer } from "../styles/Attibute.styled";

class ProductAttrButtons extends React.PureComponent {
	constructor(props) {
		super(props);
		this.descrRef = React.createRef();
		this.state = {
			attributes: "",
			activeAttribute: "",
			defaultActiveAttribute: "",
		};
	}

	markAttribute(value) {
		this.setState({
			activeAttribute: value,
			defaultActiveAttribute: 1,
		});
	}

	changeAttributeOrders = (order, index) =>
		this.changeAttributeOrders.call(this, order, index);

	addAttrToCart = (attr, value, order, index) =>
		addAttrToCart.call(this, attr, value, order, index);

	callFunctions = (attrName, value, order, index) =>
		callFunctions.call(this, attrName, value, order, index)

	createButtons = (btnStyle, order) =>
		createButtons.call(this, btnStyle, order);

	findSavedActiveAttribute() {
		const { attrs, attrNames } = this.props.savedState;
		if (this.props.cartProduct) {
			if (!window.localStorage.getItem("cart")) return;
			if (attrs === DEFAULT) return;

			const attrName = attrNames[this.props.order];
			const attrIndex = attrs.findIndex((item) =>
				JSON.stringify(item).includes(attrName.toLowerCase())
			);
			if (attrIndex === -1) return;
			const choosedAttrValue = Object.values(attrs[attrIndex])[0];

			this.setState({
				activeAttribute: choosedAttrValue,
			});
		}
	}

	componentDidMount() {
		this.findSavedActiveAttribute();
	}

	render() {
		return (
			<AttributeContainer>
				{this.createButtons(this.props.btnStyle, this.props.order)}
			</AttributeContainer>
		);
	}
}

export default ProductAttrButtons;
