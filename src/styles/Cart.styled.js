import styled from "styled-components";

export const CartWrapper = styled.div`
	margin-top: 80px;
	color: #1d1f22;
	padding-bottom: 40px;
	width: 75%;
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

export const CartTitle = styled.div`
	font-weight: bold;
	font-size: 16px;
	margin-bottom: 25px;
	padding: 0 15px;
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
