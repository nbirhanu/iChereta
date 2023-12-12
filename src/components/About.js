import { styled } from 'styled-components'

const AboutContainer = styled.div`
	width: 60%;
	margin: auto;
	background-color: rgba(241, 245, 249, 1);
	padding: 2.4rem;
	border-radius: 10px;
`
const Div = styled.div`
	width: 100%;
	margin: auto;
`
const Tittle = styled.p`
	font-size: 1.8rem;
	font-weight: 700;
	margin-bottom: 2.8rem;
`
const SpanContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	margin-bottom: 3.2rem;
`
const P = styled.p`
	font-size: 1.3rem;
	line-height: 1.5;
`
const Ul = styled.ul`
	margin-left: 1.4rem;
`
const Li = styled.li`
	font-size: 1.3rem;
	line-height: 1.5;
	margin-bottom: 1.2rem;
`
const Span = styled.span`
	font-size: 1.3rem;
	font-weight: 700;
	color: #111;
`

function About() {
	return (
		<AboutContainer>
			<Div>
				<Tittle>About us</Tittle>
				<SpanContainer>
					<P>
						iChereta is a proud product of <Span>HahuCloud Technologies PLC</Span>
						and it’s designed to make the tender discovery process seamless,
						<br /> efficient, and tailored to your specific needs.
					</P>
					<P>
						With our expansive network of tender information sources, we bring you the most
						comprehensive selection of tender <br /> opportunities from across Ethiopia, spanning
						multiple languages and regions.
					</P>
				</SpanContainer>
				<Tittle>Our Mission</Tittle>
				<SpanContainer>
					<P>
						At iChereta, our mission is to empower businesses and individuals by providing them with
						a user-friendly platform for accessing tender opportunities. We believe that by
						streamlining the tender discovery process, we can help foster economic growth and <br />{' '}
						promote a vibrant business ecosystem in Ethiopia.
					</P>
				</SpanContainer>
				<Tittle>Why Choose iChereta?</Tittle>
				<Ul>
					<Li>
						<Span>Extensive Coverage</Span>:We aggregate tender information from a wide range of
						sources, ensuring that you never miss an opportunity that is relevant to your business.
					</Li>
					<Li>
						<Span>Personalized Alerts</Span>:iChereta's customizable alert system allows you to
						receive notifications through our website, Telegram, SMS, and email, ensuring that you
						stay informed about the latest tenders in your preferred manner.
					</Li>
					<Li>
						<Span>Localized Content</Span>:Our platform caters to the diverse linguistic and
						regional needs of Ethiopia, offering tender information in multiple languages and from
						every corner of the country.
					</Li>
					<Li>
						<Span>Time-saving</Span>:iChereta's tender alert service saves you time and effort by
						automatically delivering the most relevant tender opportunities directly to you,
						eliminating the need for manual searches.
					</Li>
					<Li>
						<Span>Expert Support</Span> Our team of dedicated professionals is committed to
						providing you with unparalleled customer service, ensuring that you have all the
						information you need to make informed decisions about tender opportunities.
					</Li>
				</Ul>
				<Tittle style={{ marginBottom: '1.2rem' }}>Join the iChereta Community</Tittle>
				<SpanContainer style={{ marginBottom: '2rem' }}>
					<P>
						Discover a world of tender opportunities at your fingertips and unlock your business's
						full potential.
					</P>
				</SpanContainer>
				<SpanContainer>
					<P>
						Sign up with iChereta today and stay ahead of the competition with the latest tender
						alerts and notifications tailored to your needs. Let iChereta be your partner on the
						path to success.
					</P>
				</SpanContainer>
			</Div>
		</AboutContainer>
	)
}

export default About
