import { Outlet } from 'react-router-dom'
import Header from './UI/Header'

function BeforeAccountLayout() {
	return (
		<>
			<Header />
			<div>
				<Outlet />
			</div>
		</>
	)
}

export default BeforeAccountLayout
