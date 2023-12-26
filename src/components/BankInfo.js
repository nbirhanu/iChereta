import Banks from './Banks'
//
const BankData = [
	{
		img: 'https://api.ichereta.com/storage/SZMtp9PRz65sYnVlLn2B79lid1d6Z5-metaY2JlLmpwZWc=-.jpg',
		bankTittle: 'Commercial Bank Of Ethiopia',
		bankAddress: 'Adiss Ababa',
		tendNum: '11 Open Tender',
	},
	{
		img: 'https://api.ichereta.com/storage/YMzeC5jXgFqxB1PUNu54hlarfq06MN-metaZXRoaW8ucG5n-.png',
		bankTittle: 'Ethio Telecom',
		bankAddress: 'Adiss Ababa',
		tendNum: '12 Open Tender',
	},
	{
		img: 'https://api.ichereta.com/storage/03lrGyXkwAQC3MWhBKaiU9W23EQUbD-metaSGlicmV0LWJhbmstbG9nbyAoMSkuanBn-.jpg',
		bankTittle: 'Hibret Bank S.C.',
		bankAddress: 'Adiss Ababa',
		tendNum: '2 Open Tender',
	},
	{
		img: 'https://api.ichereta.com/storage/wOTsZjJzSe6xwaMbfsePUfVcjpnp80-metaZGFzaGVuc2MuanBlZw==-.jpg',
		bankTittle: 'Dashen Bank S.C.',
		bankAddress: 'Adiss Ababa',
		tendNum: '8 Open Tender',
	},
	{
		img: 'https://api.ichereta.com/storage/D169fs5XOTUEBNvS2b22AhaTXr3mIB-metaZG93bmxvYWQuanBlZw==-.jpg',
		bankTittle: 'Awash Bank S.C.',
		bankAddress: 'Adiss Ababa',
		tendNum: '6 Open Tender',
	},
	{
		img: 'https://api.ichereta.com/storage/TlqQU2NXJpin1RljDSAR6S6hMFWM7w-metaU2NyZWVuc2hvdCBhdCBKdWwgMjIgMTItMjQtMDAgKDEpLnBuZw==-.png',
		bankTittle: 'Bank Of Abyssinia S.C.',
		bankAddress: 'Adiss Ababa',
		tendNum: '10 Open Tender',
	},
	{
		img: 'https://api.ichereta.com/storage/gdSE5fPy7KiqERoL7auuaf5DLApHE0-metabG9nbzJ4LnBuZw==-.png',
		bankTittle: 'Zemen Bank S.C.',
		bankAddress: 'Adiss Ababa',
		tendNum: '4 Open Tender',
	},
]

//

function BankInfo() {
	return (
		<>
			<Banks data={BankData} />
		</>
	)
}

export default BankInfo
