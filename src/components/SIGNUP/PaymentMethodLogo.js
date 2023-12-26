import { styled } from 'styled-components'

const logoData = [
	{
		img: 'https://ichereta.com/static/media/telebirrlogo.ec095f78862d58b2911e0da3762ca810.svg',
		alt: 'Tele birr logo',
	},
	{
		img: 'https://ichereta.com/static/media/cbebirr.2d121914cf343d5c0f1b.png',
		alt: 'CBE birr logo',
	},
	{
		img: 'https://ichereta.com/static/media/amolelogo.ad19c8505ae1f7cbed8f.png',
		alt: 'Amole logo',
	},
]

const LogoWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
`
const Logo = styled.img`
	width: 15%;
	@media (max-width: 500px) {
		width: 13%;
	}
`

function PaymentMethodLogo() {
	return (
		<LogoWrapper>
			{logoData.map(item => (
				<Logo key={item.alt} src={item.img} alt={item.alt} />
			))}
		</LogoWrapper>
	)
}

export default PaymentMethodLogo
