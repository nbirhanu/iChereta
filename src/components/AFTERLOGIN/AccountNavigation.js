import { styled } from 'styled-components'
import { useAuth } from '../../CONTEXTAPI/ContextApi'
import UserName from './UserName'

const AccountNavigationWrapper = styled.div`
	position: absolute;
	width: 300px;
	height: 250px;
	padding: 1.8rem 1.4rem;
	background-color: rgba(255, 255, 255, 1);
	color: rgba(61, 89, 132, 1);
	top: 5.5rem;
	right: 6.2%;
	border: 1px solid rgba(241, 245, 249, 1);
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	display: ${({ open }) => (open ? 'block' : 'none')};
`

function AccountNavigation() {
	const { accountOpen } = useAuth()
	return (
		<AccountNavigationWrapper open={accountOpen}>
			<UserName />
		</AccountNavigationWrapper>
	)
}

export default AccountNavigation
