import { styled } from 'styled-components'
import MyAccountTitle from '../../components/AFTERLOGIN/MyAccountTitle'
import MyAccountChoice from '../../components/AFTERLOGIN/MyAccountChoice'
import MyAccountBox from '../../components/AFTERLOGIN/MyAccountBox'

export const MyAccountWrapper = styled.div`
	width: 88%;
	height: 100vh;
	margin: 6rem auto;
	background-color: rgba(248, 248, 255, 1);
	display: flex;
	justify-content: center;
`
export const MyAccountContainer = styled.div`
	width: 40%;
	margin-top: 4rem;
	display: flex;
	flex-direction: column;
`

function MyAccountPage() {
	return (
		<MyAccountWrapper>
			<MyAccountContainer>
				<MyAccountTitle />
				<MyAccountChoice />
				<MyAccountBox />
			</MyAccountContainer>
		</MyAccountWrapper>
	)
}

export default MyAccountPage
