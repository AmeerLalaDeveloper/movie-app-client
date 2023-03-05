import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
	width: 100%;
	padding: 0 5%;
	height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
	background-color: #181823;
	display: flex;
	align-items: center;
	justify-content: space-around;
	@media (min-width: 700px) {
		height: 80px;
	}
`;

export const LeftContainer = styled.div`
	flex: 70%;
	display: flex;
	align-items: center;
	padding-left: 5%;
`;

export const RightContainer = styled.div`
	flex: 30%;
	display: flex;
	justify-content: flex-end;
	padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
`;

export const NavbarLinkContainer = styled.div`
	display: flex;
`;

export const NavbarLink = styled(Link)`
	color: #efcca2;
	font-size: x-large;
	font-size: 1.3rem;
	text-decoration: none;
	margin: 0 10px;
	&:hover {
		color: white;
	}
	@media (max-width: 700px) {
		display: none;
	}
`;

export const Logout = styled.a`
	color: #efcca2;
	font-size: x-large;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin: 10px;
`;
export const NavbarLinkExtended = styled(Link)`
	color: white;
	font-size: x-large;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin: 10px;
`;

export const Logo = styled.img`
	margin: 10px;
	max-width: 180px;
	height: auto;
`;

export const OpenLinksButton = styled.button`
	width: 70px;
	height: 50px;
	background: none;
	border: none;
	color: #ec255a;
	font-size: 45px;
	cursor: pointer;
	@media (min-width: 700px) {
		display: none;
	}
`;

export const NavbarExtendedContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 700px) {
		display: none;
	}
`;
