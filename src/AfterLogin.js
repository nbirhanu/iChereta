import { Outlet } from 'react-router-dom'
import AfterLoginHeader from './AfterCreateAccount/afterLoginPages/AfterLoginHeader'
import FixedFooter from './components/AFTERLOGIN/FixedFooter'

function AfterLogin() {
	return (
		<>
			<AfterLoginHeader />
			<div>
				<Outlet />
			</div>
			<FixedFooter />
		</>
	)
}

export default AfterLogin
