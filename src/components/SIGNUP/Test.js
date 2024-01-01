// src/components/StyledComponents.js
import styled from 'styled-components'

export const Header = styled.header`
	background-color: #333;
	color: white;
	padding: 1rem;
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 1000;
`

export const Sidebar = styled.aside`
	background-color: #555;
	color: white;
	padding: 1rem;
	width: 200px;
	position: fixed;
	top: 60px; /* adjust according to your header height */
	left: 0;
	height: 100vh;
`

export const Content = styled.div`
	margin-left: 220px; /* adjust according to your sidebar width */
	padding: 1rem;
`
const MainComponent = () => {
	return (
		<>
			<Header>
				<h1>Your Header Content</h1>
			</Header>
			<Sidebar>
				<h2>Your Sidebar Content</h2>
			</Sidebar>
			<Content>
				<h2>Main Content Goes Here</h2>
				{/* Add your main content here */}
			</Content>
		</>
	)
}

export default MainComponent
