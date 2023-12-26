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

function SixMonthCard() {
	const [show, setShow] = useState(false)
	const handleShow = function () {
		setShow(!show)
	}
	return (
		<ThreeMonthCardWrapper>
			<ThreeMonthBotton>
				<ThreeMonthTittle>
					6 Months <br /> <span style={{ fontSize: '2.4rem' }}>1480 birr</span>
				</ThreeMonthTittle>
				<Link to="/signup">
					<ThreeMonthSub>Get Started</ThreeMonthSub>
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
	)
}

export default SixMonthCard
