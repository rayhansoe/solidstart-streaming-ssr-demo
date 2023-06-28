import NavItem from "./NavItem";

const NavMenu = () => {
	return (
		<ul class='flex items-center gap-6'>
			<li>
				<NavItem path='/'>Home</NavItem>
			</li>
			<li>
				<NavItem path='/cart'>Cart</NavItem>
			</li>
			<li>
				<NavItem path='/profile'>Profile</NavItem>
			</li>
		</ul>
	);
};
export default NavMenu;
