import { styled } from 'styled-components'
import { useAuth } from '../../CONTEXTAPI/ContextApi'

const paymentData = [
	{
		system: 'Online Payment',
	},
	{
		system: 'Bank Transfer',
	},
]

export const OnlineBankContainer = styled.div`
	width: 90%;
	background-color: rgba(255, 255, 255, 1);
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 1.8rem;
	border: 1px solid rgba(61, 89, 132, 0.5);
	border-radius: 9999px;
	padding: 0.5rem;
	gap: 0.2rem;
`
export const OnlineBankDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	background-color: ${({ color }) => (color ? 'rgba(61, 89, 132, 1)' : 'white')};
	border-radius: 9999px;
	cursor: pointer;
	transition: transform 0.3s ease-in-out;
`
export const P = styled.p`
	color: ${({ color }) => (color ? 'rgba(255, 255, 255, 1)' : 'inherite')};
	font-size: 1.1rem;
	padding: 0.8rem 0;
`

function OnlineBank() {
	const { selectedSystem, setSelectedSystem } = useAuth()
	const handleSystemClicked = systemIndex => {
		setSelectedSystem(systemIndex === selectedSystem ? null : systemIndex)
	}
	console.log(selectedSystem)
	return (
		<OnlineBankContainer>
			{paymentData.map((item, index) => (
				<OnlineBankDiv
					key={index}
					onClick={() => handleSystemClicked(index)}
					color={selectedSystem === index}>
					<P color={selectedSystem === index}>{item.system}</P>
				</OnlineBankDiv>
			))}
		</OnlineBankContainer>
	)
}

export default OnlineBank
