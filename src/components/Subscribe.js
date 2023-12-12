import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
//
const SubWrapper = styled.div`
	height: 21rem;
	width: 100%;
	background-color: rgba(102, 75, 199, 1);
	margin-top: 12rem;
	margin-bottom: 10rem;
	position: relative;
`
const ImageWrapper = styled.div`
	width: 70%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: absolute;
	top: -5rem;
	left: 6rem;
`
const GirlImage = styled.img`
	width: 30rem;
	height: auto;
`
const SubBottonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.2rem;
	text-align: center;
	color: rgb(255 255 255);
	margin-bottom: 3.2rem;
`
const SubH1 = styled.h1`
	font-size: 3.8rem;
	font-weight: 700;
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
