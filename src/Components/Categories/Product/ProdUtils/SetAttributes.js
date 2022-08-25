import * as styles from "../Product.module.css";
import ProductAttrButtons from "../../../../Elements/AttrButtons/ProductAttrButtons";

function setAttributes(order) {
	const { changeAttributes, attributeOrders, changeAttributeOrders } =
		this.props;
	const { attributes } = this.props.product;
	if (attributes.length < order + 1) return "";
	return (
		<div className={styles.attrButtonsWrapper}>
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
