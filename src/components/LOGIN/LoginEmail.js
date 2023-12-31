import { styled } from 'styled-components'
import { IoPerson } from 'react-icons/io5'

import { useAuth } from '../../CONTEXTAPI/ContextApi'

export const InputContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 45rem;
	border: 1px solid rgba(203, 213, 225, 1);
	padding: 10px;
	border-radius: 4px;
	margin-bottom: 2rem;
	@media (max-width: 600px) {
		width: 40rem;
		padding: 8px;
		margin-bottom: 3rem;
	}
	@media (max-width: 450px) {
		width: 35rem;
	}
	@media (max-width: 400px) {
		width: 32rem;
	}
`
export const IconDiv = styled.div`
	font-size: 1.8rem;
	margin-right: 2rem;
	margin-left: 1.2rem;
	color: rgba(148, 163, 184, 1);
`

export const StyleInput = styled.input`
	flex: 1;
	border: none;
	outline: none;
	font-size: 1.4rem;
	background-color: white;
	font-size: 1.2rem;
	color: rgba(61, 89, 132, 1);
	letter-spacing: 1px;
`
export const PlaceHolderContainer = styled.div`
	position: absolute;
	background-color: white;
	padding: 5px;
	left: 61px;
	top: ${({ hasValue }) => (hasValue ? '-17px' : '16%')};
	transition: ${({ hasValue }) => (hasValue ? '0.5s' : '0.5s')};
`
export const PlaceHolderSpan = styled.span`
	font-size: ${({ hasValue }) => (hasValue ? '1.2rem' : '1.4rem')};
	color: rgba(107, 114, 128, 1);
`

function LoginEmail() {
	const { loginEmail, setLoginEmail } = useAuth()

	const handleOnChange = function (e) {
		setLoginEmail(e.target.value)
	}
	return (
		<InputContainer>
			<IconDiv>
				<IoPerson />
			</IconDiv>
			<StyleInput type="email" placeholder="" value={loginEmail} onChange={handleOnChange} />
			<PlaceHolderContainer hasValue={loginEmail.length > 0}>
				<PlaceHolderSpan hasValue={loginEmail.length > 0}>Email or Phone Number</PlaceHolderSpan>
			</PlaceHolderContainer>
		</InputContainer>
	)
}

export default LoginEmail
