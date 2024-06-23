import { styled } from 'styled-components'
import { Ul, CheakedIcon, Li } from './HeroTittle'
import Cheak from '../../src/data/img/download.png'
import { Link } from 'react-router-dom'
import {
	ThreeMonthCardWrapper,
	ThreeMonthBotton,
	ListWrapper,
	ThreeMonthTittle,
	ThreeMonthSub,
	UlSplite,
	Ul2Splite,
	ShowLess,
} from './ThreeMonthCard'
import { useState } from 'react'

//
const BuySaveWrapper = styled.div`
	/* width: 32rem; */
	display: flex;
	flex-direction: column;
	transition: transform 0.5s ease;
	&:hover {
		transform: scale(1.1) translateZ(20px);
	}
`
const BuySave = styled.div`
	background-color: rgba(102, 75, 199, 1);
	color: rgba(255, 255, 255, 1);
	border-top-right-radius: 4px;
	border-top-left-radius: 4px;
`
const BuySaveP = styled.p`
	text-align: center;
	font-size: 1.4rem;
	font-weight: 600;
	padding: 1.6rem 0;
`

const Year = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid rgba(102, 75, 199, 0.3);
	padding: 4.2rem 3.2rem;
	background-color: rgb(255 255 255);
	border-radius: 4px;
	box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

	@media (max-width: 1010px) {
		flex-direction: row;
		align-items: center;
		gap: 7rem;
	}
	@media (max-width: 765px) {
		gap: 2rem;
	}
	@media (max-width: 690px) {
		flex-direction: column;
	}
`
//
function YearCard() {
	const [show, setShow] = useState(false)
	const handleShow = function () {
		setShow(!show)
	}
	return (
		<BuySaveWrapper>
			<BuySave>
				<BuySaveP>Buy Yearly and Save 60%</BuySaveP>
			</BuySave>
			<Year style={{ borderTopRightRadius: 'none', borderTopLeftRadius: 'none' }}>
				<ThreeMonthBotton>
					<ThreeMonthTittle style={{ fontSize: '2.2rem' }}>
						1 Year <br /> <span style={{ fontSize: '2.8rem' }}>2,360 birr</span>
					</ThreeMonthTittle>
					<Link to="/signup">
						<ThreeMonthSub
							style={{ backgroundColor: 'rgba(22, 163, 74, 1)', color: 'rgb(255 255 255)' }}>
							Get Started
						</ThreeMonthSub>
					</Link>
				</ThreeMonthBotton>
				<ListWrapper>
					<UlSplite>
						<Ul>
							<CheakedIcon src={Cheak} alt="list icon" style={{ width: '1.3rem' }} />
							<Li style={{ fontSize: '1.1rem' }}>Unlimited Tender Access</Li>
						</Ul>
						<Ul>
							<CheakedIcon src={Cheak} alt="list icon" style={{ width: '1.3rem' }} />
							<Li style={{ fontSize: '1.1rem' }}>Daily Email Alert</Li>
						</Ul>
						<Ul>
							<CheakedIcon src={Cheak} alt="list icon" style={{ width: '1.3rem' }} />
							<Li style={{ fontSize: '1.1rem' }}>Daily SMS Alert</Li>
						</Ul>
						<Ul>
							<CheakedIcon src={Cheak} alt="list icon" style={{ width: '1.3rem' }} />
							<Li style={{ fontSize: '1.1rem' }}>Daily Telegram Notification</Li>
						</Ul>
					</UlSplite>
					<Ul2Splite showmore={show}>
						<Ul>
							<CheakedIcon src={Cheak} alt="list icon" style={{ width: '1.3rem' }} />
							<Li style={{ fontSize: '1.1rem' }}>Save Tenders</Li>
						</Ul>
						<Ul>
							<CheakedIcon src={Cheak} alt="list icon" style={{ width: '1.3rem' }} />
							<Li style={{ fontSize: '1.1rem' }}>4 Languages</Li>
						</Ul>
						<Ul>
							<CheakedIcon src={Cheak} alt="list icon" style={{ width: '1.3rem' }} />
							<Li style={{ fontSize: '1.1rem' }}>From All Over Ethiopia</Li>
						</Ul>
						<Ul>
							<CheakedIcon src={Cheak} alt="list icon" style={{ width: '1.3rem' }} />
							<Li style={{ fontSize: '1.1rem' }}>Support Service 24/7</Li>
						</Ul>
					</Ul2Splite>
					<ShowLess onClick={handleShow}>{show ? 'Show less' : 'Show more'}</ShowLess>
				</ListWrapper>
			</Year>
		</BuySaveWrapper>
	)
}

export default YearCard
