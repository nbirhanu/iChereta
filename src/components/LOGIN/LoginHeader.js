import { styled } from 'styled-components'
import { LogoImage, Logo } from '../../UI/Header'
import { Link } from 'react-router-dom'
export const Wrapper = styled.div`
	display: none;
	@media (max-width: 900px) {
		display: block;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 5.2rem;
		border-bottom: 1px solid #e5e7eb;
		box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
	}
`
export const Container = styled.div`
	width: 90%;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Div = styled.div`
	cursor: pointer;
`

export const H1 = styled.h1`
	font-size: 1.2rem;
	color: rgba(102, 75, 199, 1);
`

function LoginHeader() {
	return (
		<Wrapper>
			<Container>
				<Link to="/">
					<Logo>
						<LogoImage
							src="https://ichereta.com/static/media/logo.ed22d18512f2f6db043bd5878ba1a087.svg"
							alt="ichereta logo"
						/>
					</Logo>
				</Link>
				<Link to="/signup" style={{ textDecoration: 'none' }}>
					<Div>
						<H1>Sign Up</H1>
					</Div>
				</Link>
			</Container>
		</Wrapper>
	)
}

export default LoginHeader
