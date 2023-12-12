import { Outlet } from 'react-router-dom'
import Header from './UI/Header'

function BeforeAccountLayout() {
	return (
		<div>
			<Header />
			<div>
				<Outlet />
			</div>
		</div>
	)
}

export default BeforeAccountLayout
