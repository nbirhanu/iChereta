import { InputFormWrapper } from '../LOGIN/LoginInput'
import Step1 from './Step1'
import Step2 from './step2'
import { useAuth } from '../../CONTEXTAPI/ContextApi'
import Step3 from './Step3'

function SignupInput() {
	const { step } = useAuth()

	return (
		<InputFormWrapper style={{ marginTop: '2.8rem' }}>
			{step === 1 && <Step1 />}
			{step === 2 && <Step2 />}
			{step === 3 && <Step3 />}
		</InputFormWrapper>
	)
}

export default SignupInput
