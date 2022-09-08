import React from "react";
import { Popup, PopupImg } from "../styles/Popup.styled";;

class PopUp extends React.PureComponent {
	constructor(props) {
		super(props);
		this.popUpImg = React.createRef();
		
	}

	closeBigImage(event) {
		if (
			this.popUpImg.current &&
			!this.popUpImg.current.contains(event.target)
		) {
			this.props.setBigImage("");
		}
	}

	creatInnerPopUp() {
		if (this.props.inner === "img") {
			return <PopupImg ref={this.popUpImg} src={this.props.img} alt="#" />;
		} else return "";
	}

	render() {
		return (
			<Popup
				onClick={(event) => {
					this.closeBigImage(event);
				}}
				style={
					this.props.bigImage === "main"
						? { display: "block" }
						: { display: "none" }
				}>
				{this.creatInnerPopUp()}
			</Popup>
		);
	}
}

export default PopUp;
