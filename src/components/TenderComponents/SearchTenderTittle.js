import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import {
	InputContainer,
	StyleInput,
	PlaceHolderContainer,
	PlaceHolderSpan,
	IconDiv,
} from '../LOGIN/LoginEmail'

function SearchTenderTittle() {
	const [inputValue, setInputValue] = useState('')
	const handleOnChange = function (e) {
		setInputValue(e.target.value)
	}
	return (
		<InputContainer
			style={{ width: '100%', height: '4.2rem', borderRadius: '9999px', marginBottom: '0' }}>
			<IconDiv>
				<CiSearch />
			</IconDiv>
			<StyleInput type="email" placeholder="" value={inputValue} onChange={handleOnChange} />
			<PlaceHolderContainer hasValue={inputValue.length > 0}>
				<PlaceHolderSpan hasValue={inputValue.length > 0}>title</PlaceHolderSpan>
			</PlaceHolderContainer>
		</InputContainer>
	)
}

export default SearchTenderTittle
