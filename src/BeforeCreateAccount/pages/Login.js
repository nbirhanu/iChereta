import { styled } from 'styled-components'
import LoginForm from '../../components/LOGIN/LoginForm'
import LoginHero from '../../components/LOGIN/LoginHero'

const LoginWrapper = styled.div`
	display: grid;
	grid-template-columns: 0.76fr 1.24fr;
`

function Login() {
	return (
		<LoginWrapper>
			<LoginHero />
			<LoginForm />
		</LoginWrapper>
	)
}

export default Login
