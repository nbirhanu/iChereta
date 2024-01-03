import BillingTitle from '../../components/AFTERLOGIN/BillingTitle'
import Invoice from '../../components/AFTERLOGIN/Invoice'
import InvoicesList from '../../components/AFTERLOGIN/InvoicesList'
import AfterLoginHeader from './AfterLoginHeader'
import { MyAccountWrapper, MyAccountContainer } from './MyAccountPage'

function BillingPage() {
	return (
		<>
			<AfterLoginHeader />
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
