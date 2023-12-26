import { styled } from 'styled-components'
import { IoPerson } from 'react-icons/io5'
import { IconDiv, StyleInput, PlaceHolderContainer, PlaceHolderSpan } from '../LOGIN/LoginEmail'
import { useAuth } from '../../CONTEXTAPI/ContextApi'

export const Name = styled.div`
	width: 22rem;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid rgba(203, 213, 225, 1);
	padding: 10px;
	border-radius: 4px;
	margin-bottom: 2rem;
	@media (max-width: 600px) {
		width: 19.5rem;
		padding: 8px;
	}
	@media (max-width: 450px) {
		width: 17rem;
	}
	@media (max-width: 400px) {
		width: 15.5rem;
	}
`

function NameInput() {
	const { handleInputChange, firstName } = useAuth()
	return (
		<>
			<Name>
				<IconDiv>
					<IoPerson />
				</IconDiv>
				<StyleInput
					type="text"
					id="firstName"
					name="firstName"
					placeholder=""
					value={firstName}
					onChange={handleInputChange}
					style={{ width: '70%' }}
				/>
				<PlaceHolderContainer hasValue={firstName.length > 0}>
					<PlaceHolderSpan hasValue={firstName.length > 0}>ስም</PlaceHolderSpan>
				</PlaceHolderContainer>
			</Name>
		</>
	)
}

export default NameInput
