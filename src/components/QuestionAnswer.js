import { H1, TittleDiv } from '../Styles/StylesStarterPage/styleTittle'
import QuestionAndAnswer from './QuestionAndAnswer'
//
const faqData = [
	{
		question: 'What is iChereta?',
		answer:
			'iChereta is an online platform that aggregates and delivers tender notices from various sources across Ethiopia. We provide a one-stop-shop for businesses and individuals seeking to explore opportunities in the Ethiopian market.',
	},
	{
		question: 'What are the sources of tenders?',
		answer:
			'We source information from a variety of authenticated sources such as newspapers, magazines, and the websites of relevant organizations.',
	},
	{
		question: 'What payment options are available?',
		answer:
			'We offer two payment options for our subscription packages: bank transfer and Telebirr. You can pay through the following banks: - Commercial Bank of Ethiopia (CBE) If you have any other questions or concerns, please do not hesitate to reach out to us.',
	},
	{
		question: 'How often is the tender database updated?',
		answer:
			'We collect data from various sources and upload it daily. Our team ensures accuracy of the data.',
	},
]
//
function QuestionAnswer() {
	return (
		<>
			<TittleDiv>
				<H1 style={{ fontSize: '3.8rem', marginBottom: '1.2rem' }}>
					Frequently Asked <span style={{ color: '#664bc7' }}>Questions.</span>
				</H1>
			</TittleDiv>
			<QuestionAndAnswer data={faqData} />
		</>
	)
}

export default QuestionAnswer
