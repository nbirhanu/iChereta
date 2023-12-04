import { styled } from 'styled-components'
import Commercial from '../data/img/commercial.jpg'
import { Link } from 'react-router-dom'
//
const BanksWrapper = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: 2.2rem;
`
const BankDiv = styled.div`
	width: 210px;
	height: 170px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border: 1px solid rgba(102, 75, 199, 0.1);
	box-shadow: 2px 6px 8px -2px rgba(102, 75, 199, 0.1);
	border-radius: 5px;
`
const BankLogoDiv = styled.div`
	width: 7rem;
	height: 5rem;
`
const BankLogo = styled.img`
	width: 100%;
	height: 100%;
	margin-bottom: 2rem;
	margin-top: 1.8rem;
`
const TittleDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const BankTittle = styled.p`
	color: rgba(31, 41, 55, 0.9);
	font-weight: 600;
	font-size: 1.4rem;
`
const BankAddress = styled.p`
	color: rgba(31, 41, 55, 0.5);
`
const TenderNumDiv = styled.div`
	width: 100%;
	background-color: rgba(240, 247, 230, 1);
	text-align: center;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	margin-top: 0.4rem;
`
const TenderNum = styled.p`
	color: rgba(22, 163, 74, 1);
	font-size: 1.4rem;
	font-weight: 700;
	padding: 0.8rem 0;
`
const BottomDiv = styled.div`
	width: 100%;
`
//
function Banks() {
	return (
		<BanksWrapper>
			<Link style={{ textDecoration: 'none' }}>
				<BankDiv>
					<BankLogoDiv>
						<BankLogo src={Commercial} alt="commercial bank of ethiopia logo" />
					</BankLogoDiv>
					<BottomDiv>
						<TittleDiv>
							<BankTittle>Commercial Bank Of Ethiopia</BankTittle>
							<BankAddress>Addis Ababa</BankAddress>
						</TittleDiv>
						<TenderNumDiv>
							<TenderNum>11 Open Tender</TenderNum>
						</TenderNumDiv>
					</BottomDiv>
				</BankDiv>
			</Link>

			<Link style={{ textDecoration: 'none' }}>
				<BankDiv>
					<BankLogoDiv>
						<BankLogo
							src="https://api.ichereta.com/storage/YMzeC5jXgFqxB1PUNu54hlarfq06MN-metaZXRoaW8ucG5n-.png"
							alt="ethio telecom logo"
						/>
					</BankLogoDiv>
					<BottomDiv>
						<TittleDiv>
							<BankTittle>Ethio Telecom</BankTittle>
							<BankAddress>Addis Ababa</BankAddress>
						</TittleDiv>
						<TenderNumDiv>
							<TenderNum>12 Open Tender</TenderNum>
						</TenderNumDiv>
					</BottomDiv>
				</BankDiv>
			</Link>

			<Link style={{ textDecoration: 'none' }}>
				<BankDiv>
					<BankLogoDiv>
						<BankLogo
							src="https://api.ichereta.com/storage/03lrGyXkwAQC3MWhBKaiU9W23EQUbD-metaSGlicmV0LWJhbmstbG9nbyAoMSkuanBn-.jpg"
							alt="hibret bank logo"
						/>
					</BankLogoDiv>
					<BottomDiv>
						<TittleDiv>
							<BankTittle>Hibret Bank S.C.</BankTittle>
							<BankAddress>Addis Ababa</BankAddress>
						</TittleDiv>
						<TenderNumDiv>
							<TenderNum>2 Open Tender</TenderNum>
						</TenderNumDiv>
					</BottomDiv>
				</BankDiv>
			</Link>

			<Link style={{ textDecoration: 'none' }}>
				<BankDiv>
					<BankLogoDiv>
						<BankLogo
							src="https://api.ichereta.com/storage/wOTsZjJzSe6xwaMbfsePUfVcjpnp80-metaZGFzaGVuc2MuanBlZw==-.jpg"
							alt="dashen bank logo"
						/>
					</BankLogoDiv>
					<BottomDiv>
						<TittleDiv>
							<BankTittle>Dashen Bank S.C.</BankTittle>
							<BankAddress>Addis Ababa</BankAddress>
						</TittleDiv>
						<TenderNumDiv>
							<TenderNum>8 Open Tender</TenderNum>
						</TenderNumDiv>
					</BottomDiv>
				</BankDiv>
			</Link>

			<Link style={{ textDecoration: 'none' }}>
				<BankDiv>
					<BankLogoDiv>
						<BankLogo
							src="https://api.ichereta.com/storage/D169fs5XOTUEBNvS2b22AhaTXr3mIB-metaZG93bmxvYWQuanBlZw==-.jpg"
							alt="awash bank logo"
						/>
					</BankLogoDiv>
					<BottomDiv>
						<TittleDiv>
							<BankTittle>Awash Bank S.C.</BankTittle>
							<BankAddress>Addis Ababa</BankAddress>
						</TittleDiv>
						<TenderNumDiv>
							<TenderNum>6 Open Tender</TenderNum>
						</TenderNumDiv>
					</BottomDiv>
				</BankDiv>
			</Link>

			<Link style={{ textDecoration: 'none' }}>
				<BankDiv>
					<BankLogoDiv>
						<BankLogo
							src="https://api.ichereta.com/storage/TlqQU2NXJpin1RljDSAR6S6hMFWM7w-metaU2NyZWVuc2hvdCBhdCBKdWwgMjIgMTItMjQtMDAgKDEpLnBuZw==-.png"
							alt="bank of abyssinia logo"
						/>
					</BankLogoDiv>
					<BottomDiv>
						<TittleDiv>
							<BankTittle>Bank Of Abyssinia S.C.</BankTittle>
							<BankAddress>Addis Ababa</BankAddress>
						</TittleDiv>
						<TenderNumDiv>
							<TenderNum>10 Open Tender</TenderNum>
						</TenderNumDiv>
					</BottomDiv>
				</BankDiv>
			</Link>

			<Link style={{ textDecoration: 'none' }}>
				<BankDiv>
					<BankLogoDiv>
						<BankLogo
							src="https://api.ichereta.com/storage/gdSE5fPy7KiqERoL7auuaf5DLApHE0-metabG9nbzJ4LnBuZw==-.png"
							alt="zemen bank logo"
						/>
					</BankLogoDiv>
					<BottomDiv>
						<TittleDiv>
							<BankTittle>Zemen Bank S.C.</BankTittle>
							<BankAddress>Addis Ababa</BankAddress>
						</TittleDiv>
						<TenderNumDiv>
							<TenderNum>4 Open Tender</TenderNum>
						</TenderNumDiv>
					</BottomDiv>
				</BankDiv>
			</Link>
		</BanksWrapper>
	)
}

export default Banks
