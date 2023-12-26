import { LoginFormWrapper } from '../LOGIN/LoginForm'
import FormSignup from './FormSignup'
import LoginNavigation from './LoginNavigation'

function SignupForm() {
	return (
		<LoginFormWrapper>
			<LoginNavigation />
			<FormSignup />
		</LoginFormWrapper>
	)
}

export default SignupForm
