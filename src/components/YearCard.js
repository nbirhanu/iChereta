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
			<ThreeMonthCardWrapper style={{ borderTopRightRadius: 'none', borderTopLeftRadius: 'none' }}>
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
			</ThreeMonthCardWrapper>
		</BuySaveWrapper>
	)
}

export default YearCard
