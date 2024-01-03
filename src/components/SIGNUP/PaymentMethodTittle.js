import { styled } from 'styled-components'

const TittleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
`
const Greeting = styled.h1`
	font-size: 2.6rem;
	font-weight: 700;
	color: rgba(102, 75, 199, 1);
	@media (max-width: 500px) {
		font-size: 2.4rem;
	}
`
const Span = styled.span`
	color: rgba(34, 197, 94, 1);
	font-weight: 600;
	font-size: 1.6rem;
`
const P1 = styled.p`
	color: rgba(102, 75, 199, 1);
	font-weight: inherit;
	font-size: 1.5rem;
	letter-spacing: 0.4px;
	@media (max-width: 500px) {
		font-size: 1.3rem;
	}
	@media (max-width: 400px) {
		font-size: 1.2rem;
	}
`
const P2 = styled.p`
	font-size: 1.2rem;
	font-weight: 700;
	color: rgba(75, 85, 99, 1);
	letter-spacing: 0.2px;
	@media (max-width: 500px) {
		font-size: 1rem;
	}
`

function PaymentMethodTittle() {
	return (
		<TittleContainer>
			<Greeting>ሰላም 👋 , lll!</Greeting>
			<P1>
				You've <Span>successfully</Span> created your iChereta Account.
			</P1>
			<P2>የiChereta አካውንቶ አክቲቭ አይደለም ፣ ጨረታዎችን ለመመልከት ክፍያ ይፍጽሙ!</P2>
		</TittleContainer>
	)
}

export default PaymentMethodTittle
