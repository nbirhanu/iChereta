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
import { useAuth } from '../../CONTEXTAPI/ContextApi'

const EyeContainer = styled.div`
	font-size: 1.8rem;
	color: rgba(148, 163, 184, 1);
	cursor: pointer;
`

function Loginpassword() {
	const { loginPassword, setloginPassword } = useAuth()
	const [showPassword, setShowpassword] = useState(false)

	const passwordVisibility = function () {
		setShowpassword(!showPassword)
	}

	const handleOnChange = function (e) {
		setloginPassword(e.target.value)
	}

	return (
		<InputContainer>
			<IconDiv>
				<PiLockKeyFill />
			</IconDiv>
			<StyleInput
				type={showPassword ? 'text' : 'password'}
				placeholder=""
				value={loginPassword}
				onChange={handleOnChange}
			/>
			<PlaceHolderContainer hasValue={loginPassword.length > 0}>
				<PlaceHolderSpan hasValue={loginPassword.length > 0}>Password</PlaceHolderSpan>
			</PlaceHolderContainer>
			<EyeContainer onClick={passwordVisibility}>
				{showPassword ? <IoMdEyeOff /> : <IoMdEye />}
			</EyeContainer>
		</InputContainer>
	)
}

export default Loginpassword
