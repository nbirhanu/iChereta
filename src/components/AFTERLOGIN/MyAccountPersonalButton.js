import { styled } from 'styled-components'

export const ButtonContainer = styled.button`
	cursor: pointer;
	border: none;
	background-color: rgba(102, 75, 199, 1);
	padding: 12px 0;
	margin-top: 1.2rem;
	border-radius: 4px;
`
export const P = styled.p`
	color: rgba(255, 255, 255, 1);
`

function MyAccountPersonalButton() {
	return (
		<ButtonContainer>
			<P>Saved Changes</P>
		</ButtonContainer>
	)
}

export default MyAccountPersonalButton
