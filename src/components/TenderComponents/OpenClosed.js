import { styled } from 'styled-components'
import { ChoiceWrapper, ChoiceContainer, PContainer } from '../SIGNUP/SubscriptionChoice'
import { useState } from 'react'

const P = styled.p`
	font-size: 1.4rem;
`

const openClosedData = [
	{
		name: 'All',
	},
	{
		name: 'Open',
	},
	{
		name: 'Close',
	},
]

function OpenClosed() {
	const [selectedCard, setSelectedCard] = useState(0)

	const handleCardClick = cardIndex => {
		setSelectedCard(cardIndex === selectedCard ? null : cardIndex)
	}
	return (
		<ChoiceWrapper style={{ marginBottom: '0.8rem' }}>
			{openClosedData.map((item, index) => (
				<ChoiceContainer
					style={{ height: '5rem', width: '12rem' }}
					key={index}
					isSelected={selectedCard === index}
					onClick={() => handleCardClick(index)}>
					{/* {selectedCard === index && <IoIosCheckmarkCircle />} */}
					<PContainer color={selectedCard === index}>
						<P>{item.name}</P>
					</PContainer>
				</ChoiceContainer>
			))}
		</ChoiceWrapper>
	)
}

export default OpenClosed
