import SettingTitle from '../../components/AFTERLOGIN/SettingTitle'
import SettingsBox from '../../components/AFTERLOGIN/SettingsBox'
import SettingsChoice from '../../components/AFTERLOGIN/SettingsChoice'
import { MyAccountWrapper, MyAccountContainer } from './MyAccountPage'

function SettingsPage() {
	return (
		<MyAccountWrapper>
			<MyAccountContainer>
				<SettingTitle />
				<SettingsChoice />
				<SettingsBox />
			</MyAccountContainer>
		</MyAccountWrapper>
	)
}

export default SettingsPage
