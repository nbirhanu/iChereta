import { styled } from 'styled-components'
import { useAuth } from '../../CONTEXTAPI/ContextApi'

const UserNameContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid #e5e7eb;
	padding-bottom: 0.6rem;
`
const Name = styled.p`
	font-size: 1.2rem;
	font-weight: 600;
`
const Email = styled.p`
	font-size: 1rem;
	font-weight: 300;
`

function UserName() {
	const { firstName, loginEmail } = useAuth()
	return (
		<UserNameContainer>
			<Name>{firstName}</Name>
			<Email>{loginEmail}</Email>
		</UserNameContainer>
	)
}

export default UserName
