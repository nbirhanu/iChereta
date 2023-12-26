import { styled } from 'styled-components'
const AmountContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1.5rem 0;
	gap: 0.8rem;
`
export const P = styled.p`
	font-size: 1rem;
`
export const Span = styled.span`
	font-size: 1.1rem;
	font-weight: 700;
`

function PaymentAmount() {
	return (
		<AmountContainer>
			<P>
				<Span>Amount:</Span> 980.00 Birr
			</P>
			<P>
				<Span>Invoice No:</Span> #7957358706
			</P>
		</AmountContainer>
	)
}

export default PaymentAmount
