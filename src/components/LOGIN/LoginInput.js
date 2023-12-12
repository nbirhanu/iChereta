import { styled } from 'styled-components'
import LoginEmail from './LoginEmail'
import Loginpassword from './Loginpassword'
import LoginButton from './LoginButton'

const InputFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 8rem;
`

function LoginInput() {
	return (
		<InputFormWrapper>
			<LoginEmail />
			<Loginpassword />
			<LoginButton />
		</InputFormWrapper>
	)
}

export default LoginInput
