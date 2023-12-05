import { styled } from 'styled-components'
import ThreeMonthCard from './ThreeMonthCard'
import YearCard from './YearCard'
import SixMonthCard from './SixMonthCard'
const PriceWrapper = styled.div`
	width: 88%;
	margin: auto;
	background-color: rgba(249, 248, 253, 0.8);
	margin-bottom: 5rem;
`
const CardWrapper = styled.div`
	padding: 6rem 5rem;
	display: flex;
	align-items: center;
	justify-content: space-around;
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
