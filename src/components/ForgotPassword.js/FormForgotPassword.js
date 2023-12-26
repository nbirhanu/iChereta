import { LoginFormWrapper } from '../LOGIN/FormLogin'
import ForgotInput from './ForgotInput'
import ForgotPasswordTittle from './ForgotPasswordTittle'

function FormForgotPassword() {
	return (
		<LoginFormWrapper>
			<ForgotPasswordTittle />
			<ForgotInput />
		</LoginFormWrapper>
	)
}

export default FormForgotPassword
