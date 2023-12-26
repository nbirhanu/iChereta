import { MdLocalPhone } from 'react-icons/md'
import { useState } from 'react'
import {
	InputContainer,
	IconDiv,
	StyleInput,
	PlaceHolderContainer,
	PlaceHolderSpan,
} from '../LOGIN/LoginEmail'

function PhoneNumber() {
	const [phoneNumber, setPhoneNumber] = useState('')
	const handleOnChange = function (e) {
		setPhoneNumber(e.target.value)
	}
	return (
		<InputContainer>
			<IconDiv>
				<MdLocalPhone />
			</IconDiv>
			<StyleInput type="email" placeholder="" value={phoneNumber} onChange={handleOnChange} />
			<PlaceHolderContainer hasValue={phoneNumber.length > 0}>
				<PlaceHolderSpan hasValue={phoneNumber.length > 0}>Phone Number</PlaceHolderSpan>
			</PlaceHolderContainer>
		</InputContainer>
	)
}

export default PhoneNumber
