import { styled } from 'styled-components'
import ThreeMonthCard from './ThreeMonthCard'
import YearCard from './YearCard'
import SixMonthCard from './SixMonthCard'
const PriceWrapper = styled.div`
	width: 88%;
	margin: auto;
	background-color: rgba(249, 248, 253, 0.8);
	margin-bottom: 5rem;
	@media (max-width: 1100px) {
		background-color: white;
	}
`
const CardWrapper = styled.div`
	width: 100%;
	padding: 5rem 0;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5.2rem;
	@media (max-width: 1100px) {
		justify-content: space-between;
		gap: 0;
	}
	@media (max-width: 1010px) {
		flex-direction: column;
		gap: 2.8rem;
	}
`

//
function PricingCard() {
	return (
		<PriceWrapper>
			<CardWrapper>
				<ThreeMonthCard />
				<YearCard />
				<SixMonthCard />
			</CardWrapper>
		</PriceWrapper>
	)
}

export default PricingCard
