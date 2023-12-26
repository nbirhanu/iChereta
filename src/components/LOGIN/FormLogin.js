import { styled } from 'styled-components'
import LoginFormTittle from './LoginFormTittle'
import LoginInput from './LoginInput'

export const LoginFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	/* width: 60%; */
	max-width: 60rem;
	margin: auto;
	background-color: white;
	padding: 2.8rem;
	margin-top: 6rem;
	border-radius: 7px;
	@media (max-width: 900px) {
		margin-top: 0;
	}
	@media (max-width: 600px) {
		max-width: 50rem;
	}

	@media (max-width: 500px) {
		max-width: 45rem;
	}
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
