import { styled } from 'styled-components'
import SignupNavigation from './SignupNavigation'
import FormLogin from './FormLogin'

export const LoginFormWrapper = styled.div`
	background-color: rgba(239, 246, 255, 0.4);
	display: flex;
	flex-direction: column;
`

function LoginForm() {
	return (
		<LoginFormWrapper>
			<SignupNavigation />
			<FormLogin />
		</LoginFormWrapper>
	)
}

export default LoginForm
