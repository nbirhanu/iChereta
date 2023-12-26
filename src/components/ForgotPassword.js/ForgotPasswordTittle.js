import { styled } from 'styled-components'
import { TittleContainer, Login } from '../LOGIN/LoginFormTittle'

const P = styled.p`
	color: #333;
`

function ForgotPasswordTittle() {
	return (
		<TittleContainer>
			<Login>Lost Password Reset</Login>
			<P>
				Forgotten your password? Enter your phone number <br /> below to begin the reset process
			</P>
		</TittleContainer>
	)
}

export default ForgotPasswordTittle
