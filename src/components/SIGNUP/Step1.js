import { styled } from 'styled-components'
import FatherNameInput from './FatherNameInput'
import NameInput from './NameInput'
import CompanyName from './CompanyName'
import CellPhone from './CellPhone'
import Step1Button from './Step1Button'

const NameContainer = styled.div`
	display: flex;
	gap: 1rem;
`

function Step1() {
	return (
		<>
			<NameContainer>
				<NameInput />
				<FatherNameInput />
			</NameContainer>
			<CompanyName />
			<CellPhone />
			<Step1Button />
		</>
	)
}

export default Step1
