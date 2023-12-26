import ForgotPasswordForm from '../../components/ForgotPassword.js/ForgotPasswordForm'
import LoginHeader from '../../components/LOGIN/LoginHeader'
import LoginHero from '../../components/LOGIN/LoginHero'
import { LoginWrapper } from './Login'

function ForgotPassword() {
	return (
		<LoginWrapper>
			<LoginHeader />
			<LoginHero />
			<ForgotPasswordForm />
		</LoginWrapper>
	)
}

export default ForgotPassword
