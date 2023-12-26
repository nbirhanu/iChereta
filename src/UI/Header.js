import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import MobileNavigation from '../components/MobileNavigation'
const FixedHeader = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: hsla(0, 0%, 100%, 0.9);
	border-bottom: 1px solid rgb(226 232 240);
	backdrop-filter: blur(3px);
	padding: 10px;
	color: white;
	z-index: 1000;
	padding-top: 1.4rem; /* 14px */
	padding-bottom: 1.4rem; /* 14px */ // Set a high z-index to ensure it appears above other elements
`
const LinkWrapper = styled.div`
	width: 89%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const Logo = styled.div`
	cursor: pointer;
`
export const LogoImage = styled.img`
	width: 10.4rem;
`
const Links = styled.div`
	display: flex;
	align-items: center;
	column-gap: 3.2rem;
`
const LinkLetter = styled.p`
	color: #664bc7;
	font-size: 1.4rem;
	&:hover {
		color: rgb(59 130 246);
	}
	@media (max-width: 800px) {
		display: none;
	}
`
const Login = styled.p`
	font-size: 1.4rem;
	color: rgb(255 255 255);
	background-color: rgb(102 75 199);
	padding-left: 3.2rem;
	padding-right: 3.2rem;
	padding-top: 0.6rem;
	padding-bottom: 0.6rem;
	border-radius: 2rem;

	&:hover {
		background-color: #664bc7;
	}
	@media (max-width: 800px) {
		display: none;
	}
`

function Header() {
	return (
		<FixedHeader>
			<LinkWrapper>
				<Link to="/">
					<Logo>
						<LogoImage
							src="https://ichereta.com/static/media/logowitht.d8bdbb154b2f43a1a62a9468b46394dd.svg"
							alt="ichereta logo"
						/>
					</Logo>
				</Link>
				<Links>
					<Link style={{ textDecoration: 'none' }} to="/tenders">
						<LinkLetter>Tenders</LinkLetter>
					</Link>
					<Link style={{ textDecoration: 'none' }} to="/pricing">
						<LinkLetter>Pricing</LinkLetter>
					</Link>
					<Link style={{ textDecoration: 'none' }} to="/faq">
						<LinkLetter>FAQ</LinkLetter>
					</Link>
					<Link style={{ textDecoration: 'none' }} to="/signup">
						<LinkLetter>Signup</LinkLetter>
					</Link>
					<Link style={{ textDecoration: 'none' }} to="/login">
						<Login>Login</Login>
					</Link>
				</Links>
				<MobileNavigation />
			</LinkWrapper>
		</FixedHeader>
	)
}

export default Header
