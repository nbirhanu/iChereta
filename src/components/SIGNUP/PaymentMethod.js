import { styled } from 'styled-components'
import OnlineBank from './OnlineBank'
import OnlinePayment from './OnlinePayment'
import BankTransfer from './BankTransfer'

const PaymentWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 42rem;
	height: 43vh;
	border: 1px solid rgba(209, 213, 219, 1);
	margin-top: 2.8rem;
	border-radius: 5px;
	@media (max-width: 500px) {
		width: 40rem;
	}
`
const PaymentTittleContainer = styled.div`
	position: absolute;
	background-color: rgba(255, 255, 255, 1);
	padding: 0.5rem;
	top: -5.5%;
	left: 5%;
`
const PaymentTittle = styled.p`
	font-size: 1.1rem;
`

function PaymentMethod() {
	return (
		<PaymentWrapper>
			<PaymentTittleContainer>
				<PaymentTittle>Payment Methods</PaymentTittle>
			</PaymentTittleContainer>
			<OnlineBank />
			<OnlinePayment />
			<BankTransfer />
		</PaymentWrapper>
	)
}

export default PaymentMethod
