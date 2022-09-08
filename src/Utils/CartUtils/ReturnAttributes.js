import { AttributesType } from "../../styles/Attibute.styled";


function returnAttributes(arr) {
	return (
		arr &&
		arr.map((item, index) => (
			<AttributesType key={item.id}>{this.setAttributes(index)}</AttributesType>
		))
	);
}

export default returnAttributes;
