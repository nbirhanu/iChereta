import { styled } from 'styled-components'
import PaymentMethod from './PaymentMethod'
import PaymentMethodTittle from './PaymentMethodTittle'

const Step3Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

function Step3() {
	return (
		<Step3Wrapper>
			<PaymentMethodTittle />
			<PaymentMethod />
		</Step3Wrapper>
	)
}

export default Step3
