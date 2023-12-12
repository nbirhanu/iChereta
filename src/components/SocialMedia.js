import { styled } from 'styled-components'
import SocialMediaApp from './SocialMediaApp'
import AboutUs from './AboutUs'

//style Logo
const Logo = styled.img`
	width: 10.8rem;
	opacity: 0.5;
`

//style copyright
const CopyRightWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: hsla(0, 0%, 100%, 0.6);
	line-height: 1.5;
`
const Year = styled.p`
	font-weight: 700;
	font-size: 1.2rem;
`
const PLC = styled.p`
	font-weight: 700;
	font-size: 1.2rem;
`

//
function SocialMedia() {
	return (
		<>
			<Logo
				src="	https://ichereta.com/static/media/logowhite.d1fba78f1b78888f06e0aae78a50b523.svg"
				alt="ichereta logo"
			/>
			<CopyRightWrapper>
				<Year>© 2023 - iChereta™</Year>
				<PLC>By HahuCloud Technologies PLC</PLC>
			</CopyRightWrapper>
			<SocialMediaApp />
			<AboutUs />
		</>
	)
}

export default SocialMedia
