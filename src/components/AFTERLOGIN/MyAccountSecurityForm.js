import ConfirmNewPassword from './ConfirmNewPassword'
import { FormContainer } from './MyAccountPersonalForm'
import NewPassword from './NewPassword'
import OldPassword from './OldPassword'
import SecurityButton from './SecurityButton'
import SecurityTitle from './SecurityTitle'
function MyAccountSecurityForm() {
	return (
		<FormContainer>
			<SecurityTitle />
			<OldPassword />
			<NewPassword />
			<ConfirmNewPassword />
			<SecurityButton />
		</FormContainer>
	)
}

export default MyAccountSecurityForm
