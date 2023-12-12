import { styled } from 'styled-components'
import LoginFormTittle from './LoginFormTittle'
import LoginInput from './LoginInput'

const LoginFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
	margin: auto;
	background-color: white;
	padding: 2.8rem;
`

function FormLogin() {
	return (
		<LoginFormWrapper>
			<LoginFormTittle />
			<LoginInput />
		</LoginFormWrapper>
	)
}

export default FormLogin
