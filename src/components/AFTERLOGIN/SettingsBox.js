import { useAuth } from '../../CONTEXTAPI/ContextApi'
import ChannelSettings from './ChannelSettings'
import { FormWrapper } from './MyAccountBox'
import TenderSettings from './TenderSettings'

function SettingsBox() {
	const { selectSetting } = useAuth()
	return (
		<FormWrapper>
			{selectSetting === 0 && <ChannelSettings />}
			{selectSetting === 1 && <TenderSettings />}
		</FormWrapper>
	)
}

export default SettingsBox
