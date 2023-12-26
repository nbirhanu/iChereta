import { SpanContainer, P, Tittle, Div, AboutContainer } from './About'
import { Tittle2 } from './Privacy'

const refundData = [
	{
		tittle: 'Refund Policy',
		answer:
			'We at iChereta.com aim to provide the best possible service to our customers. However, we understand that there may be instances where you may need to request a refund. This policy outlines the terms and conditions for requesting a refund.',
	},
	{
		tittle: 'Eligibility for a Refund',
		answer:
			' Please note that this refund policy is not applicable for subscribers in Ethiopia who pay in cash or by check at our office and obtain a receipt. It is also not applicable for existing members who upgrade their existing subscription.',
	},
	{
		tittle: 'How to Request a Refund',
		answer:
			'If you meet the eligibility criteria for a refund, please contact our customer support team at support@ichereta.com and provide us with your order details.',
	},
	{
		tittle: 'Refund Process',
		answer:
			'Once your refund request is approved, we will process your refund through the payment method used during your purchase. Please note that it may take some time for the refund to reflect in your account, depending on your bank or payment provider.',
	},
	{
		tittle: 'Contact Us',
		answer:
			'If you have any questions about our refund policy or need further assistance, please contact our customer support team at support@ichereta.com.',
	},
]

function Refund() {
	return (
		<AboutContainer>
			<Div>
				<Tittle>Refund Policy</Tittle>
				{refundData.map((item, index) => (
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

export default Refund
