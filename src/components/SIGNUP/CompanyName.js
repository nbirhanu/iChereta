import { HiBuildingOffice } from 'react-icons/hi2'
import {
	InputContainer,
	IconDiv,
	StyleInput,
	PlaceHolderContainer,
	PlaceHolderSpan,
} from '../LOGIN/LoginEmail'
import { useAuth } from '../../CONTEXTAPI/ContextApi'

function CompanyName() {
	const { handleInputChange, companyName } = useAuth()
	return (
		<>
			<InputContainer>
				<IconDiv>
					<HiBuildingOffice />
				</IconDiv>
				<StyleInput
					type="text"
					placeholder=""
					value={companyName}
					onChange={handleInputChange}
					id="companyName"
					name="companyName"
				/>
				<PlaceHolderContainer hasValue={companyName.length > 0}>
					<PlaceHolderSpan hasValue={companyName.length > 0}>የድርጅት ስም (ካሎት)</PlaceHolderSpan>
				</PlaceHolderContainer>
			</InputContainer>
		</>
	)
}

export default CompanyName
