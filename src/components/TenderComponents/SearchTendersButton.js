import { styled } from 'styled-components'

const TenderSearch = styled.div`
	width: 100%;
	background-color: green;
	text-align: center;
	padding: 1rem;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(102, 75, 199, 0.9);
`
const P = styled.p`
	font-size: 1.4rem;
`

function SearchTendersButton() {
	return (
		<TenderSearch>
			<P>Search</P>
		</TenderSearch>
	)
}

export default SearchTendersButton
