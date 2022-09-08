import styled from "styled-components";

export const AttributeContainer = styled.div`
	width: 315px;
	max-width: 100%;
	display: flex;
	gap: 5px;
	margin-bottom: 40px;
`;

export const AttributeValue = styled.div`
	display: block;
	position: absolute;
	padding: 3px;
	border: 1px solid #1d1f22;
	border-radius: 5px;
	top: 50px;
	color: #1d1f22;
	display: none;
`;

export const AttributeName = styled.h4`
	font-weight: bold;
	font-size: 18px;
	text-transform: uppercase;
	margin-bottom: 5px;
`;

export const AttributeBtn = styled.button`
	height: 45px;
	font-family: Source Sans Pro;
	font-size: 16px;
	display: flex;
	color: ${({ items, active }) =>
		active === items.value ? `#fff;` : `#1d1f22;`};
	align-items: center;
	justify-content: center;
	letter-spacing: 0.05em;
	background-color: ${({ btnStyle, items, active }) =>
		btnStyle === "Color"
			? items.value
			: active === items.value
			? "#1d1f22"
			: "#fff"};
	border: ${({ btnStyle, items, active }) =>
		btnStyle === "Color" && active === items.value
			? "1px solid red"
			: btnStyle !== "Color" && active !== items.value
			? "1px solid #1d1f22"
			: btnStyle === "Color" && active !== items.value && "1px solid #fff"};
	cursor: pointer;
	position: relative;
	width: 63px;
`;

export const AttributesWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
export const AttributesType = styled.div`
	display: flex;
	margin-bottom: 10px;
`;
export const CartAttributeBtn = styled.div`
	button {
		width: auto;
		padding: 0 5px;
		height: 25px;
		font-family: Source Sans Pro;
		font-size: 14px;
	}
	.first-button {
		background-color: #ffffff;
		margin-right: 10px;
		border: 1px solid #1d1f22;
		position: relative;
	}

	.choosed-button {
		color: #a6a6a6;
		background-color: rgb(245, 240, 240);
		border: 1px solid #a6a6a6;
		margin-right: 10px;
	}
`;
export const BtnPrompt = styled.span`
	display: block;
	width: 200px;
	z-index: 5;
	position: absolute;
	color: rgb(187, 45, 29);
	top: -20px;
	left: 30px;
	background-color: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	padding: 5px;
	border-radius: 10px;
`;
