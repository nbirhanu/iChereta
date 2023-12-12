import { styled } from 'styled-components'
//

const TelePhoneContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`
//
const TelePhoneTittleDiv = styled.div`
	background-color: rgb(241 245 249);
	display: flex;
	align-items: center;
	border-bottom-left-radius: 0.6rem;
	border-top-left-radius: 0.6rem;
`
const TelePhoneTittle = styled.h1`
	font-size: 3.2rem; /* 36px */
	line-height: 4rem; /* 40px */
	font-weight: 700;
	color: #29204e;
	padding: 6.2rem;
	margin-left: 1.2rem;
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
				<SignUpButton>Sign Up Now</SignUpButton>
				<TelePhone>
					Got Questions? <br /> Call Us 0955305555
				</TelePhone>
			</TelephoneSignup>
		</TelePhoneContainer>
	)
}

export default FooterTelePhone
