import React from 'react'
import styled from 'styled-components'
import { IoPerson } from 'react-icons/io5'
import { useState } from 'react'
// Create a styled wrapper for the input container
const InputContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 300px;
	border: 1px solid #ccc;
	padding: 8px;
	border-radius: 4px;
`

// Create a styled input
const StyledInput = styled.input`
	flex: 1;
	border: none;
	outline: none;
	padding: 8px;
`

// Create a styled icon
const EmailIcon = styled.span`
	margin-right: 8px;
`
const Div = styled.div`
	background-color: white;
	padding: 5px;
	position: absolute;
	left: 30px;
	top: 47%;
	transform: translateY(-50%);
	top: ${({ hasValue }) => (hasValue ? '-10px' : '50%')};
	/* top: -25%; */
`
const P = styled.p`
	font-size: 1.4rem;
`

const EmailInput = () => {
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = e => {
		setInputValue(e.target.value)
	}
	return (
		<InputContainer>
			<EmailIcon role="img" aria-label="email-icon">
				<IoPerson />
			</EmailIcon>
			<StyledInput type="text" value={inputValue} onChange={handleInputChange} />
			<Div hasValue={inputValue.length > 0}>
				<P>Email or Password</P>
			</Div>
		</InputContainer>
	)
}

export default EmailInput
