import { styled } from 'styled-components'

const SearchContainer = styled.div`
	background-color: rgba(102, 75, 199, 0.05);
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
`
const SearchP = styled.p`
	color: rgba(102, 75, 199, 0.7);
	font-size: 1.4rem;
	font-weight: 600;
	line-height: 2.8rem;
`

function SearchTittle() {
	return (
		<SearchContainer>
			<SearchP>Search Tenders</SearchP>
		</SearchContainer>
	)
}

export default SearchTittle
