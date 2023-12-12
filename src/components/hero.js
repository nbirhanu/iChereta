import { styled } from 'styled-components'
import HeroTittle from './HeroTittle'
import HeroImage from './HeroImage'

const HeroWrapper = styled.div`
	width: 100%;
	margin-top: 6rem;
	background-color: rgba(239, 246, 255, 0.3);
	/* background-color: red; */
`
const HeroDiv = styled.div`
	display: flex;
	justify-content: space-between;
	width: 87%;
	margin: auto;
	/* background-color: blue; */
	@media (max-width: 1225px) {
		gap: 1.2rem;
	}
	@media (max-width: 870px) {
		width: 85%;
		display: grid;
		grid-template-columns: 1.5fr 0.5fr;
	}
	@media (max-width: 800px) {
		width: 85%;
		display: grid;
		grid-template-columns: 1.75fr 0.25fr;
	}
	@media (max-width: 670px) {
		width: 85%;
		display: grid;
		grid-template-columns: 1fr;
	}
`
//

function hero() {
	return (
		<HeroWrapper>
			<HeroDiv>
				<HeroTittle />
				<HeroImage />
			</HeroDiv>
		</HeroWrapper>
	)
}

export default hero
