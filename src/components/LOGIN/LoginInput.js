import { styled } from 'styled-components'
import LoginEmail from './LoginEmail'
import Loginpassword from './Loginpassword'
import LoginButton from './LoginButton'

export const InputFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 8rem;
	@media (max-width: 600px) {
		margin-top: 6rem;
	}
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
