import { useState } from 'react'
import { styled } from 'styled-components'

//
const FAQWrapper = styled.div`
	width: 88%;
	margin: 5rem auto;
	background-color: rgba(249, 248, 253, 0.6);
	padding: 5rem;
`
const FAQDiv = styled.div`
	width: 70%;
	margin: auto;
	display: flex;
	flex-direction: column;
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
	transition: 0.2s;
	&:hover {
		background-color: rgba(239, 246, 255, 0.5);
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
	font-size: 20px;
	color: #757575; /* Grey icon color */
	width: 24px;
	height: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%; /* Circular shape */
	background-color: white; /* White background for the icon */
`
const Question = styled.p`
	font-size: 1.4rem;
	line-height: 2rem;
	font-weight: 600;
	color: rgba(75, 85, 99, 1);
`

////// styled answer container
const AnswerContainer = styled.div`
	margin-top: 1rem;
	margin-left: 6rem;
	/* transition-duration: display 1s ease; */
	line-height: 1.8;
`
const Answer = styled.p`
	display: ${props => (props.visible ? 'block' : 'none')};
	color: rgba(75, 85, 99, 1);
	font-size: 1.3rem;
	font-weight: 600;
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
				<FAQDiv>
					<QuestionAnswerWrapper key={index} onClick={() => toggleAnswer(index)}>
						<QuestionContainer>
							<PlusMinusIcon>{visibleAnswers[index] ? '-' : '+'}</PlusMinusIcon>
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
// <QuestionAnswerWrapper>
// 				<QuestionContainer>
// 					<PlusMinusIcon>+</PlusMinusIcon>
// 					<Question>What are the sources of tenders?</Question>
// 				</QuestionContainer>
// 				<AnswerContainer>
// 					<Answer>
// 						iChereta is an online platform that aggregates and delivers tender notices from
// 						various sources across Ethiopia. We provide a one-stop-shop for businesses and
// 						individuals seeking to explore opportunities in the Ethiopian market.
// 					</Answer>
// 				</AnswerContainer>
// 			</QuestionAnswerWrapper>
