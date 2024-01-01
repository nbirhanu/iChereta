import { useAuth } from '../../CONTEXTAPI/ContextApi'
import { OnlineBankDiv, P } from '../SIGNUP/OnlineBank'
import { MyAccountChoiceContainer } from './MyAccountChoice'

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
