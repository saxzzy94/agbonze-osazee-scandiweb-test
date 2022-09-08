import { AttributeName } from "../../styles/Attibute.styled";

function returnAttributes(arr) {
	const { attributes } = this.props.product;
	return (
		arr &&
		arr.map((item, index) => (
			<div key={item.id} className="attrWrapper">
				<AttributeName>
					{this.creatAttributeNameList(attributes)[index]}
				</AttributeName>
				{this.setAttributes(index)}
			</div>
		))
	);
}

export default returnAttributes;
