import { styled } from 'styled-components'
import { IoPerson } from 'react-icons/io5'
import { useState } from 'react'

const LoginEmailContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 45rem;
	border: 1px solid #ccc;
	padding: 10px;
	border-radius: 4px;
`
const IconDiv = styled.div`
	font-size: 1.8rem;
	margin-right: 2rem;
	margin-left: 1.2rem;
`

const StyleInput = styled.input`
	flex: 1;
	border: none;
	outline: none;
	font-size: 1.4rem;
`
const PlaceHolderContainer = styled.div`
	position: absolute;
	background-color: white;
	padding: 5px;
	left: 61px;
	top: ${({ hasValue }) => (hasValue ? '-20px' : '16%')};
	transition: ${({ hasValue }) => (hasValue ? '0.5s' : '')};
`
const PlaceHolderSpan = styled.span`
	font-size: 1.4rem;
`

function LoginEmail() {
	const [inputValue, setInputValue] = useState('')
	const handleOnChange = function (e) {
		setInputValue(e.target.value)
	}
	return (
		<LoginEmailContainer>
			<IconDiv>
				<IoPerson />
			</IconDiv>
			<StyleInput type="email" placeholder="" value={inputValue} onChange={handleOnChange} />
			<PlaceHolderContainer hasValue={inputValue.length > 0}>
				<PlaceHolderSpan>Email or Phone Number</PlaceHolderSpan>
			</PlaceHolderContainer>
		</LoginEmailContainer>
	)
}

export default LoginEmail
