import { Link } from 'react-router-dom'
import { SignupNavWrapper, ButtonDiv, H1, SignupButton } from '../LOGIN/SignupNavigation'

function LoginNavigation() {
	return (
		<SignupNavWrapper>
			<ButtonDiv>
				<H1>Already have iChereta Accounts?</H1>
				<Link to="/login" style={{ textDecoration: 'none' }}>
					<SignupButton>Log in</SignupButton>
				</Link>
			</ButtonDiv>
		</SignupNavWrapper>
	)
}

export default LoginNavigation
