import { IoPerson } from 'react-icons/io5'
import { Name } from './NameInput'
import { IconDiv, StyleInput, PlaceHolderContainer, PlaceHolderSpan } from '../LOGIN/LoginEmail'
import { useAuth } from '../../CONTEXTAPI/ContextApi'

function FatherNameInput() {
	const { lastName, handleInputChange } = useAuth()
	return (
		<>
			<Name>
				<IconDiv>
					<IoPerson />
				</IconDiv>
				<StyleInput
					type="text"
					id="lastName"
					name="lastName"
					placeholder=""
					value={lastName}
					onChange={handleInputChange}
					style={{ width: '70%' }}
				/>
				<PlaceHolderContainer hasValue={lastName.length > 0}>
					<PlaceHolderSpan hasValue={lastName.length > 0}>የአባት ስም</PlaceHolderSpan>
				</PlaceHolderContainer>
			</Name>
		</>
	)
}

export default FatherNameInput
