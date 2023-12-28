import { Link } from 'react-router-dom'
import { useAuth } from '../../CONTEXTAPI/ContextApi'
import { AccountWrapper, AccountTittle } from './Account'
import { TbLogout } from 'react-icons/tb'

function Logout() {
	const { handleAccount } = useAuth()
	return (
		<Link to="/" style={{ textDecoration: 'none' }} onClick={handleAccount}>
			<AccountWrapper>
				<TbLogout style={{ fontSize: '1.8rem' }} />
				<AccountTittle>Logout</AccountTittle>
			</AccountWrapper>
		</Link>
	)
}

export default Logout
