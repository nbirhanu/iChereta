import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BeforeAccountLayout from './BeforeAccountLayout'
// import Pages
import Starter from './BeforeCreateAccount/pages/Starter'
import Tenders from './BeforeCreateAccount/pages/Tenders'
import Pricing from './BeforeCreateAccount/pages/Pricing'
import Faq from './BeforeCreateAccount/pages/Faq'
import Signup from './BeforeCreateAccount/pages/Signup'
import Login from './BeforeCreateAccount/pages/Login'
import Pagenotfound from './BeforeCreateAccount/pages/Pagenotfound'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<BeforeAccountLayout />}>
					<Route index element={<Starter />} />
					<Route path="/" element={<Starter />} />
					<Route path="/tenders" element={<Tenders />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="*" element={<Pagenotfound />} />
				</Route>
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
