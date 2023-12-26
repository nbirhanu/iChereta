import { LoginFormWrapper } from '../LOGIN/FormLogin'
import SignUpNavigation from './SignUpNavigation'
import SignupInput from './SignupInput'
import SignupTittle from './SignupTittle'

function FormSignup() {
	return (
		<LoginFormWrapper>
			<SignupTittle />
			<SignUpNavigation />
			<SignupInput />
		</LoginFormWrapper>
	)
}

export default FormSignup
