import { styled } from 'styled-components'
import { IoNewspaperOutline } from 'react-icons/io5'
import { SlFeed } from 'react-icons/sl'
import { CiSaveDown2 } from 'react-icons/ci'
import { useAuth } from '../../CONTEXTAPI/ContextApi'
import { Link } from 'react-router-dom'

const data = [
	{
		icon: <IoNewspaperOutline style={{ width: '100%', height: '100%' }} />,
		title: 'Tenders',
	},
	{
		icon: <SlFeed style={{ width: '100%', height: '100%' }} />,
		title: 'My Feed',
	},
	{
		icon: <CiSaveDown2 style={{ width: '100%', height: '100%' }} />,
		title: 'Saved',
	},
]

const FixedFooterWrapper = styled.div`
	display: none;
	@media (max-width: 800px) {
		display: block;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: hsla(0, 0%, 100%, 0.9);
		border-top: 1px solid rgb(226 232 240);
		backdrop-filter: blur(3px);
		color: white;
		z-index: 1000;
		padding-top: 0.8rem;
		padding-bottom: 0.8rem;
	}
`

const FixedFooterContainer = styled.div`
	width: 80%;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: rgba(102, 75, 199, 1);
`

const Container = styled.div`
	width: 75px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${({ color }) => (color ? 'rgba(102, 75, 199, 0.2)' : '')};
	cursor: pointer;
	padding-top: 1.2rem;
	padding-bottom: 1rem;
	border-top-right-radius: 5px;
	border-top-left-radius: 5px;
	gap: 6px;
	@media (max-width: 700px) {
		width: 72px;
		padding-top: 1.1rem;
		padding-bottom: 0.9rem;
	}
	@media (max-width: 450px) {
		width: 70px;
		padding-top: 1rem;
		padding-bottom: 0.8rem;
	}
`

const Icon = styled.div`
	width: 2.2rem;
	height: 2.2rem;
	@media (max-width: 700px) {
		width: 2rem;
		height: 2rem;
	}
	@media (max-width: 450px) {
		width: 1.8rem;
		height: 1.8rem;
	}
`
const P = styled.p`
	font-size: 1.2rem;
	font-weight: 700;
	@media (max-width: 700px) {
		font-size: 1.1rem;
	}
	@media (max-width: 450px) {
		font-size: 1rem;
	}
`

function FixedFooter() {
	const { selectedTender, setSelectedTender } = useAuth()

	const handleTender = function (index) {
		setSelectedTender(index === selectedTender ? null : index)
	}
	return (
		<FixedFooterWrapper>
			<FixedFooterContainer>
				{data.map((item, index) => (
					<Link
						style={{ textDecoration: 'none', color: 'rgba(102, 75, 199, 1)' }}
						key={index}
						to={
							(index === 0 && '/tender') || (index === 1 && '/feed') || (index === 2 && '/saved')
						}>
						<Container color={selectedTender === index} onClick={() => handleTender(index)}>
							<Icon>{item.icon}</Icon>
							<P>{item.title}</P>
						</Container>
					</Link>
				))}
			</FixedFooterContainer>
		</FixedFooterWrapper>
	)
}

export default FixedFooter
