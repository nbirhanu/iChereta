import { styled } from 'styled-components'
import FooterTelePhone from './FooterTelePhone'
import SocialMedia from './SocialMedia'

//
const FooterWrapper = styled.div`
	background-image: linear-gradient(to right, #6449c3, #2f2063);
	width: 100%;
	height: 55vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	margin-top: 20rem;
`
const FooterTelePhoneWrapper = styled.div`
	width: 88%;
	position: absolute;
	top: -35%;
	@media (max-width: 405px) {
		top: -30%;
	}
	/* @media (max-width: 405px) {
		top: -30%;
	} */
`
const SocialMediaWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	margin-top: 6.4rem;
`

function Footer() {
	return (
		<FooterWrapper>
			<FooterTelePhoneWrapper>
				<FooterTelePhone />
			</FooterTelePhoneWrapper>
			<SocialMediaWrapper>
				<SocialMedia />
			</SocialMediaWrapper>
		</FooterWrapper>
	)
}

export default Footer
