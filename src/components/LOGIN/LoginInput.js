import { styled } from 'styled-components'
import LoginEmail from './LoginEmail'
import Loginpassword from './Loginpassword'
// import EmailInput from './Test'

const InputFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 8rem;
`

function LoginInput() {
	return (
		<InputFormWrapper>
			{/* <EmailInput /> */}
			<LoginEmail />
			<Loginpassword />
		</InputFormWrapper>
	)
}

export default LoginInput
