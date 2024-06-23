import { useState } from 'react'
import { styled } from 'styled-components'

//
const FAQWrapper = styled.div`
	width: 88%;
	margin: 5rem auto;
	background-color: rgba(249, 248, 253, 0.6);
	padding: 5rem;
	border-radius: 5px;
	@media (max-width: 1100px) {
		margin: 0 auto;
	}
	@media (max-width: 800px) {
		margin: 0 auto;
		padding: 0;
		background-color: white;
	}
`
const FAQDiv = styled.div`
	width: 80rem;
	margin: auto;
	display: flex;
	flex-direction: column;
	@media (max-width: 1100px) {
		width: 90%;
	}
	@media (max-width: 950px) {
		width: 100%;
	}
`
const QuestionAnswerWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	border-radius: 0.6rem;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
	padding: 1rem 1rem 1rem 1rem;
	margin-bottom: 1.2rem;
	background-color: white;
	cursor: pointer;
	&:hover {
		background-color: rgba(239, 246, 255, 0.5);
	}
	@media (max-width: 800px) {
		background-color: rgba(248, 250, 252, 1);
	}
`
///style question container
const QuestionContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`

// `
const PlusMinusIcon = styled.span`
	position: relative;
	font-size: 20px;
	color: #757575; /* Grey icon color */
	width: 24px;
	height: 24px;
	/* display: flex;
	justify-content: center;
	align-items: center; */
	border-radius: 50%; /* Circular shape */
	background-color: white; /* White background for the icon */
`
const Icon = styled.p`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -60%);
`

const Question = styled.p`
	font-size: 1.4rem;
	line-height: 2rem;
	font-weight: 600;
	color: rgba(75, 85, 99, 1);
	@media (max-width: 585px) {
		font-size: 1.3rem;
	}
`

////// styled answer container
const AnswerContainer = styled.div`
	margin-top: 1rem;
	margin-left: 6rem;
	line-height: 1.8;
`
const Answer = styled.p`
	display: ${props => (props.visible ? 'block' : 'none')};
	color: rgba(75, 85, 99, 1);
	font-size: 1.3rem;
	font-weight: 600;
	transition: 1s ease;
	@media (max-width: 680px) {
		font-size: 1.1rem;
	}
	@media (max-width: 585px) {
		font-size: 1rem;
	}
`
//
function QuestionAndAnswer({ data }) {
	const [visibleAnswers, setVisibleAnswers] = useState([])

	const toggleAnswer = index => {
		const newVisibleAnswers = [...visibleAnswers]
		newVisibleAnswers[index] = !newVisibleAnswers[index]
		setVisibleAnswers(newVisibleAnswers)
	}
	return (
		<FAQWrapper>
			{data.map((item, index) => (
				<FAQDiv key={item.question}>
					<QuestionAnswerWrapper onClick={() => toggleAnswer(index)}>
						<QuestionContainer>
							<PlusMinusIcon>
								{visibleAnswers[index] ? <Icon>-</Icon> : <Icon>+</Icon>}
							</PlusMinusIcon>
							<Question>{item.question}</Question>
						</QuestionContainer>
						<AnswerContainer>
							<Answer visible={visibleAnswers[index]}>{item.answer}</Answer>
						</AnswerContainer>
					</QuestionAnswerWrapper>
				</FAQDiv>
			))}
		</FAQWrapper>
	)
}

export default QuestionAndAnswer
