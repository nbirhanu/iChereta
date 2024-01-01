import { styled } from 'styled-components'
import { useAuth } from '../../CONTEXTAPI/ContextApi'
import { OnlineBankDiv, P } from '../SIGNUP/OnlineBank'

const myAccountData = [
	{
		title: 'Personal',
	},
	{
		title: 'Company',
	},
	{
		title: 'Security',
	},
]

export const MyAccountChoiceContainer = styled.div`
	width: 90%;
	background-color: rgba(255, 255, 255, 1);
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 3.4rem auto;
	border: 1px solid rgba(61, 89, 132, 0.5);
	border-radius: 9999px;
	padding: 0.3rem;
	gap: 0.2rem;
`

function MyAccountChoice() {
	const { selectedMyAccount, setSelectedMyAccount } = useAuth()
	const handleSelectedAccount = systemIndex => {
		setSelectedMyAccount(systemIndex === selectedMyAccount ? null : systemIndex)
	}
	return (
		<MyAccountChoiceContainer>
			{myAccountData.map((item, index) => (
				<OnlineBankDiv
					key={index}
					onClick={() => handleSelectedAccount(index)}
					color={selectedMyAccount === index}>
					<P
						style={{ paddingTop: '0.8rem', paddingBottom: '0.6rem' }}
						color={selectedMyAccount === index}>
						{item.title}
					</P>
				</OnlineBankDiv>
			))}
		</MyAccountChoiceContainer>
	)
}

export default MyAccountChoice
