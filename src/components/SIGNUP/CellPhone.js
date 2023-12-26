import { MdLocalPhone } from 'react-icons/md'
import {
	InputContainer,
	IconDiv,
	StyleInput,
	PlaceHolderContainer,
	PlaceHolderSpan,
} from '../LOGIN/LoginEmail'
import { useAuth } from '../../CONTEXTAPI/ContextApi'
// import { useState } from 'react'

function CellPhone() {
	const { handleInputChange, phoneNumber } = useAuth()
	return (
		<>
			<InputContainer>
				<IconDiv>
					<MdLocalPhone />
				</IconDiv>
				<StyleInput
					type="number"
					placeholder=""
					value={phoneNumber}
					onChange={handleInputChange}
					id="phoneNumber"
					name="phoneNumber"
				/>
				<PlaceHolderContainer hasValue={phoneNumber.length > 0}>
					<PlaceHolderSpan hasValue={phoneNumber.length > 0}>የሞባይል ቁጥር</PlaceHolderSpan>
				</PlaceHolderContainer>
			</InputContainer>
		</>
	)
}

export default CellPhone
