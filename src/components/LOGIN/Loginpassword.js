import { styled } from 'styled-components'
import { PiLockKeyFill } from 'react-icons/pi'
import { IoMdEyeOff } from 'react-icons/io'
import { IoMdEye } from 'react-icons/io'
import { useState } from 'react'

import {
	InputContainer,
	IconDiv,
	StyleInput,
	PlaceHolderContainer,
	PlaceHolderSpan,
} from './LoginEmail'

const EyeContainer = styled.div`
	font-size: 1.8rem;
	color: rgba(148, 163, 184, 1);
	cursor: pointer;
`

function Loginpassword() {
	const [password, setPassword] = useState('')
	const [showPassword, setShowpassword] = useState(false)

	const passwordVisibility = function () {
		setShowpassword(!showPassword)
	}

	const handleOnChange = function (e) {
		setPassword(e.target.value)
	}

	return (
		<InputContainer>
			<IconDiv>
				<PiLockKeyFill />
			</IconDiv>
			<StyleInput
				type={showPassword ? 'text' : 'password'}
				placeholder=""
				value={password}
				onChange={handleOnChange}
			/>
			<PlaceHolderContainer hasValue={password.length > 0}>
				<PlaceHolderSpan hasValue={password.length > 0}>Password</PlaceHolderSpan>
			</PlaceHolderContainer>
			<EyeContainer onClick={passwordVisibility}>
				{showPassword ? <IoMdEyeOff /> : <IoMdEye />}
			</EyeContainer>
		</InputContainer>
	)
}

export default Loginpassword
