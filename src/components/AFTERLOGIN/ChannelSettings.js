import { useState } from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const NotificationWrapper = styled.div`
	width: 100%;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 1.2rem;
	padding-bottom: 1.2rem;
	gap: 2rem;
`

const NotificationContainer = styled.div`
	position: relative;
	width: 95%;
	border: 1px solid rgba(61, 89, 132, 0.5);
	color: rgba(61, 89, 132, 1);
	margin: auto;
	display: flex;
	flex-direction: column;
	padding: 1.5rem 0.8rem;
	border-radius: 4px;
	gap: 1rem;
`

const H1 = styled.h1`
	font-size: 1.3rem;
	font-weight: 400;
`
const P2 = styled.p``
/////

const NotificationOnOff = styled.div`
	position: relative;
	width: 4rem;
	height: 2rem;
	background-color: ${({ color }) => (color ? 'rgba(34, 197, 94, 1)' : 'rgba(209, 213 ,219,1)')};
	border-radius: 9999px;
	cursor: pointer;
`
const Circle = styled.div`
	position: absolute;
	width: 1.4rem;
	height: 1.4rem;
	background-color: white;
	border-radius: 50%;
	top: 12%;
	right: ${({ position }) => (position ? '5%' : '60%')};
`

const ButtonChange = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	padding: 0.5rem 0.8rem;
	justify-content: center;
	background-color: rgba(100, 73, 195, 0.1);
	top: 12%;
	right: 5%;
`

const ButtonP = styled.p`
	color: rgba(100, 73, 195, 1);
	font-size: 1.1rem;
`

function ChannelSettings() {
	const [switchBackground0, setSwitchBackground0] = useState(true)
	const [switchBackground1, setSwitchBackground1] = useState(true)
	const [switchBackground2, setSwitchBackground2] = useState(true)
	const handlechangeBackground0 = function () {
		setSwitchBackground0(!switchBackground0)
	}
	const handlechangeBackground1 = function () {
		setSwitchBackground1(!switchBackground1)
	}
	const handlechangeBackground2 = function () {
		setSwitchBackground2(!switchBackground2)
	}

	return (
		<NotificationWrapper>
			<NotificationContainer>
				<H1>Telegram Notification</H1>
				<P2>
					Telegram Notification Will be sent to your registered phone {''}
					<span style={{ fontWeight: '700' }}>0995661234</span>
				</P2>
				<NotificationOnOff onClick={handlechangeBackground0} color={switchBackground0}>
					<Circle position={switchBackground0} />
				</NotificationOnOff>
			</NotificationContainer>

			<NotificationContainer>
				<H1>Telegram Notification</H1>
				<P2>
					Telegram Notification Will be sent to your registered phone {''}
					<span style={{ fontWeight: '700' }}>0995661234</span>
				</P2>
				<NotificationOnOff onClick={handlechangeBackground1} color={switchBackground1}>
					<Circle position={switchBackground1} />
				</NotificationOnOff>
				<Link to="/myaccount">
					<ButtonChange>
						<ButtonP>change Mobile</ButtonP>
					</ButtonChange>
				</Link>
			</NotificationContainer>

			<NotificationContainer>
				<H1>Telegram Notification</H1>
				<P2>
					Telegram Notification Will be sent to your registered phone {''}
					<span style={{ fontWeight: '700' }}>0995661234</span>
				</P2>
				<NotificationOnOff onClick={handlechangeBackground2} color={switchBackground2}>
					<Circle position={switchBackground2} />
				</NotificationOnOff>
				<Link to="/myaccount">
					<ButtonChange>
						<ButtonP>change Email</ButtonP>
					</ButtonChange>
				</Link>
			</NotificationContainer>
		</NotificationWrapper>
	)
}

export default ChannelSettings
