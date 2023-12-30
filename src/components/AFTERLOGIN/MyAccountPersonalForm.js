import { styled } from 'styled-components'
import Title from './Title'
import MyAccountEmailInput from './MyAccountEmailInput'
import MyAccountNameInput from './MyAccountNameInput'
import MyAccountPhoneInput from './MyAccountPhoneInput'
import MyAccountPersonalButton from './MyAccountPersonalButton'

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	margin: auto;
	padding: 1.8rem 0;
	gap: 1.4rem;
`

function MyAccountPersonalForm() {
	return (
		<FormContainer>
			<Title />
			<MyAccountNameInput />
			<MyAccountEmailInput />
			<MyAccountPhoneInput />
			<MyAccountPersonalButton />
		</FormContainer>
	)
}

export default MyAccountPersonalForm
