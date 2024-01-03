import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
//
const SubWrapper = styled.div`
	position: relative;
	height: 21rem;
	width: 100%;
	background-color: rgba(102, 75, 199, 1);
	margin-top: 12rem;
	margin-bottom: 10rem;
	@media (max-width: 1010px) {
		height: 19rem;
	}
	@media (max-width: 950px) {
		height: 21rem;
		margin-top: 6rem;
		margin-bottom: 6rem;
	}
	@media (max-width: 950px) {
		height: 20rem;
		margin-top: 4rem;
		margin-bottom: 4rem;
	}
`
const ImageWrapper = styled.div`
	width: 70%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: absolute;
	top: -5rem;
	left: 6rem;
	@media (max-width: 1010px) {
		left: 10rem;
	}
`
const GirlImage = styled.img`
	width: 30rem;
	height: auto;
	@media (max-width: 1010px) {
		width: 28rem;
	}
	@media (max-width: 950px) {
		display: none;
	}
`
const SubBottonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.2rem;
	text-align: center;
	color: rgb(255 255 255);
	@media (max-width: 950px) {
		top: 8rem;
		left: 0;
		right: 0;

		margin-left: auto;
		margin-right: auto;

		position: absolute;
	}
	@media (max-width: 575px) {
		margin-left: -2rem;
	}
	@media (max-width: 520px) {
		margin-left: -3rem;
	}

	@media (max-width: 500px) {
		margin-left: -4rem;
	}
	@media (max-width: 400px) {
		margin-left: -6rem;
	}
`
const SubH1 = styled.h1`
	font-size: 3.8rem;
	font-weight: 700;
	@media (max-width: 1010px) {
		font-size: 3.4rem;
	}
	@media (max-width: 950px) {
		font-size: 4rem;
	}
	@media (max-width: 520px) {
		font-size: 3.4rem;
	}
	@media (max-width: 500px) {
		font-size: 3.2rem;
	}
	@media (max-width: 400px) {
		font-size: 2.8rem;
	}
`
const SubH2 = styled.h2`
	font-size: 2rem;
	font-weight: 600;
`
const SubBotton = styled.button`
	background-color: rgba(235, 186, 92, 1);
	color: rgba(255, 255, 255, 0.8);
	font-weight: 600;
	border: none;
	padding: 1.2rem 3.2rem;
	border-radius: 5px;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background-color: rgba(202, 138, 4, 0.8);
	}
`

//

function Subscribe() {
	return (
		<SubWrapper>
			<ImageWrapper>
				<GirlImage
					src="https://ichereta.com/static/media/girl.ae78bddeaa22fdf11003.png"
					alt="the girl with pc"
				/>
				<SubBottonWrapper>
					<SubH1>ሁሉንም ጨረታ በአንድ ቦታ!</SubH1>
					<SubH2>ከመላው ኢትዮጵያ በአንድ ቦታ።</SubH2>
					<Link to="/signup">
						<SubBotton>Subscribe Now</SubBotton>
					</Link>
				</SubBottonWrapper>
			</ImageWrapper>
		</SubWrapper>
	)
}

export default Subscribe
