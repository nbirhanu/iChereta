import { PiLockKeyFill } from 'react-icons/pi'
import { InputWrapper, InputContainer, Label, Input, IconContainer } from './MyAccountEmailInput'
import { EyeContainer } from '../LOGIN/Loginpassword'
import { IoMdEyeOff } from 'react-icons/io'
import { IoMdEye } from 'react-icons/io'
import { useState } from 'react'
function OldPassword() {
	const [showPassword, setShowpassword] = useState(false)

	const passwordVisibility = function () {
		setShowpassword(!showPassword)
	}
	return (
		<InputWrapper>
			<Label>Old Password</Label>
			<InputContainer>
				<IconContainer>
					<PiLockKeyFill />
				</IconContainer>
				<Input type={showPassword ? 'text' : 'password'} placeholder="" />
				<EyeContainer onClick={passwordVisibility}>
					{showPassword ? <IoMdEyeOff /> : <IoMdEye />}
				</EyeContainer>
			</InputContainer>
		</InputWrapper>
	)
}

export default OldPassword
