import { NavLink } from "react-router-dom";
import { NavItem } from "../../styles/Nav.styled";

function createLinksList() {
	const { markActive, changeCurrentCategory } =
		this.props;
	return (
		this.context.categoriesList &&
		this.context.categoriesList.map(
			(
				item // eslint-disable-next-line
			) => (
				<NavItem
					onClick={() => markActive(item.category)}
					
					key={item.category}>
					<NavLink
						onClick={() => changeCurrentCategory(item.category)}
						to={"/categ/" + item.category}>
						{item.category}
					</NavLink>
				</NavItem>
			)
		)
	);
}

export default createLinksList;
