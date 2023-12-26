import { styled } from 'styled-components'
import { useAuth } from '../../CONTEXTAPI/ContextApi'
import PaymentAmount from './PaymentAmount'
import PaymentMethodLogo from './PaymentMethodLogo'
import OnlineButon from './OnlineButon'

const OnlineWrapper = styled.div`
	width: 90%;
	display: ${({ display }) => (display ? 'block' : 'none')};
`

function OnlinePayment() {
	const { selectedSystem } = useAuth()
	return (
		<OnlineWrapper display={selectedSystem === 0}>
			<PaymentAmount />
			<PaymentMethodLogo />
			<OnlineButon />
		</OnlineWrapper>
	)
}

export default OnlinePayment
