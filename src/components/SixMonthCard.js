import { styled } from 'styled-components'
import { Ul, CheakedIcon, Li } from './hero'
import Cheak from '../../src/data/img/download.png'
import { Link } from 'react-router-dom'
import {
	ThreeMonthCardWrapper,
	ThreeMonthBotton,
	ListWrapper,
	ThreeMonthTittle,
	ThreeMonthSub,
} from './ThreeMonthCard'
//

function SixMonthCard() {
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
			</ListWrapper>
		</ThreeMonthCardWrapper>
	)
}

export default SixMonthCard
