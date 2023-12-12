import { styled } from 'styled-components'

const HeroImageDiv = styled.div`
	width: 60rem;
	margin-top: 4.8rem; /* 48px */
	margin-bottom: 4.8rem; /* 48px */
	@media (max-width: 1210px) {
		width: 58rem;
	}
	@media (max-width: 1175px) {
		width: 56rem;
	}
	@media (max-width: 1090px) {
		width: 54rem;
	}
	@media (max-width: 1050px) {
		width: 52rem;
	}
	@media (max-width: 1000px) {
		width: 50rem;
	}
	@media (max-width: 960px) {
		width: 48rem;
	}
	@media (max-width: 870px) {
		display: none;
	}
`
const HeroImageContainer = styled.img`
	width: 100%;
`
function HeroImage() {
	return (
		<HeroImageDiv>
			<HeroImageContainer
				src="https://ichereta.com/static/media/headerImg.8725c96c0c8e3455d30d.png"
				alt="the person staring on the phone"
			/>
		</HeroImageDiv>
	)
}

export default HeroImage
