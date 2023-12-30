import { IoPerson } from 'react-icons/io5'
import { useAuth } from '../../CONTEXTAPI/ContextApi'
import { InputWrapper, InputContainer, Label, Input, IconContainer } from './MyAccountEmailInput'

function MyAccountNameInput() {
	const { firstName } = useAuth()
	return (
		<InputWrapper>
			<Label>Full Name</Label>
			<InputContainer>
				<IconContainer>
					<IoPerson />
				</IconContainer>
				<Input type="text" placeholder="" value={firstName} />
			</InputContainer>
		</InputWrapper>
	)
}

export default MyAccountNameInput
