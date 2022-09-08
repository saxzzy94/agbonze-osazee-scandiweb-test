import { NavLink } from "react-router-dom";

function creatGallery() {
	const { gallery, name: id } = this.state.jsonCart;

	return (
		gallery &&
		gallery.map((item, index, array) =>
			array.length === 1 ? (
				<li key={index} style={{ display: "block", minWidth: "140px" }}>
					<NavLink
						onClick={() => this.props.setCurrentProduct(id)}
						to={"/product/" + id}>
						<img
							src={item}
							alt={id}
							style={{ width: "100%", backgroundColor: "rgb(226, 220, 220) " }}
						/>
					</NavLink>
				</li>
			) : (
				<li
					key={index}
					style={
						index === this.state.imgStatus
							? { display: "block" }
							: { display: "none" }
					}>
					<NavLink
						onClick={() => this.props.setCurrentProduct(id)}
						to={"/product/" + id}>
						<img
							style={{ width: "100%", backgroundColor: "rgb(226, 220, 220) " }}
							src={item}
							alt={id}
						/>
					</NavLink>
				</li>
			)
		)
	);
}

export default creatGallery;
