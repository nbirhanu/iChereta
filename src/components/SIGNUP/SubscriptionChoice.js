import { styled } from 'styled-components'
import { BsCircle } from 'react-icons/bs'
import { IoIosCheckmarkCircle } from 'react-icons/io'

import { useAuth } from '../../CONTEXTAPI/ContextApi'

const choiceData = [
	{
		month: '3 month',
		Price: '980 birr',
	},
	{
		month: '1 year',
		Price: '1480 birr',
	},
	{
		month: '6 month',
		Price: '2360 birr',
	},
]

export const ChoiceWrapper = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 1.8rem;
`

export const ChoiceContainer = styled.div`
	width: 14.3rem;
	height: 10rem;
	border: 1px solid rgba(209, 213, 219, 1);
	padding: 1rem;
	transition: 0.1s;
	background-color: ${({ isSelected }) =>
		isSelected ? 'rgba(102 ,75, 199,1)' : 'rgba(255, 255, 255, 1)'};
	border-radius: 4px;
	cursor: pointer;
	@media (max-width: 600px) {
		max-width: 12.6rem;
	}
	@media (max-width: 450px) {
		max-width: 11rem;
	}
	@media (max-width: 400px) {
		max-width: 10rem;
	}
`

export const PContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	gap: 0.5rem;
	color: ${({ color }) => (color ? 'rgba(255, 255, 255,1)' : 'rgba(55, 65 ,81,1)')};
`

const Month = styled.p`
	font-size: 1.2rem;
`

const Money = styled.p`
	font-size: 1.6rem;
	font-weight: 500;
`

function SubscriptionChoice() {
	const { selectedCard, setSelectedCard } = useAuth()

	const handleCardClick = cardIndex => {
		setSelectedCard(cardIndex === selectedCard ? null : cardIndex)
	}
	return (
		<ChoiceWrapper>
			{choiceData.map((item, index) => (
				<ChoiceContainer
					key={index}
					isSelected={selectedCard === index}
					onClick={() => handleCardClick(index)}>
					{selectedCard === index ? (
						<IoIosCheckmarkCircle style={{ color: 'rgba(255, 255, 255,1)', fontSize: '1.2rem' }} />
					) : (
						<BsCircle />
					)}
					<PContainer color={selectedCard === index}>
						<Month>{item.month}</Month>
						<Money>{item.Price}</Money>
					</PContainer>
				</ChoiceContainer>
			))}
		</ChoiceWrapper>
	)
}

export default SubscriptionChoice
