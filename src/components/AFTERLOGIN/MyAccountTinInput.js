import { MdAppSettingsAlt } from 'react-icons/md'
import { InputWrapper, InputContainer, Label, Input, IconContainer } from './MyAccountEmailInput'
function MyAccountTinInput() {
	return (
		<InputWrapper>
			<Label>TIN</Label>
			<InputContainer>
				<IconContainer>
					<MdAppSettingsAlt />
				</IconContainer>
				<Input type="text" placeholder="" />
			</InputContainer>
		</InputWrapper>
	)
}

export default MyAccountTinInput
