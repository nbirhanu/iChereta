import { styled } from 'styled-components'
import { IoPersonSharp } from 'react-icons/io5'
import { useAuth } from '../../CONTEXTAPI/ContextApi'

const AccountContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(102, 75, 199, 0.2);
	color: rgba(102, 75, 199, 1);
	width: 13rem;
	padding: 0.7rem 0;
	gap: 0.8rem;
	border-radius: 4px;
	cursor: pointer;
`
const AccountIcon = styled.div``
const AccountTittle = styled.p`
	color: rgba(102, 75, 199, 1);
	font-size: 1.3rem;
`

function MyAccount() {
	const { accountOpen, setAccountOpen } = useAuth()
	const handleAccount = function () {
		setAccountOpen(!accountOpen)
	}
	return (
		<AccountContainer onClick={handleAccount}>
			<AccountIcon>
				<IoPersonSharp style={{ width: '1.6rem', height: '1.6rem' }} />
			</AccountIcon>
			<AccountTittle>My Account</AccountTittle>
		</AccountContainer>
	)
}

export default MyAccount
