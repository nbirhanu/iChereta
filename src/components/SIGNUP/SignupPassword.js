import { useState } from 'react'
import { styled } from 'styled-components'
import { PiLockKeyFill } from 'react-icons/pi'
import { IoMdEyeOff } from 'react-icons/io'
import { IoMdEye } from 'react-icons/io'
import {
	InputContainer,
	IconDiv,
	StyleInput,
	PlaceHolderContainer,
	PlaceHolderSpan,
} from '../LOGIN/LoginEmail'
import { useAuth } from '../../CONTEXTAPI/ContextApi'

const EyeContainer = styled.div`
	font-size: 1.8rem;
	color: rgba(148, 163, 184, 1);
`
function SignupPassword() {
	const { handleInputChange, password } = useAuth()

	const [showPassword, setShowpassword] = useState(false)

	const passwordVisibility = function () {
		setShowpassword(!showPassword)
	}

	return (
		<>
			<InputContainer style={{ marginBottom: '1rem' }}>
				<IconDiv>
					<PiLockKeyFill />
				</IconDiv>
				<StyleInput
					type={showPassword ? 'text' : 'password'}
					name="password"
					id="password"
					placeholder=""
					value={password}
					onChange={handleInputChange}
				/>
				<PlaceHolderContainer hasValue={password.length > 0}>
					<PlaceHolderSpan hasValue={password.length > 0}>ፓስዎርድ ያስገቡ</PlaceHolderSpan>
				</PlaceHolderContainer>
				<EyeContainer onClick={passwordVisibility}>
					{showPassword ? <IoMdEyeOff /> : <IoMdEye />}
				</EyeContainer>
			</InputContainer>
		</>
	)
}

export default SignupPassword
