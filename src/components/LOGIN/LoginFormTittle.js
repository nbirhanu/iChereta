import { styled } from 'styled-components'

const TittleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	color: rgb(102, 75, 199);
	gap: 1rem;
	font-weight: 600;
`

const Welcome = styled.p`
	font-size: 1.4rem;
`
const Login = styled.p`
	font-size: 2.8rem;
`

function LoginFormTittle() {
	return (
		<TittleContainer>
			<Welcome>ሰላም 👋 , Welcome Back!</Welcome>
			<Login>Login to iChereta</Login>
		</TittleContainer>
	)
}

export default LoginFormTittle
