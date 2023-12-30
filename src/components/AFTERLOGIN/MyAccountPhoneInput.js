import { MdLocalPhone } from 'react-icons/md'
import { useAuth } from '../../CONTEXTAPI/ContextApi'
import {
	InputWrapper,
	InputContainer,
	Label,
	Input,
	IconContainer,
	Span,
} from './MyAccountEmailInput'
function MyAccountPhoneInput() {
	const { phoneNumber } = useAuth()
	return (
		<InputWrapper>
			<Label>
				Phone Number <Span>verify</Span>
			</Label>
			<InputContainer>
				<IconContainer>
					<MdLocalPhone />
				</IconContainer>
				<Input type="number" placeholder="" value={phoneNumber} />
			</InputContainer>
		</InputWrapper>
	)
}

export default MyAccountPhoneInput
