import { styled } from 'styled-components'
import SearchTenderTittle from './SearchTenderTittle'
import ChooseLanguage from './ChooseLanguage'
import ChooseRegions from './ChooseRegions'
import ChooseCategory from './ChooseCategory'
import ChoosePublishedOn from './ChoosePublishedOn'
import OpenClosed from './OpenClosed'
import SearchTendersButton from './SearchTendersButton'

const FormWrapper = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 1.8rem;
	gap: 1.2rem;
`

function TenderSearchForm() {
	return (
		<FormWrapper>
			<SearchTenderTittle />
			<ChooseLanguage />
			<ChooseRegions />
			<ChooseCategory />
			<ChoosePublishedOn />
			<OpenClosed />
			<SearchTendersButton />
		</FormWrapper>
	)
}

export default TenderSearchForm
