import { styled } from 'styled-components'
import LoginForm from '../../components/LOGIN/LoginForm'
import LoginHero from '../../components/LOGIN/LoginHero'
import LoginHeader from '../../components/LOGIN/LoginHeader'

export const LoginWrapper = styled.div`
	display: grid;
	grid-template-columns: 52rem 1fr;
	height: 100vh;

	@media (max-width: 1150px) {
		grid-template-columns: 45rem 1fr;
	}
	@media (max-width: 1050px) {
		grid-template-columns: 40rem 1fr;
	}
	@media (max-width: 1000px) {
		grid-template-columns: 36rem 1fr;
	}

	@media (max-width: 900px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5rem;
		background-color: rgba(239, 246, 255, 0.4);
	}
	@media (max-width: 600px) {
		background-color: initial;
	}
`

function Login() {
	return (
		<LoginWrapper>
			<LoginHeader />
			<LoginHero />
			<LoginForm />
		</LoginWrapper>
	)
}

export default Login
