import { IoPerson } from 'react-icons/io5'
import {
	InputContainer,
	IconDiv,
	StyleInput,
	PlaceHolderContainer,
	PlaceHolderSpan,
} from '../LOGIN/LoginEmail'
import { useAuth } from '../../CONTEXTAPI/ContextApi'

function SignupEmail() {
	const { handleInputChange, email } = useAuth()

	return (
		<div>
			<InputContainer>
				<IconDiv>
					<IoPerson />
				</IconDiv>
				<StyleInput
					type="email"
					name="email"
					id="email"
					placeholder=""
					value={email}
					onChange={handleInputChange}
				/>
				<PlaceHolderContainer hasValue={email.length > 0}>
					<PlaceHolderSpan hasValue={email.length > 0}>ኢሜል ያስገቡ</PlaceHolderSpan>
				</PlaceHolderContainer>
			</InputContainer>
		</div>
	)
}

export default SignupEmail
