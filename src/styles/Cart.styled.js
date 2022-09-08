import styled from "styled-components";

export const CartWrapper = styled.div`
	margin-top: 80px;
	color: #1d1f22;
	padding-bottom: 40px;
`;

export const MiniCartWraper = styled.div`
	position: relative;
	width: 355px;
	display: flex;
	flex-direction: column;
	color: #1d1f22;
	background-color: #fff;
	padding: 15px 0;
	padding-bottom: 100px;
	position: absolute;
	left: 67%;
`;
export const MiniCartItems = styled.li`
	display: flex;
	justify-content: space-between;
	margin-bottom: 40px;
`;
export const MiniCartTitle = styled.div`
	font-weight: bold;
	font-size: 16px;
	margin-bottom: 25px;
	padding: 0 15px;
`;

export const CartTitle = styled.h3`
	font-weight: bold;
	font-size: 32px;
	text-transform: uppercase;
	margin-bottom: 60px;
`;

export const MiniCartListWrapper = styled.div`
	max-height: 68vh;
	overflow-y: auto;
	padding: 0 15px;
`;

export const Summary = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 15px;
	padding-top: 20px;
`;
export const PriceSummary = styled.div`
	font-weight: bold;
	font-size: 16px;
	margin-bottom: 40px;
`;
export const MiniCartButtons = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 15px;

	button {
		width: 140px;
		height: 45px;
		font-weight: 600;
		font-size: 14px;
		text-transform: uppercase;
	}
	#view-bag {
		background-color: #ffffff;
		border: 1px solid #1d1f22;
		cursor: pointer;
		a {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			text-decoration: none;
			color: #1d1f22;
		}
	}
	#check-out {
		background-color: #5ece7b;
		color: #fff;
		border: none;
		cursor: pointer;
	}
`;
export const ProductInfo = styled.div`
	width: 75%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	h4 {
		font-weight: 300;
		font-size: 16px;
		line-height: 26px;
		margin-bottom: 10px;
	}
`;
export const CartItemTitles = styled.div`
	margin-bottom: 15px;

	h4 {
		font-weight: 600;
		font-size: 20px;
	}

	span {
		font-weight: normal;
		font-size: 20px;
	}
`;
export const CountButtons = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-right: 10px;

	button {
		width: 25px;
		height: 25px;
		font-weight: 600;
		font-family: Source Sans Pro;
		font-size: 16px;
		background-color: #fff;
		border: 1px solid #1d1f22;
		cursor: pointer;
	}

	span {
		font-weight: 500;
		font-size: 16px;
	}
`;

export const CartLine = styled.div`
	border-bottom: 1px solid #e5e5e5;
	margin-bottom: 20px;
`;
export const CartProductWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	color: #26292e;
	margin-bottom: 20px;
`;
export const CartProductInfo = styled.div`
	display: flex;
	flex-direction: column;
`;
