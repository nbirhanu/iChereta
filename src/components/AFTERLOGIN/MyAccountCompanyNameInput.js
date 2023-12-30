import { MdHouseSiding } from 'react-icons/md'
import { InputWrapper, InputContainer, Label, Input, IconContainer } from './MyAccountEmailInput'

function MyAccountCompanyNameInput() {
	return (
		<InputWrapper>
			<Label>Company Name</Label>
			<InputContainer>
				<IconContainer>
					<MdHouseSiding />
				</IconContainer>
				<Input type="text" placeholder="" />
			</InputContainer>
		</InputWrapper>
	)
}

export default MyAccountCompanyNameInput
