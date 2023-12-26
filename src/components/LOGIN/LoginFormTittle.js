import { styled } from 'styled-components'

export const TittleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	color: rgb(102, 75, 199);
	gap: 1rem;
	font-weight: 600;
	@media (max-width: 600px) {
		gap: 0.8rem;
	}
`

const Welcome = styled.p`
	font-size: 1.4rem;
`
export const Login = styled.p`
	font-size: 2.8rem;
	@media (max-width: 600px) {
		font-size: 2.6rem;
	}
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
