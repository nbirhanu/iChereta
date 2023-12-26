import { styled } from 'styled-components'
import SearchTittle from './SearchTittle'
import TenderSearchForm from './TenderSearchForm'

const SideBarWrapper = styled.div`
	width: 25%;
	height: 90vh;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	@media (max-width: 1085px) {
		display: none;
	}
`
const SideBarContainer = styled.div`
	width: 95%;
	display: flex;
	flex-direction: column;
`

function TenderSideBar() {
	return (
		<SideBarWrapper>
			<SideBarContainer>
				<SearchTittle />
				<TenderSearchForm />
			</SideBarContainer>
		</SideBarWrapper>
	)
}

export default TenderSideBar
