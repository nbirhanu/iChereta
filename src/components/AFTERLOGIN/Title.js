import { styled } from 'styled-components'

export const TitleContainer = styled.div`
	border-bottom: 1px solid #e5e7eb;
	padding-bottom: 1.2rem;
`
export const TitleP = styled.p`
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.25rem;
	color: rgba(61, 89, 132, 1);
`

function Title() {
	return (
		<TitleContainer>
			<TitleP>Personal Information</TitleP>
		</TitleContainer>
	)
}

export default Title
