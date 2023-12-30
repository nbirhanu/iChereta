import { PiLockKeyFill } from 'react-icons/pi'
import { InputWrapper, InputContainer, Label, Input, IconContainer } from './MyAccountEmailInput'
import { EyeContainer } from '../LOGIN/Loginpassword'
import { IoMdEyeOff } from 'react-icons/io'
import { IoMdEye } from 'react-icons/io'
import { useState } from 'react'
function NewPassword() {
	const [showPassword, setShowpassword] = useState(false)

	const passwordVisibility = function () {
		setShowpassword(!showPassword)
	}
	return (
		<InputWrapper>
			<Label>New Password</Label>
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

export default NewPassword
