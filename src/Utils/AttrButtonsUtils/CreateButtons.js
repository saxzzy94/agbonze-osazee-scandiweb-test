import { AttributeBtn, AttributeValue } from "../../styles/Attibute.styled";
import { COLOR } from "../Constants";

function createButtons(btnStyle, order) {
	const { attributes } = this.props.savedState;
	const attrs = JSON.parse(JSON.stringify(attributes[order].items));
	const attrName = JSON.parse(JSON.stringify(attributes[order].id));

	const { activeAttribute } = this.state;
	return (
		attrs &&
		attrs.map((item, index, array) => (
			<AttributeBtn
				id={index}
				key={index}
				value={item.value}
				btnStyle={btnStyle}
				index={index}
				items={item}
				array={array}
				active={activeAttribute}
				onClick={() => {
					this.markAttribute(item.value);
					this.callFunctions(attrName, item.value, order, index);
				}}>
				{btnStyle !== "Color" ? item.value : ""}
				<AttributeValue>
					{btnStyle === COLOR
						? item.id
						: this.props.cartProduct
						? attrName
						: item.id}
				</AttributeValue>
			</AttributeBtn>
		))
	);
}

export default createButtons;
