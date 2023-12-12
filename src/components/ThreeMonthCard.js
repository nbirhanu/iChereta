import { styled } from 'styled-components'
// import { Ul, CheakedIcon, Li } from './hero'
import { Ul, CheakedIcon, Li } from './HeroTittle'
import Cheak from '../../src/data/img/download.png'
import { Link } from 'react-router-dom'
//
export const ThreeMonthCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid rgba(102, 75, 199, 0.3);
	padding: 4.2rem 3.2rem;
	background-color: rgb(255 255 255);
	border-radius: 4px;
	box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`
export const ThreeMonthBotton = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
export const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 2.4rem;
	row-gap: 0.4rem;
`
//
export const ThreeMonthTittle = styled.p`
	color: rgba(55, 65, 81, 1);
	font-weight: 600;
	font-size: 1.8rem;
	text-align: center;
	margin-bottom: 2rem;
`
export const ThreeMonthSub = styled.button`
	color: rgba(22, 163, 74, 1);
	background-color: rgb(255 255 255);
	border: 1px solid rgba(22, 163, 74, 1);
	padding: 0.9rem 8.4rem;
	border-radius: 4px;
	transition: 0.3s;
	&:hover {
		color: white;
		background-color: #16a34a;
	}
`

function ThreeMonthCard() {
	return (
		<ThreeMonthCardWrapper>
			<ThreeMonthBotton>
				<ThreeMonthTittle>
					3 Months <br /> <span style={{ fontSize: '2.4rem' }}>980 birr</span>
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

export default ThreeMonthCard
