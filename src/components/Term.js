import { SpanContainer, P, Tittle, Div, AboutContainer } from './About'
import { Tittle2 } from './Privacy'

const TermData = [
	{
		tittle: '1.DEFINITIONS',
		answer1: 'HahuCloud Technologies PLC referred to as "the Company"',
		answer2:
			'iChereta, the subscription-based Tender Alerting Service through email, phone, sms, and telegram, referred to as "the Service"',
		answer3: 'The users of the Service are referred to as "the Subscriber"',
	},
	{
		tittle: '2.SCOPE AND INTENT',
		answer1:
			'These terms of service ("TOS") govern the use of the Service provided by the Company. By subscribing to the Service, the Subscriber agrees to be bound by these TOS.',
	},
	{
		tittle: '3.PROVISION OF SERVICES',
		answer1:
			'The Company will provide the Service to the Subscriber for a maximum of one-year subscription, starting from the date of purchase. The Service includes Tender Alerting Service through email, phone, sms, and telegram.',
	},
	{
		tittle: '4.ACCESS TO SERVICES',
		answer1:
			'The Subscriber will be provided with access to the Service after the successful completion of the purchase. The Subscriber will be required to provide accurate and complete information during the registration process.',
	},
	{
		tittle: '5.USAGE RESTRICTIONS',
		answer1:
			'The Subscriber agrees to use the Service only for lawful purposes and in compliance with all applicable laws and regulations.',
	},
	{
		tittle: '6.FEES AND PAYMENT FOR PURCHASED SERVICES',
		answer1:
			'The Subscriber shall pay the Company the fees for the Service as set forth on the iChereta website. The Subscriber shall make payment in advance for the subscription period selected. The Company is refund policy is available on the refund policy page.',
	},
	{
		tittle: '7.DISCLAIMER OF WARRANTIES',
		answer1:
			'The Company makes no warranties, whether express or implied, regarding the Service. The Service is provided "as is" and the Company disclaims all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.',
	},
	{
		tittle: '8.LIMITATION OF LIABILITY',
		answer1:
			'The Company shall not be liable for any indirect, special, incidental, or consequential damages arising out of or in connection with the Service, including but not limited to damages for loss of profits, loss of data, or any other commercial damages or losses.',
	},
	{
		tittle: '9.TERM AND TERMINATION',
		answer1:
			'These TOS shall remain in effect until terminated by either party. The Company may terminate these TOS immediately upon notice to the Subscriber if the Subscriber breaches any provision of these TOS.',
	},
	{
		tittle: '10.GOVERNING LAW (ETHIOPIA)',
		answer1:
			'These TOS shall be governed by and construed in accordance with the laws of Ethiopia, without giving effect to any principles of conflicts of law.',
	},
]

function Term() {
	return (
		<AboutContainer>
			<Div>
				<Tittle>Terms of Services</Tittle>
				{TermData.map((item, index) => (
					<div key="index">
						<Tittle2>{item.tittle}</Tittle2>
						<SpanContainer>
							<P>{item.answer1}</P>
							<P>{item.answer2}</P>
							<P>{item.answer3}</P>
						</SpanContainer>
					</div>
				))}
			</Div>
		</AboutContainer>
	)
}

export default Term
