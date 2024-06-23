import { useAuth } from '../../CONTEXTAPI/ContextApi'
import { OnlineBankDiv, P } from '../SIGNUP/OnlineBank'
import { MyAccountChoiceContainer } from './MyAccountChoice'

// export const OnlineBankDiv = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	width: 50%;
// 	background-color: ${({ color }) => (color ? 'rgba(61, 89, 132, 1)' : 'white')};
// 	border-radius: 9999px;
// 	cursor: pointer;
// 	transition: transform 0.3s ease-in-out;
// `

// export const P = styled.p`
// 	color: ${({ color }) => (color ? 'rgba(255, 255, 255, 1)' : 'inherite')};
// 	font-size: 1.1rem;
// 	padding: 0.8rem 0;
// `

const Setting = [
	{
		title: 'Channel',
	},
	{
		title: 'Tender',
	},
]

function SettingsChoice() {
	const { selectSetting, setSelectSetting } = useAuth()
	const handleSelectedSetting = systemIndex => {
		setSelectSetting(systemIndex === selectSetting ? null : systemIndex)
	}
	return (
		<MyAccountChoiceContainer style={{ width: '60%' }}>
			{Setting.map((item, index) => (
				<OnlineBankDiv
					key={index}
					onClick={() => handleSelectedSetting(index)}
					color={selectSetting === index}>
					<P
						style={{ paddingTop: '0.8rem', paddingBottom: '0.6rem' }}
						color={selectSetting === index}>
						{item.title}
					</P>
				</OnlineBankDiv>
			))}
		</MyAccountChoiceContainer>
	)
}

export default SettingsChoice
