import LoginHero from '../../components/LOGIN/LoginHero'
import SignupForm from '../../components/SIGNUP/SignupForm'
import SignupHeader from '../../components/SIGNUP/SignupHeader'

import { LoginWrapper } from './Login'

function Signup() {
	return (
		<LoginWrapper>
			<SignupHeader />
			<LoginHero />
			<SignupForm />
		</LoginWrapper>
	)
}

export default Signup
