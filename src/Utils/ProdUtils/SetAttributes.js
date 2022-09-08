import ProductAttrButtons from "../../Elements/ProductAttrButtons";

function setAttributes(order) {
	const { changeAttributes, attributeOrders, changeAttributeOrders } =
		this.props;
	const { attributes } = this.props.product;
	if (attributes.length < order + 1) return "";
	return (
		<div style={{ maxWidth: "100%" }}>
			<ProductAttrButtons
				savedState={JSON.parse(JSON.stringify(this.props.product))}
				order={order}
				btnStyle={attributes[order].id}
				changeAttributes={changeAttributes}
				attributeOrders={attributeOrders}
				changeAttributeOrders={changeAttributeOrders}
			/>
		</div>
	);
}

export default setAttributes;
