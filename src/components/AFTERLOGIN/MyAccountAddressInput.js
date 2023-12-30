import { GoLocation } from 'react-icons/go'
import { InputWrapper, InputContainer, Label, Input, IconContainer } from './MyAccountEmailInput'
function MyAccountAddressInput() {
	return (
		<InputWrapper>
			<Label>Address</Label>
			<InputContainer>
				<IconContainer>
					<GoLocation />
				</IconContainer>
				<Input type="text" placeholder="" />
			</InputContainer>
		</InputWrapper>
	)
}

export default MyAccountAddressInput
