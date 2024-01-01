import BillingTitle from '../../components/AFTERLOGIN/BillingTitle'
import Invoice from '../../components/AFTERLOGIN/Invoice'
import InvoicesList from '../../components/AFTERLOGIN/InvoicesList'
import { MyAccountWrapper, MyAccountContainer } from './MyAccountPage'

function BillingPage() {
	return (
		<>
			<MyAccountWrapper>
				<MyAccountContainer>
					<BillingTitle />
					<Invoice />
					<InvoicesList />
				</MyAccountContainer>
			</MyAccountWrapper>
		</>
	)
}

export default BillingPage
