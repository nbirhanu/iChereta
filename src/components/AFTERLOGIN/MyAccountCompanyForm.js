import Companytitle from './Companytitle'
import MyAccountAddressInput from './MyAccountAddressInput'
import MyAccountCompanyButton from './MyAccountCompanyButton'
import MyAccountCompanyNameInput from './MyAccountCompanyNameInput'
import { FormContainer } from './MyAccountPersonalForm'
import MyAccountTinInput from './MyAccountTinInput'

function MyAccountCompanyForm() {
	return (
		<FormContainer>
			<Companytitle />
			<MyAccountCompanyNameInput />
			<MyAccountTinInput />
			<MyAccountAddressInput />
			<MyAccountCompanyButton />
		</FormContainer>
	)
}

export default MyAccountCompanyForm
