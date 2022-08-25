import styled from "styled-components";

export const Title = styled.h3`
	font-weight: normal;
	font-size: 42px;
	color: #1d1f22;
	margin-bottom: 90px;
	text-transform: capitalize;
`;

export const Container = styled.div`
	width: 80%;
	max-width: 1280px;
	margin: 0 auto;
`;
export const CartButton = styled.button`
	width: 50px;
	height: 50px;
	border: 0px solid #31a550;
	border-radius: 50%;
	background-color: ${({ inStock }) => (inStock ? "#5ece7b" : "crimson")};
	position: absolute;
	top: 70%;
	left: 80%;
	display: none;
	cursor: ${({ inStock }) => (inStock ? "cell" : "not-allowed")};
`;
