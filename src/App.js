import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BeforeAccountLayout from './BeforeAccountLayout'
// import Pages
import Starter from './BeforeCreateAccount/pages/Starter'
import Tenders from './BeforeCreateAccount/pages/Tenders'
import PricingPage from './BeforeCreateAccount/pages/PricingPage'

import Faq from './BeforeCreateAccount/pages/Faq'
import Signup from './BeforeCreateAccount/pages/Signup'
import Login from './BeforeCreateAccount/pages/Login'
import Pagenotfound from './BeforeCreateAccount/pages/Pagenotfound'
import AboutUsPage from './BeforeCreateAccount/pages/AboutUsPage'
import ForgotPassword from './BeforeCreateAccount/pages/ForgotPassword'
import PrivacyPolicy from './BeforeCreateAccount/pages/PrivacyPolicy'
import RefundPage from './BeforeCreateAccount/pages/RefundPage'
import TermsPage from './BeforeCreateAccount/pages/TermsPage'

//context

import { ContextProvider } from './CONTEXTAPI/ContextApi'

//
import AfterLogin from './AfterLogin'
import MyFeed from './AfterCreateAccount/afterLoginPages/MyFeed'
import SavedTenders from './AfterCreateAccount/afterLoginPages/SavedTenders'
import MyAccountPage from './AfterCreateAccount/afterLoginPages/MyAccountPage'
import BillingPage from './AfterCreateAccount/afterLoginPages/BillingPage'
import SettingsPage from './AfterCreateAccount/afterLoginPages/SettingsPage'
import Logoutpage from './AfterCreateAccount/afterLoginPages/Logoutpage'

function App() {
	return (
		<BrowserRouter>
			<ContextProvider>
				<Routes>
					<Route element={<BeforeAccountLayout />}>
						<Route index element={<Starter />} />
						<Route path="/" element={<Starter />} />
						<Route path="/tenders" element={<Tenders />} />
						<Route path="/pricing" element={<PricingPage />} />
						<Route path="/faq" element={<Faq />} />
						<Route path="/about" element={<AboutUsPage />} />
						<Route path="/privacy" element={<PrivacyPolicy />} />
						<Route path="/refund" element={<RefundPage />} />
						<Route path="/term" element={<TermsPage />} />
						<Route path="*" element={<Pagenotfound />} />
					</Route>
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route element={<AfterLogin />}>
						<Route index element={<Tenders />} />
						<Route path="/tender" element={<Tenders />} />
						<Route path="/feed" element={<MyFeed />} />
						<Route path="/saved" element={<SavedTenders />} />
					</Route>
					<Route path="/myaccount" element={<MyAccountPage />} />
					<Route path="/billing" element={<BillingPage />} />
					<Route path="/settings" element={<SettingsPage />} />
					<Route path="/" element={<Logoutpage />} />
				</Routes>
			</ContextProvider>
		</BrowserRouter>
	)
}

export default App
