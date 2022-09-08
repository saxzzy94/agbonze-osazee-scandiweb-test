import ProductAttrButtons from "../../Elements/ProductAttrButtons";


function setAttributes(order) {
	const { attributes } = this.state.jsonCart;
	if (!attributes || attributes.length < order + 1) return "";
	return (
		<div style={{ maxWidth: "290px" }}>
			<ProductAttrButtons
				cartProduct={"yes"}
				savedState={JSON.parse(JSON.stringify(this.state.jsonCart))}
				btnStyle={attributes[order].id}
				order={order}
				id={this.props.id}
			/>
		</div>
	);
}

export default setAttributes;
