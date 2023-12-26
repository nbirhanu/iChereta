import { styled } from 'styled-components'
// import { Ul, CheakedIcon, Li } from './hero'
import { Ul, CheakedIcon, Li } from './HeroTittle'
import Cheak from '../../src/data/img/download.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
//
export const ThreeMonthCardWrapper = styled.div`
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
	@media (max-width: 1010px) {
		flex-direction: row;
		gap: 3.2rem;
	}
	@media (max-width: 765px) {
		gap: 1.8rem;
	}
	@media (max-width: 690px) {
		gap: 3.8rem;
	}
	@media (max-width: 520px) {
		flex-direction: column;
		gap: 0;
	}
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
	width: 22rem;
	color: rgba(22, 163, 74, 1);
	background-color: rgb(255 255 255);
	border: 1px solid rgba(22, 163, 74, 1);
	padding: 0.9rem;
	border-radius: 4px;
	transition: 0.3s;
	cursor: pointer;

	&:hover {
		color: white;
		background-color: #16a34a;
	}
`
export const UlSplite = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
`

export const Ul2Splite = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	@media (max-width: 520px) {
		display: ${({ showmore }) => (showmore ? 'block' : 'none')};
	}
`
export const ShowLess = styled.p`
	cursor: pointer;
	display: none;
	@media (max-width: 520px) {
		display: block;
		color: rgba(102, 75, 199, 1);
	}
`

function ThreeMonthCard() {
	const [show, setShow] = useState(false)
	const handleShow = function () {
		setShow(!show)
	}
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

export default ThreeMonthCard
