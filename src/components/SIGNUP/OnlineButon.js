import { styled } from 'styled-components'

const StepThreeButton = styled.div`
	width: 100%;
	text-align: center;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(102, 75, 199, 0.9);
	margin-top: 2rem;
	padding: 1.2rem 0;
	border-radius: 5px;
`
const P = styled.p`
	font-size: 1.4rem;
	@media (max-width: 500px) {
		font-size: 1.2rem;
	}
`

function OnlineButon() {
	return (
		<StepThreeButton>
			<P>Pay Now | ይክፈሉ</P>
		</StepThreeButton>
	)
}

export default OnlineButon
