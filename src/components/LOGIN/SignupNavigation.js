import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const SignupNavWrapper = styled.div`
	width: 100%;
	background-image: linear-gradient(to right, transparent, rgba(241, 245, 249, 0.5));
	display: flex;
	align-items: center;
	justify-content: end;
	margin-top: 1.8rem;
	@media (max-width: 900px) {
		display: none;
	}
`
export const ButtonDiv = styled.div`
	display: flex;
	align-items: center;
	margin-right: 5.8rem;
	gap: 2rem;
	padding: 0.8rem 0;
`
export const H1 = styled.h1`
	font-size: 1.2rem;
	font-weight: normal;
`
export const SignupButton = styled.button`
	font-size: 1.2rem;
	color: rgba(102, 75, 199, 1);
	border: 1px solid rgba(102, 75, 199, 1);
	padding: 0.8rem 1.8rem;
	border-radius: 9999px;
	background-color: rgba(241, 245, 249, 0.5);
`

function SignupNavigation() {
	return (
		<SignupNavWrapper>
			<ButtonDiv>
				<H1>Don't have an account?</H1>
				<Link to="/signup">
					<SignupButton>Sign Up</SignupButton>
				</Link>
			</ButtonDiv>
		</SignupNavWrapper>
	)
}

export default SignupNavigation
