import React from "react";
import OverallData from "../../Context";
import createLinksList from "./NavUtils/CreateLinksList";
import { NavItem } from "../../styles/Nav.styled";
import { NavLink, withRouter } from "react-router-dom";

class NavCategories extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	createLinksList = () => createLinksList.call(this);

	showMenu() {
		this.setState({
			menu: "visible",
			btnClose: "visible",
			btnShow: "hidden",
		});
	}

	closeMenu(event) {
		if (this.menuRef.current && !this.menuRef.current.contains(event.target)) {
			this.setState({
				menu: "hidden",
				btnClose: "hidden",
				btnShow: "visible",
			});
		}
	}

	render() {
		return (
			<>
				<ul style={{ display: "flex" }}>
					<NavItem
						onClick={() => this.props.markActive("all")}
						active={this.props.location.pathname === "/" ? true : false}>
						<NavLink
							onClick={() => this.props.changeCurrentCategory("all")}
							to={"/"}>
							All
						</NavLink>
					</NavItem>
					{this.props.categoryList.length > 0 &&
						this.props.categoryList.map((item) => (
							<NavItem
								onClick={() => this.props.markActive(item.category)}
								key={item.category}
								active={
									this.props.location.pathname.includes(item.category)
										? true
										: false
								}>
								<NavLink
									onClick={() =>
										this.props.changeCurrentCategory(item.category)
									}
									to={"/category/" + item.category}>
									{item.category}
								</NavLink>
							</NavItem>
						))}
				</ul>
			</>
		);
	}
}

export default withRouter(NavCategories);
