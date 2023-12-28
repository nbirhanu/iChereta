import { Link } from 'react-router-dom'
import { useAuth } from '../../CONTEXTAPI/ContextApi'
import { AccountWrapper, AccountTittle } from './Account'
import { MdOutlineHolidayVillage } from 'react-icons/md'

function Billing() {
	const { handleAccount } = useAuth()
	return (
		<Link to="/billing" style={{ textDecoration: 'none' }} onClick={handleAccount}>
			<AccountWrapper>
				<MdOutlineHolidayVillage style={{ fontSize: '1.8rem' }} />
				<AccountTittle>Billing</AccountTittle>
			</AccountWrapper>
		</Link>
	)
}

export default Billing
