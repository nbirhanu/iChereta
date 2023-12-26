import { styled } from 'styled-components'
import { P, Span } from './PaymentAmount'
import { useAuth } from '../../CONTEXTAPI/ContextApi'

const BankDetailWrapper = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	display: ${({ display }) => (display ? 'block' : 'none')};
`

function BankDetail() {
	const { seletedBank } = useAuth()
	return (
		<>
			<BankDetailWrapper display={seletedBank === 0}>
				<P>
					<Span>Name:</Span> HahuCloud Technologies PLC
				</P>
				<P>
					<Span>Account Number:</Span> 110924607
				</P>
				<P>
					<Span>Amount:</Span> 2,360.00 Birr
				</P>
				<P>
					<Span>Invoice No:</Span> #9547155321
				</P>
			</BankDetailWrapper>
			<BankDetailWrapper display={seletedBank === 1}>
				<P>
					<Span>Name:</Span> HahuCloud Technologies PLC
				</P>
				<P>
					<Span>Account Number:</Span> 1691812807993018
				</P>
				<P>
					<Span>Amount:</Span> 2,360.00 Birr
				</P>
				<P>
					<Span>Invoice No:</Span> #9547155321
				</P>
			</BankDetailWrapper>
			<BankDetailWrapper display={seletedBank === 2}>
				<P>
					<Span>Name:</Span> HahuCloud Technologies PLC
				</P>
				<P>
					<Span>Account Number:</Span> 1000553031307
				</P>
				<P>
					<Span>Amount:</Span> 2,360.00 Birr
				</P>
				<P>
					<Span>Invoice No:</Span> #9547155321
				</P>
			</BankDetailWrapper>
			<BankDetailWrapper display={seletedBank === 3}>
				<P>
					<Span>Name:</Span> HahuCloud Technologies PLC
				</P>
				<P>
					<Span>Account Number:</Span> 013041216244400
				</P>
				<P>
					<Span>Amount:</Span> 2,360.00 Birr
				</P>
				<P>
					<Span>Invoice No:</Span> #9547155321
				</P>
			</BankDetailWrapper>
		</>
	)
}

export default BankDetail
