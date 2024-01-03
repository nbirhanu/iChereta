import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
//

const TelePhoneContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	@media (max-width: 945px) {
		grid-template-columns: 35rem 1fr;
	}
	@media (max-width: 700px) {
		display: flex;
		flex-direction: column;
	}
`
//
const TelePhoneTittleDiv = styled.div`
	background-color: rgb(241 245 249);
	display: flex;
	align-items: center;
	border-bottom-left-radius: 0.6rem;
	border-top-left-radius: 0.6rem;
	@media (max-width: 700px) {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
`
const TelePhoneTittle = styled.h1`
	font-size: 3.2rem; /* 36px */
	line-height: 4rem; /* 40px */
	font-weight: 700;
	color: #29204e;
	padding: 6.2rem;
	margin-left: 1.2rem;
	@media (max-width: 1050px) {
		padding: 5.4rem;
	}
	@media (max-width: 945px) {
		margin-left: -2rem;
		font-size: 2.8rem;
		line-height: 3.5rem;
	}
	@media (max-width: 700px) {
		margin: auto;
		text-align: center;
		padding: 1.4rem;
		font-size: 2.4rem;
		line-height: 3.2rem;
	}
	@media (max-width: 550px) {
		font-size: 1.8rem;
		line-height: 3rem;
		padding: 1.2rem;
	}
`

//
const TelephoneSignup = styled.div`
	display: flex;
	flex-direction: column;
	background-color: rgb(249 248 253);
	align-items: center;
	justify-content: center;
	gap: 2rem;
	border-top-right-radius: 0.6rem;
	border-bottom-right-radius: 0.6rem;
	@media (max-width: 945px) {
		gap: 1rem;
	}
	@media (max-width: 700px) {
		padding: 2.4rem;
		border-bottom-right-radius: 5px;
		border-bottom-left-radius: 5px;
	}
	@media (max-width: 550px) {
		padding: 1.8rem;
	}
`
const SignUpButton = styled.button`
	width: 18rem;
	border: none;
	color: rgb(255 255 255);
	background-color: rgba(235, 186, 92, 1);
	padding-top: 1.2rem; /* 12px */
	padding-bottom: 1.2rem; /* 12px */
	transition: 0.3s;
	border-radius: 0.4rem;
	&:hover {
		background-color: rgba(202, 138, 4, 0.7);
	}
	@media (max-width: 945px) {
		width: 16rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	@media (max-width: 550px) {
		width: 14rem;
		padding-top: 0.8rem;
		padding-bottom: 0.8rem;
	}
`
const TelePhone = styled.p`
	text-align: center;
	color: rgba(41, 32, 78, 1);
	font-weight: 800;
	font-size: 1.2rem;
	line-height: 1.5;
`
//
function FooterTelePhone() {
	return (
		<TelePhoneContainer>
			<TelePhoneTittleDiv>
				<TelePhoneTittle>
					Grow Your Business <br /> With <span style={{ color: '#6449c3' }}>iChereta.</span>
				</TelePhoneTittle>
			</TelePhoneTittleDiv>
			<TelephoneSignup>
				<Link to="/signup">
					<SignUpButton>Sign Up Now</SignUpButton>
				</Link>

				<TelePhone>
					Got Questions? <br /> Call Us 0955305555
				</TelePhone>
			</TelephoneSignup>
		</TelePhoneContainer>
	)
}

export default FooterTelePhone
