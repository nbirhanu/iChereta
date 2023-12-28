import { Link } from 'react-router-dom'

import MobileNavigation from '../../components/MobileNavigation'
import { FixedHeader, LinkWrapper, Logo, LogoImage, Links, LinkLetter } from '../../UI/Header'
import Notification from '../../components/AFTERLOGIN/Notification'
import MyAccount from '../../components/AFTERLOGIN/MyAccount'
import AccountNavigation from '../../components/AFTERLOGIN/AccountNavigation'

function AfterLoginHeader() {
	return (
		<FixedHeader>
			<LinkWrapper>
				<Link to="/tender">
					<Logo>
						<LogoImage
							src="https://ichereta.com/static/media/logowitht.d8bdbb154b2f43a1a62a9468b46394dd.svg"
							alt="ichereta logo"
						/>
					</Logo>
				</Link>
				<Links style={{ columnGap: '2.8rem' }}>
					<Link style={{ textDecoration: 'none' }} to="/tender">
						<LinkLetter>Tenders</LinkLetter>
					</Link>

					<Link style={{ textDecoration: 'none' }} to="/feed">
						<LinkLetter>My Feed</LinkLetter>
					</Link>
					<Link style={{ textDecoration: 'none' }} to="/saved">
						<LinkLetter>Saved Tenders</LinkLetter>
					</Link>
					<Notification />
					<MyAccount />
					<AccountNavigation />
				</Links>
				<MobileNavigation />
			</LinkWrapper>
		</FixedHeader>
	)
}

export default AfterLoginHeader
