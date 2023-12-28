import { Outlet } from 'react-router-dom'
import AfterLoginHeader from './AfterCreateAccount/afterLoginPages/AfterLoginHeader'

function AfterLogin() {
	return (
		<>
			<AfterLoginHeader />
			<div>
				<Outlet />
			</div>
		</>
	)
}

export default AfterLogin
