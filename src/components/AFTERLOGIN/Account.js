import { styled } from 'styled-components'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useAuth } from '../../CONTEXTAPI/ContextApi'

export const AccountWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.6rem;
	color: rgba(61, 89, 132, 1);
	cursor: pointer;
	transition: transform 0.3s ease-in-out;
	&:hover {
		color: rgba(59, 130, 246, 1);
	}
`

export const AccountTittle = styled.p`
	font-size: 1.3rem;
`

function Account() {
	const { handleAccount } = useAuth()
	return (
		<Link to="/myaccount" style={{ textDecoration: 'none' }} onClick={handleAccount}>
			<AccountWrapper>
				<MdOutlineAccountCircle style={{ fontSize: '1.8rem' }} />
				<AccountTittle>My Account</AccountTittle>
			</AccountWrapper>
		</Link>
	)
}

export default Account
