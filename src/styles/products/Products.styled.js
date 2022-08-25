import styled from "styled-components";

export const ProductContainer = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	color: #1d1f22;
`;
export const ProductItems = styled.li`
	display: flex;
	flex-direction: column;
	width: 30%;
	min-height: 500px;
	margin-bottom: 130px;
	padding: 10px;
	position: relative;

	&:hover {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

		button {
			display: block;
		}
	}
`;
export const ProductImg = styled.img`
	width: 100%;
	background-color: rgb(226, 220, 220);
	min-width: 100%;
	margin-left: 0;
	margin-right: 0;
	margin-bottom: 20px;
	display: flex;
	justify-content: center;
	width: 90%;
`;
export const ProductDetails = styled.div`
	margin-top: auto;
`;
export const ProductDescription = styled.div`
	margin-top: 20px;
	display: block;
	width: 290px;
	font-size: 16px;
	line-height: 26px;
`;

export const ProductTitle = styled.h3`
	font-weight: 300;
	font-size: 18px;
	margin-bottom: 10px;

	span {
		font-weight: normal;
		font-size: 30px;
		margin-bottom: 45px;
	}
`;
export const ProductSubtitle = styled.span``;

export const ProductPrice = styled.div`
	font-weight: 500;
	font-size: 16px;
	display: flex;
	margin-bottom: 25px;

	span {
		min-height: 23px;
		display: flex;
		align-items: flex-start;
	}
`;

export const ProductAmount = styled.span`
	display: block;
	padding-left: 3px;
`;

const GalleryWrapper = styled.div``;
export const GalleryList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;
export const GalleryItem = styled.li`
	width: 80px;
	margin-bottom: 30px;
	display: flex;
	${(bigImage, index) =>
		bigImage === index &&
		`position: absolute;
	width: 80vw;
	padding: 10%;
	top: 0;
	left: 0;
	background-color: rgba(206, 209, 202, 0.3);
	z-index: 3;`}

	img {
		width: 100%;
		cursor: zoom-in;
	}
`;

export const AddToCart = styled.button`
	position: relative;
	font-weight: 600;
	font-size: 16px;
	color: #fff;
	text-transform: uppercase;
	background-color: ${({ instock }) => (instock ? "#5ece7b" : "#c8e98c")};
	width: 290px;
	padding: 10px 0;
	border: none;
	cursor: ${({ instock }) => (instock ? `cell` : `not-allowed`)};

	&:hover span {
		color: ${({ instock }) => !instock && `crimson`};
	}
`;
