import { styled } from 'styled-components'
import { useState } from 'react'

import TenderSearchMenu from './TenderSearchMenu'

const headerData = [
	{
		category: 'All Tenders',
	},
	{
		category: 'Construction and Water Work',
	},
	{
		category: 'Sale, Deposals and Foreclosure',
	},
	// {
	// 	category: 'Electrical, Electromechanical and Electronics',
	// },
	// {
	// 	category: 'Office Supplies and Services',
	// },
]

const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	background-color: rgba(255, 255, 255, 1);
	height: 5rem;
	border-bottom: 1px solid rgba(102, 75, 199, 0.1);
	gap: 1.2rem;
	@media (max-width: 900px) {
		margin-left: 2.4rem;
	}
`
const CategoryContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border: 1px solid rgba(209, 213, 219, 1);

	transition: 0.1s;
	background-color: ${({ isSelected }) =>
		isSelected ? 'rgba(102 ,75, 199,1)' : 'rgba(255 ,255, 255,1)'};
	border: 1px solid rgba(209, 213, 219, 1);
	border-radius: 5px;
`
const P = styled.p`
	font-size: 1.1rem;
	font-weight: 500;
	padding: 0.8rem 1.4rem;
	color: ${({ color }) => (color ? 'rgba(255, 255, 255,1)' : 'rgba(102, 75 ,199,1)')};
`

//

function Tenderheader() {
	const [selectedCategory, setSelectedCategory] = useState(0)
	const handleCardClick = cardIndex => {
		setSelectedCategory(cardIndex === selectedCategory ? null : cardIndex)
	}
	return (
		<HeaderWrapper>
			<TenderSearchMenu />
			{headerData.map((item, index) => (
				<CategoryContainer
					key={index}
					onClick={() => handleCardClick(index)}
					isSelected={selectedCategory === index}>
					<P color={selectedCategory === index}>{item.category}</P>
				</CategoryContainer>
			))}
		</HeaderWrapper>
	)
}

export default Tenderheader
