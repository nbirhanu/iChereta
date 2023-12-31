import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const LoginButtonContainer = styled.div`
	width: 45rem;
	display: flex;
	flex-direction: column;
	margin-top: 1.8rem;
	@media (max-width: 600px) {
		justify-content: center;
		align-items: center;
	}
	@media (max-width: 600px) {
		width: 42rem;
	}
	@media (max-width: 500px) {
		width: 40rem;
	}
	@media (max-width: 450px) {
		width: 36rem;
	}
	@media (max-width: 420px) {
		width: 35rem;
	}
	@media (max-width: 395px) {
		width: 33rem;
	}
	@media (max-width: 385px) {
		width: 32rem;
	}
`
export const ForGotPassword = styled.p`
	cursor: pointer;
	color: rgba(102, 75, 199, 1);
	font-weight: 500;
	font-size: 1.4rem;
	@media (max-width: 600px) {
		margin-right: 28rem;
	}
	@media (max-width: 450px) {
		margin-right: 23rem;
	}
	@media (max-width: 400px) {
		margin-right: 20rem;
	}
`
export const Button = styled.button`
	width: 45rem;
	margin-top: 1.8rem;
	border: none;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(102, 75, 199, 0.9);
	padding: 1rem 0;
	border-radius: 5px;
	font-size: 1.4rem;
	@media (max-width: 600px) {
		width: 42rem;
	}
	@media (max-width: 500px) {
		width: 40rem;
	}
	@media (max-width: 450px) {
		width: 36rem;
	}
	@media (max-width: 420px) {
		width: 35rem;
	}
	@media (max-width: 395px) {
		width: 33rem;
	}
	@media (max-width: 385px) {
		width: 32rem;
	}
`

function LoginButton() {
	return (
		<LoginButtonContainer>
			<Link style={{ textDecoration: 'none' }} to="/forgot-password">
				<ForGotPassword>Forgot Password ?</ForGotPassword>
			</Link>
			<Link to="/tender">
				<Button>Log in</Button>
			</Link>
		</LoginButtonContainer>
	)
}

export default LoginButton
