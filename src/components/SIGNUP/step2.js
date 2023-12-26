import SignupEmail from './SignupEmail'
import SignupPassword from './SignupPassword'
import Step2Button from './Step2Button'
import SubscriptionChoice from './SubscriptionChoice'
import SupscriptionTittle from './SupscriptionTittle'

function Step2() {
	return (
		<>
			<SupscriptionTittle />
			<SubscriptionChoice />
			<SignupEmail />
			<SignupPassword />
			<Step2Button />
		</>
	)
}

export default Step2
