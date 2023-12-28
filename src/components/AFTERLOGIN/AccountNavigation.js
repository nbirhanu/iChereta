import { styled } from 'styled-components'
import { useAuth } from '../../CONTEXTAPI/ContextApi'
import UserName from './UserName'
import Account from './Account'
import Billing from './Billing'
import Settings from './Settings'
import Logout from './Logout'

const Div = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	/* background-color: rgba(0, 0, 0, 0.5); */
	display: ${props => (props.overlay ? 'block' : 'none')};
	z-index: 1;
`

const AccountNavigationWrapper = styled.div`
	position: absolute;
	width: 300px;
	padding: 1.8rem 1.4rem;
	background-color: rgba(255, 255, 255, 1);
	color: rgba(61, 89, 132, 1);
	top: 5.5rem;
	right: 6.2%;
	border: 1px solid rgba(241, 245, 249, 1);
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	display: ${({ open }) => (open ? 'block' : 'none')};
	z-index: 2;
`

const AccountNavigationContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 2rem;
	gap: 1.4rem;
`

function AccountNavigation() {
	const { accountOpen, handleAccount } = useAuth()
	return (
		<>
			<Div overlay={accountOpen} onClick={handleAccount} />
			<AccountNavigationWrapper open={accountOpen}>
				<UserName />
				<AccountNavigationContainer>
					<Account />
					<Billing />
					<Settings />
					<Logout />
				</AccountNavigationContainer>
			</AccountNavigationWrapper>
		</>
	)
}

export default AccountNavigation
