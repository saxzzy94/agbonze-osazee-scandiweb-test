import styled from "styled-components";

export const ProductContainer = styled.ul`
	display: flex;
	flex-direction: column;
	margin: 0;
`;
export const CategoryContainer = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	color: #1d1f22;
`;
export const CategoryItems = styled.li`
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

export const ProductItems = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 80px;
	color: #1d1f22;
`;

export const ProductImg = styled.img`
	width: 100%;
	background-color: rgb(226, 220, 220);
	min-width: 100%;
	margin-left: 0;
	margin-right: 0;
	margin-bottom: 20px;
	display: flex;
	width: 90%;
	justify-content: center;
`;

export const ImgProduct = styled.div`
	margin-left: 40px;
	width: 610px;
	display: flex;
	align-items: flex-start;
	img {
		width: 100%;
		cursor: zoom-in;
	}
`;
export const ProductDetails = styled.div`
	margin-top: auto;
	h3 {
		font-weight: 300;
		font-size: 18px;
		margin-bottom: 10px;
	}
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

export const GalleryWrapper = styled.div`
	width: 140px;
	position: relative;
	display: flex;
	align-items: center;
	button {
		width: 10px;
		height: 25px;
		padding: 7px;
		position: absolute;
		bottom: 50%;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		background-size: 60% 60%;
		border: 2px solid rgba(255, 255, 255, 0.1);
		border-radius: 3px;
		background-color: rgba(194, 192, 192, 0.5);
	}

	.sliderDisplayLeft {
		right: 84%;
	}

	.sliderDisplayRight {
		right: 3%;
	}
	.sliderDisplayRight:hover {
		border: 2px solid rgba(138, 132, 132, 0.7);
	}

	.sliderDisplayLeft:hover {
		border: 2px solid rgba(138, 132, 132, 0.7);
	}
`;
export const GalleryList = styled.ul`
	display: flex;
	flex-direction: column;
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
	background-color: ${({ inStock }) => (inStock ? "#5ece7b" : "#c8e98c")};
	width: 290px;
	padding: 10px 0;
	border: none;
	cursor: ${({ inStock }) => (inStock ? `cell` : `not-allowed`)};

	&:hover span {
		color: ${({ inStock }) => !inStock && `crimson`};
	}
`;

export const GalleryCartItem = styled.li``;

export const MiniCartProductImage = styled.div`
	width: 105px;
	min-height: 135px;
	display: flex;
	align-items: center;

	img {
		width: 100%;
	}
`;
