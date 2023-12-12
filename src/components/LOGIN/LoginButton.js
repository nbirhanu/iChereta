import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const LoginButtonContainer = styled.div`
	width: 45rem;
	display: flex;
	flex-direction: column;
	margin-top: 1.8rem;
`
const ForGotPassword = styled.p`
	cursor: pointer;
	color: rgba(102, 75, 199, 1);
	font-weight: 500;
	font-size: 1.4rem;
`
const Button = styled.button`
	width: 100%;
	margin-top: 1.8rem;
	border: none;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(102, 75, 199, 0.9);
	padding: 1.2rem 0;
	border-radius: 5px;
`

function LoginButton() {
	return (
		<LoginButtonContainer>
			<Link style={{ textDecoration: 'none' }}>
				<ForGotPassword>Forgot Password ?</ForGotPassword>
			</Link>
			<Button>Log in</Button>
		</LoginButtonContainer>
	)
}

export default LoginButton
