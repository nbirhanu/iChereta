import { styled } from 'styled-components'
import { IoNotificationsOutline } from 'react-icons/io5'

const NotificationContainer = styled.div`
	position: relative;
	width: 2.8rem;
	height: 2.8rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(219, 234, 254, 0.5);
	border-radius: 9999px;
	transition: 0.2s;
	&:hover {
		background-color: rgb(219 234 254);
	}
`

const Icon = styled.div`
	font-size: 1.4rem;
	color: rgba(102, 75, 199, 1);
	/* &:hover {
		color: rgba(219, 234, 254, 1);
	} */
`

function Notification() {
	return (
		<NotificationContainer>
			<Icon>
				<IoNotificationsOutline />
			</Icon>
		</NotificationContainer>
	)
}

export default Notification
