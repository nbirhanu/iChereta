import { styled } from 'styled-components'

const StyledMain = styled.div`
	background-color: rgba(248, 248, 255, 0.7);
	height: 80vh;
	padding: 1rem;
	overflow: auto;
	&::-webkit-scrollbar {
		display: none;
	}
`

function FetchedTenders() {
	return <StyledMain></StyledMain>
}

export default FetchedTenders
