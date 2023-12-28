import { styled } from 'styled-components'

const MyAccountTittleWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	padding: 2rem 0;
	gap: 1.6rem;
	background-color: rgba(255, 255, 255, 1);
	color: rgba(61, 89, 132, 1);
	border-radius: 4px;
`

const P1 = styled.p`
	font-size: 1.6rem;
	font-weight: 700;
`
const P2 = styled.p`
	font-size: 1.3rem;
	text-align: center;
	line-height: 2rem;
`

function MyAccountTitle() {
	return (
		<MyAccountTittleWrapper>
			<P1>MY ACCOUNT</P1>
			<P2>
				On this page you can add information <br /> about you and your company.
			</P2>
		</MyAccountTittleWrapper>
	)
}

export default MyAccountTitle
