import { MyAccountTittleWrapper, P1, P2 } from './MyAccountTitle'

function BillingTitle() {
	return (
		<MyAccountTittleWrapper>
			<P1>SUBSCRIPTION</P1>
			<P2>
				1 Year - <span style={{ color: 'rgba(239, 68, 68,1)' }}>Inactive Subscription</span>
			</P2>
		</MyAccountTittleWrapper>
	)
}

export default BillingTitle
