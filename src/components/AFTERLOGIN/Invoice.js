import { OnlineBankDiv, P } from '../SIGNUP/OnlineBank'
import { MyAccountChoiceContainer } from './MyAccountChoice'
function Invoice() {
	return (
		<MyAccountChoiceContainer style={{ width: '35%' }}>
			<OnlineBankDiv style={{ backgroundColor: 'rgba(61, 89, 132, 1)', width: '98%' }}>
				<P style={{ color: 'rgba(255, 255, 255, 1)' }}>INVOICES</P>
			</OnlineBankDiv>
		</MyAccountChoiceContainer>
	)
}

export default Invoice
