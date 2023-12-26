import { LoginFormWrapper } from '../LOGIN/LoginForm'
import SignupNavigation from '../LOGIN/SignupNavigation'
import FormForgotPassword from './FormForgotPassword'

function ForgotPasswordForm() {
	return (
		<LoginFormWrapper>
			<SignupNavigation />
			<FormForgotPassword />
		</LoginFormWrapper>
	)
}

export default ForgotPasswordForm
