import React, { useState } from 'react'
import styled from 'styled-components'

import { AiOutlineMenu } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

const MobileNavWrapper = styled.div`
	position: relative;
`

const NavButton = styled.button`
	position: fixed;
	top: 1rem;
	right: 2.8rem;
	font-size: 2.8rem;
	background-color: hsla(0, 0%, 100%, 0.9);
	color: #333;
	padding: 0.5rem 0.75rem;
	border: none;
	cursor: pointer;
	z-index: 5;
`

const NavOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);

	display: ${props => (props.isOpen ? 'block' : 'none')};
	z-index: 1; /* Ensure overlay is above other content */
`

const NavMenu = styled.ul`
	list-style: none;
	padding: 5rem 5rem;

	background-color: hsla(0, 0%, 100%, 0.9);
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	width: 50%; /* Adjust the width as needed */
	transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
	transition: transform 0.3s ease-in-out;
	z-index: 2; /* Ensure menu is above overlay */
`

const NavItem = styled.li`
	margin: 10px 0;
	display: ${props => (props.isOpen ? 'block' : 'none')};
`
const MNavigation = styled.div`
	display: none;
	@media (max-width: 800px) {
		display: block;
	}
`
const P = styled.p`
	color: rgba(102, 75, 199, 1);
	font-size: 1.4rem;
	font-family: 'FuturaPtDemi', Trebuchet MS, sans-serif;
	font-style: normal;
	line-height: 50px;
	letter-spacing: 0;
	letter-spacing: 1px;
	white-space: nowrap;
	text-transform: uppercase;
	font-weight: 600;
	&:hover {
		color: #4671c7;
		transition: transform 0.3s ease;
	}
`
const Login = styled.p`
	display: inline-block;
	font-size: 1.4rem;
	color: rgb(255 255 255);
	background-color: rgb(102 75 199);
	padding-left: 3.2rem;
	padding-right: 3.2rem;
	padding-top: 0.6rem;
	padding-bottom: 0.6rem;
	border-radius: 0.8rem;
	text-transform: uppercase;
	&:hover {
		background-color: #664bc7;
	}
`

const MobileNavigation = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<MNavigation>
			<MobileNavWrapper>
				<NavButton onClick={toggleMenu}>{isOpen ? <FiX /> : <AiOutlineMenu />}</NavButton>
				<NavOverlay isOpen={isOpen} onClick={toggleMenu} />
				<NavMenu isOpen={isOpen}>
					<NavItem isOpen={isOpen} onClick={toggleMenu}>
						<NavLink style={{ textDecoration: 'none' }} to="/Tenders">
							<P>Tenders</P>
						</NavLink>
					</NavItem>
					<NavItem isOpen={isOpen} onClick={toggleMenu}>
						<NavLink style={{ textDecoration: 'none' }} to="/pricing">
							<P>Pricing</P>
						</NavLink>
					</NavItem>
					<NavItem isOpen={isOpen} onClick={toggleMenu}>
						<NavLink style={{ textDecoration: 'none' }} to="/faq">
							<P>FAQ</P>
						</NavLink>
					</NavItem>
					<NavItem isOpen={isOpen} onClick={toggleMenu}>
						<NavLink style={{ textDecoration: 'none' }} to="/signup">
							<P>Signup</P>
						</NavLink>
					</NavItem>
					<NavItem isOpen={isOpen} onClick={toggleMenu}>
						<NavLink style={{ textDecoration: 'none' }} to="/login">
							<Login>Login</Login>
						</NavLink>
					</NavItem>
				</NavMenu>
			</MobileNavWrapper>
		</MNavigation>
	)
}

export default MobileNavigation
