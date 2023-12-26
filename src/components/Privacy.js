import { styled } from 'styled-components'
import { SpanContainer, P, Tittle, Div, AboutContainer } from './About'

const PrivacyData = [
	{
		tittle: 'Privacy Policy for iChereta',
		answer:
			'At iChereta, we are committed to protecting the privacy of our users. This Privacy Policy outlines how we collect, use, and share your personal information when you visit our website.',
	},
	{
		tittle: 'Information Collection and Use',
		answer:
			'We collect personal information such as your name and email address when you register for an account on our website. We may also collect information about your browsing activity on our website, such as your IP address, the pages you visit, and the time and date of your visit.',
	},
	{
		tittle: 'Cookies',
		answer:
			'We use cookies to collect information about your browsing activity on our website. Cookies are small data files that are stored on your device when you visit our website. They help us to remember your preferences and provide you with a better browsing experience.',
	},
	{
		tittle: 'Third-Party Services',
		answer:
			'We may use third-party services such as Google Analytics to collect information about your browsing activity on our website. These services may use cookies and other tracking technologies to collect information about your use of our website.',
	},
	{
		tittle: 'Information Sharing',
		answer:
			'We do not sell, trade, or rent your personal information to third parties. We may share your information with our service providers who help us to operate our website and provide you with a better experience.',
	},
	{
		tittle: 'Security',
		answer:
			'We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure.',
	},
	{
		tittle: 'Changes to this Privacy Policy',
		answer:
			'We reserve the right to modify this Privacy Policy at any time. If we make any material changes to this Privacy Policy, we will notify you by email at support@ichereta.com or by posting a notice on our website.',
	},
	{
		tittle: 'Security',
		answer:
			'If you have any questions or concerns about this Privacy Policy, please contact us at support@ichereta.com.',
	},
]

export const Tittle2 = styled.p`
	font-size: 1.4rem;
	font-weight: 600;
	margin-bottom: 2.4rem;
	color: black;
	margin-bottom: 1rem;
`

function Privacy() {
	return (
		<AboutContainer>
			<Div>
				<Tittle>Privacy Policy</Tittle>
				{PrivacyData.map((item, index) => (
					<div key={index}>
						<Tittle2>{item.tittle}</Tittle2>
						<SpanContainer>
							<P>{item.answer}</P>
						</SpanContainer>
					</div>
				))}
			</Div>
		</AboutContainer>
	)
}

export default Privacy
