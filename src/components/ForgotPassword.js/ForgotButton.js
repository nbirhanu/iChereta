import { Link } from 'react-router-dom'
import { LoginButtonContainer, ForGotPassword, Button } from '../LOGIN/LoginButton'

function ForgotButton() {
	return (
		<LoginButtonContainer>
			<Link style={{ textDecoration: 'none' }} to="/login">
				<ForGotPassword>Back to Login</ForGotPassword>
			</Link>
			<Button>Reset Password</Button>
		</LoginButtonContainer>
	)
}

export default ForgotButton
