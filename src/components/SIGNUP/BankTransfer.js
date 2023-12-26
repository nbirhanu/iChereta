import { styled } from 'styled-components'
import { useAuth } from '../../CONTEXTAPI/ContextApi'
import BankOption from './BankOption'
import BankDetail from './BankDetail'

const BankWrapper = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	display: ${({ display }) => (display ? 'block' : 'none')};
`

function BankTransfer() {
	const { selectedSystem } = useAuth()
	return (
		<BankWrapper display={selectedSystem === 1}>
			<BankOption />
			<BankDetail />
		</BankWrapper>
	)
}

export default BankTransfer
