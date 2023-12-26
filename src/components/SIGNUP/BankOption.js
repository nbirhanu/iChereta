import { styled } from 'styled-components'
import { useAuth } from '../../CONTEXTAPI/ContextApi'
import BankDetail from './BankDetail'

const option = [
	{
		bank: 'Bank of Abysinia',
	},
	{
		bank: 'Hibret Bank',
	},
	{
		bank: 'Commercial Bank of Ethiopia',
	},
	{
		bank: 'Awash Bank',
	},
]

const OptionWrapper = styled.div`
	margin-top: 1.8rem;
`

const Select = styled.select`
	width: 100%;
	border: none;
	outline: none;
	background-color: rgba(248, 250, 252, 1);
	padding: 0.5rem;
	font-size: 1.2rem;
`
const Option = styled.option``

function BankOption() {
	const { seletedBank, setSelectedBank } = useAuth()

	const hadleBankOption = function (bankIndex) {
		setSelectedBank(bankIndex === seletedBank ? <BankDetail /> : bankIndex)
	}

	return (
		<OptionWrapper>
			<Select>
				{option.map((item, index) => (
					<Option key={index} onClick={() => hadleBankOption(index)}>
						{item.bank}
					</Option>
				))}
			</Select>
		</OptionWrapper>
	)
}

export default BankOption
