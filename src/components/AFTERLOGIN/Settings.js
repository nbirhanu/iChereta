import { Link } from 'react-router-dom'
import { useAuth } from '../../CONTEXTAPI/ContextApi'
import { AccountWrapper, AccountTittle } from './Account'
import { IoSettingsOutline } from 'react-icons/io5'
function Settings() {
	const { handleAccount } = useAuth()
	return (
		<Link to="/settings" style={{ textDecoration: 'none' }} onClick={handleAccount}>
			<AccountWrapper>
				<IoSettingsOutline style={{ fontSize: '1.8rem' }} />
				<AccountTittle>Settings</AccountTittle>
			</AccountWrapper>
		</Link>
	)
}

export default Settings
