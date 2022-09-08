import { CartAttributeBtn } from "../../styles/Attibute.styled";

function showChosedAttribute() {
	const { attrNames, attributes_1 } = this.state;
	if (attrNames === "") return "";
	else
		return (
			<CartAttributeBtn>
				{attributes_1.map((item, index) => (
					<button className="first-button" key={index}>
						<span>{item.value}</span>
					</button>
				))}
			</CartAttributeBtn>
		);
}

export default showChosedAttribute;
