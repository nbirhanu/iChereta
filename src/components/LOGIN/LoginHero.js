import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const LoginHeroWrapper = styled.div`
	background-color: rgba(102, 75, 199, 1);
	height: 100%;
	@media (max-width: 900px) {
		display: none;
	}
`
const LoginHeroLogo = styled.img`
	width: 25%;
	margin-top: 1.8rem;
	margin-left: 3.4rem;
`
const LoginHeroImageContainer = styled.div`
	height: 78%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	/* gap: 6rem; */
	margin-top: 6.8rem;
	/* @media (max-width: 1000px) {
		justify-content: space-around;
	} */
`
const Image = styled.img`
	width: 80%;
	@media (max-width: 1150px) {
		margin-top: 4rem;
	}
	@media (max-width: 1050px) {
		margin-top: 5rem;
	}
	@media (max-width: 1000px) {
		margin-top: 6rem;
	}
`
const CopyRight = styled.p`
	color: rgba(190, 180, 225, 1);
	font-size: 1.1rem;
	font-weight: 700;
	text-align: center;
`

function LoginHero() {
	return (
		<LoginHeroWrapper>
			<Link to="/">
				<LoginHeroLogo
					src="https://ichereta.com/static/media/logowhite.d1fba78f1b78888f06e0aae78a50b523.svg"
					alt="ichereta companies logo"
				/>
			</Link>
			<LoginHeroImageContainer>
				<Image src="https://ichereta.com/static/media/girl.ae78bddeaa22fdf11003.png" alt="girl" />
				<CopyRight>
					© 2023 — iChereta™ <br />
					Powered by HahuCloud Technologies PLC
				</CopyRight>
			</LoginHeroImageContainer>
		</LoginHeroWrapper>
	)
}

export default LoginHero
