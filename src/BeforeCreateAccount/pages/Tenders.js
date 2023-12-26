import { styled } from 'styled-components'
import FetchedTenders from '../../components/TenderComponents/FetchedTenders'
import TenderSideBar from '../../components/TenderComponents/TenderSideBar'
import Tenderheader from '../../components/TenderComponents/Tenderheader'

const TenderWrapper = styled.div`
	position: relative;
	display: flex;
	width: 90%;
	margin: auto;
	height: 90vh;
	margin-top: 6.2rem;
	/* border: solid 1px black; */
`
const Container = styled.div`
	width: 75%;
	height: 90vh;
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 0;
	right: 0;
	@media (max-width: 1085px) {
		width: 100%;
	}
`

function Tenders() {
	return (
		<TenderWrapper>
			<TenderSideBar />
			<Container>
				<Tenderheader />
				<FetchedTenders />
			</Container>
		</TenderWrapper>
	)
}

export default Tenders
