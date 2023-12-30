import { styled } from 'styled-components'
import { MdEmail } from 'react-icons/md'
import { useAuth } from '../../CONTEXTAPI/ContextApi'

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`
export const InputContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid rgba(203, 213, 225, 1);
	padding: 8px;
	border-radius: 4px;
`

export const Label = styled.p`
	font-size: 1.1rem;
	font-weight: inherit;
	color: rgba(61, 89, 132, 1);
`
export const Input = styled.input`
	flex: 1;
	border: none;
	outline: none;
	font-size: 1.2rem;
	color: rgba(61, 89, 132, 1);
	letter-spacing: 1px;
`

export const IconContainer = styled.div`
	font-size: 1.8rem;
	margin-right: 1.5rem;
	margin-left: 0.8rem;
	color: rgba(148, 163, 184, 1);
`

export const Span = styled.span`
	color: rgba(59, 130, 246, 1);
	font-weight: 700;
	font-size: 1.1rem;
	margin-left: 5px;
`

function MyAccountEmailInput() {
	const { loginEmail } = useAuth()
	return (
		<InputWrapper>
			<Label>
				Email Address <Span>verify</Span>
			</Label>
			<InputContainer>
				<IconContainer>
					<MdEmail />
				</IconContainer>
				<Input type="text" placeholder="" value={loginEmail} />
			</InputContainer>
		</InputWrapper>
	)
}

export default MyAccountEmailInput
