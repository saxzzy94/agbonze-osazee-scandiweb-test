import styled from "styled-components";

export const NavContainer = styled.nav`
	position: relative;
	margin-bottom: 80px;
	z-index: 1;
`;
export const NavWraper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const Logo = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 2.5rem;
	font-weight: 400;
	font-size: 16px;
	line-height: 120%;
	text-transform: uppercase;
	align-items: center;
`;
export const NavItem = styled.li`
	border-bottom: ${({ active }) =>
		active ? "2px solid #5ECE7B" : "2px solid transparent"};
	padding: 25px 0;
	a {
		text-decoration: none;
		font-size: 16px;
		color: ${({ active }) => (active ? "#5ECE7B" : "#1d1f22")};
		align-items: center;
		text-align: center;
		text-transform: uppercase;
		padding: 7px;
		border-radius: 10px;
	}
`;
export const Currency = styled.span`
	display: block;
	font-weight: 500;
	font-size: 18px;
	color: #1d1f22;
	margin-right: 10px;
`;
export const CurrencyPicker = styled.div`
	background-repeat: no-repeat;
	background-position: 50% 50%;
	width: 20px;
	height: 20px;
	margin: 0;
	position: relative;
	margin-right: 10px;
	cursor: pointer;
	z-index: 2;
`;

export const CartIcon = styled.div`
	background-repeat: no-repeat;
	background-position: 50% 50%;
	width: 20px;
	height: 20px;
	position: relative;
	padding-right: 20px;
	cursor: pointer;

	span {
		display: flex;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: #1d1f22;
		position: absolute;
		top: -10px;
		left: 19px;
		color: #fff;
		font-size: 14px;
		justify-content: center;
		align-items: center;
	}
	a {
		display: block;
		width: 20px;
		height: 20px;
		position: absolute;
		left: 10px;
	}
`;

export const Backdrop = styled.div`
	${({ open }) =>
		open
			? `position: fixed;
	width: 100%;
	height: 100vh;
	background-color: rgba(206, 209, 202, 0.3);`
			: `display: none;  `}
`;
