import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
/////

const LinkWrapper = styled.div`
	display: flex;
	gap: 2.2rem;
`
const LinkP = styled.p`
	font-size: 1.4rem;
	color: hsla(0, 0%, 100%, 0.6);
`
//////
function AboutUs() {
	return (
		<LinkWrapper>
			<Link style={{ textDecoration: 'none' }}>
				<LinkP>About Us.</LinkP>
			</Link>
			<Link style={{ textDecoration: 'none' }}>
				<LinkP>Privacy Policy.</LinkP>
			</Link>
			<Link style={{ textDecoration: 'none' }}>
				<LinkP>Refund Policy.</LinkP>
			</Link>
			<Link style={{ textDecoration: 'none' }}>
				<LinkP>Terms of Services.</LinkP>
			</Link>
		</LinkWrapper>
	)
}

export default AboutUs
