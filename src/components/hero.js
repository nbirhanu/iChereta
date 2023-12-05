import { styled } from 'styled-components'
import Cheak from '../../src/data/img/download.png'
import Graph from '../../src/data/img/graph.png'
import { Link } from 'react-router-dom'

const HeroWrapper = styled.div`
	width: 100%;

	margin-top: 6rem;
	background-color: rgba(239, 246, 255, 0.3);
`
const HeroDiv = styled.div`
	display: flex;
	justify-content: space-between;
	width: 87%;
	margin: auto;
`
//
const HeroImageDiv = styled.div`
	width: 60rem;
	margin-top: 4.8rem; /* 48px */
	margin-bottom: 4.8rem; /* 48px */
`
const HeroImage = styled.img`
	width: 100%;
`
//
const HeroTittle = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 5.4rem; /* 48px */
	margin-bottom: 4.8rem; /* 48px */
	color: #664bc7;
`
const HeroH1 = styled.h1`
	font-size: 4.8rem;
	font-weight: 600;
	line-height: 1;
`
//
const UlDiv = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 4rem;
`
export const Ul = styled.ul`
	display: flex;
	align-items: center;
	list-style-type: none;
	margin-bottom: 0.5rem;
`
export const Li = styled.li`
	font-size: 1.2rem;
	font-weight: 400;
`
export const CheakedIcon = styled.img`
	width: 1.4rem;
	margin-right: 0.8rem;
`
//
const ButtonWrapper = styled.div`
	display: grid;
	grid-template-columns: 0.75fr 1.25fr;
	margin-top: 3.2rem;
	column-gap: 1.5rem;
`
const Signup = styled.p`
	width: 100%;
	color: rgb(255 255 255);
	background-color: rgb(102 75 199);
	text-align: center;
	padding: 1rem 1.2rem;
	border-color: rgb(102 75 199);
	border-radius: 4px;
	font-size: 1.5rem;
	cursor: pointer;
	&:hover {
		background-color: #664bc7;
	}
`
const Login = styled.p`
	border: 1px solid #664bc7;
	width: 40%;
	font-size: 1.5rem;
	text-align: center;
	padding: 1rem 1.2rem;
	border-radius: 4px;
`
const GraphDiv = styled.div`
	display: flex;
	flex-direction: column;
	/* align-items: center;
	justify-content: flex-start; */
`
const GraphImg = styled.img`
	width: 5rem;
	margin-left: 4rem;
`
const GraphP = styled.p`
	margin-left: 1rem;
`
//

function hero() {
	return (
		<HeroWrapper>
			<HeroDiv>
				<HeroTittle>
					<HeroH1>
						Fast & Convenient <br /> Tender Alert Service.
					</HeroH1>

					<UlDiv>
						<div>
							<Ul>
								<CheakedIcon src={Cheak} alt="cheaked" />
								<Li>Daily Email Alert</Li>
							</Ul>
							<Ul>
								<CheakedIcon src={Cheak} alt="cheaked" />
								<Li>Daily Telegram Notification</Li>
							</Ul>
							<Ul>
								<CheakedIcon src={Cheak} alt="cheaked" />
								<Li>Daily SMS Alert</Li>
							</Ul>
						</div>
						<div>
							<Ul>
								<CheakedIcon src={Cheak} alt="cheaked" />
								<Li>4 Languages</Li>
							</Ul>
							<Ul>
								<CheakedIcon src={Cheak} alt="cheaked" />
								<Li>From All Over Ethiopia</Li>
							</Ul>
							<Ul>
								<CheakedIcon src={Cheak} alt="cheaked" />
								<Li>Unlimited Tender Access</Li>
							</Ul>
						</div>
					</UlDiv>
					<ButtonWrapper>
						<Link style={{ textDecoration: 'none' }} to="/signup">
							<Signup>Create Account</Signup>
						</Link>

						<Link style={{ textDecoration: 'none' }} to="/login">
							<Login>Login</Login>
						</Link>
						<GraphDiv>
							<GraphImg src={Graph} alt="graph" />
							<GraphP>
								unlimited Tender Access <br /> Starting from 980birr/3 Months
							</GraphP>
						</GraphDiv>
					</ButtonWrapper>
				</HeroTittle>
				<HeroImageDiv>
					<HeroImage
						src="https://ichereta.com/static/media/headerImg.8725c96c0c8e3455d30d.png"
						alt="the person staring on the phone"
					/>
				</HeroImageDiv>
			</HeroDiv>
		</HeroWrapper>
	)
}

export default hero
