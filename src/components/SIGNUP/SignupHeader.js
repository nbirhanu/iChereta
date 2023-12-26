import { LogoImage, Logo } from '../../UI/Header'
import { Link } from 'react-router-dom'
import { Wrapper, Container, Div, H1 } from '../LOGIN/LoginHeader'

function SignupHeader() {
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
				<Link to="/login">
					<Div>
						<H1>Log In</H1>
					</Div>
				</Link>
			</Container>
		</Wrapper>
	)
}

export default SignupHeader
