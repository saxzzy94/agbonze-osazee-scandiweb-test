import { COLOR } from "../../../CONST";
import { AttributeValue } from "../../../styles/Attibute.styled";

function createButtons(btnStyle, order) {
	const { attributes } = this.props.savedState;
	const attrs = JSON.parse(JSON.stringify(attributes[order].items));
	const attrName = JSON.parse(JSON.stringify(attributes[order].id));

	return (
		attrs &&
		attrs.map((item, index, array) => (
			<button
				id={index}
				key={index}
				value={item.value}
				className={this.defineButtonClass(btnStyle, index, item)}
				onClick={() => {
					this.markAttribute(item.value);
					this.callFunctions(attrName, item.value, order, index);
				}}
				style={
					btnStyle !== COLOR
						? { width: `calc(95% / ${array.length})` }
						: {
								backgroundColor: item.value,
								width: `calc(95% / ${array.length})`,
						  }
				}>
				{btnStyle !== COLOR ? item.value : ""}
				<AttributeValue>
					{btnStyle === COLOR
						? item.id
						: this.props.cartProduct
						? attrName
						: item.id}
				</AttributeValue>
			</button>
		))
	);
}

export default createButtons;
