import React from "react";
import styled from "styled-components";

import Logo from "./Logo";

const StyledNavWrapper = styled.div`
	width: 100vw;
	height: 50px;
	background-color: black;
	color: white;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export default function NavWrapper() {
	return (
		<StyledNavWrapper>
			<Logo />
			{/* <NavbarLink />
			<NavbarLink />
			<NavbarLink />
			<NavbarLink />
			<NavbarLink />
			<NavbarLink />
			<NavbarLink />
			<NavbarFinder />
			<NavbarShop />  */}
		</StyledNavWrapper>
	);
}
