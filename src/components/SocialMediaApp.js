import { styled } from 'styled-components'

import {
	FaFacebookF,
	FaTelegramPlane,
	FaInstagram,
	FaTiktok,
	FaTwitter,
	FaLinkedinIn,
} from 'react-icons/fa'

//
const SocialMediaAppWrapper = styled.div`
	display: flex;
	gap: 2.2rem;
`
const SocialMediaAppContainer = styled.div`
	background-color: hsla(0, 0%, 100%, 0.7);
	width: 3.2rem;
	height: 3.2rem;
	font-size: 1.8rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
`

function SocialMediaApp() {
	return (
		<SocialMediaAppWrapper>
			<SocialMediaAppContainer>
				<a href="https://www.facebook.com/iChereta/" target="blank">
					<FaFacebookF style={{ color: 'rgba(47,32,99,0.8)' }} />
				</a>
			</SocialMediaAppContainer>
			<SocialMediaAppContainer>
				<a href="https://t.me/iChereta" target="blank">
					<FaTelegramPlane style={{ color: 'rgba(47,32,99,0.8)' }} />
				</a>
			</SocialMediaAppContainer>
			<SocialMediaAppContainer>
				<a
					href="https://www.instagram.com/accounts/suspended/?next=https%3A%2F%2Finstagram.com%2FiChereta_%3F__coig_ufac%3D1"
					target="blank">
					<FaInstagram style={{ color: 'rgba(47,32,99,0.8)' }} />
				</a>
			</SocialMediaAppContainer>
			<SocialMediaAppContainer>
				<a href="https://www.tiktok.com/@ichereta" target="blank">
					<FaTiktok style={{ color: 'rgba(47,32,99,0.8)' }} />
				</a>
			</SocialMediaAppContainer>
			<SocialMediaAppContainer>
				<a href="https://twitter.com/iChereta" target="blank">
					<FaTwitter style={{ color: 'rgba(47,32,99,0.8)' }} />
				</a>
			</SocialMediaAppContainer>
			<SocialMediaAppContainer>
				<a href="https://www.linkedin.com/company/iChereta" target="blank">
					<FaLinkedinIn style={{ color: 'rgba(47,32,99,0.8)' }} />
				</a>
			</SocialMediaAppContainer>
		</SocialMediaAppWrapper>
	)
}

export default SocialMediaApp
