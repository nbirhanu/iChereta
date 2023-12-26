import { styled } from 'styled-components'
import { CiSearch } from 'react-icons/ci'
import { FiX } from 'react-icons/fi'
import { useState } from 'react'
import SearchTenderTittle from './SearchTenderTittle'
import ChooseLanguage from './ChooseLanguage'
import ChooseRegions from './ChooseRegions'
import ChooseCategory from './ChooseCategory'
import ChoosePublishedOn from './ChoosePublishedOn'
import OpenClosed from './OpenClosed'
import SearchTendersButton from './SearchTendersButton'

const Container = styled.div`
	position: relative;
`

const Wrapper = styled.div`
	display: none;
	@media (max-width: 1085px) {
		display: block;
	}
`
const SearchButton = styled.button`
	position: fixed;
	top: 6.6rem;
	left: 1.5rem;
	font-size: 2.8rem;
	background-color: hsla(0, 0%, 100%, 0.9);
	color: #333;
	padding: 0.5rem 0.75rem;
	border: none;
	cursor: pointer;
	z-index: 5;
`
const Overlay = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);

	display: ${props => (props.overlay ? 'block' : 'none')};
	z-index: 1; /* Ensure overlay is above other content */
`

const TenderMenu = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	padding: 5rem 5rem;
	background-color: white;
	position: fixed;
	top: 6.5rem;
	left: 0;
	height: 100vh;
	width: 40rem; /* Adjust the width as needed */
	transform: ${props => (props.menu ? 'translateX(0)' : 'translateX(-100%)')};
	transition: transform 0.3s ease-in-out;
	z-index: 2; /* Ensure menu is above overlay */
`

//
function TenderSearchMenu() {
	const [isOpen, setOpen] = useState(false)
	const changeMenu = function () {
		setOpen(!isOpen)
	}
	return (
		<Wrapper>
			<Container>
				<SearchButton onClick={changeMenu}>{isOpen ? <FiX /> : <CiSearch />}</SearchButton>
				<Overlay onClick={changeMenu} overlay={isOpen} />
				<TenderMenu menu={isOpen}>
					<SearchTenderTittle />
					<ChooseLanguage />
					<ChooseRegions />
					<ChooseCategory />
					<ChoosePublishedOn />
					<OpenClosed />
					<SearchTendersButton />
				</TenderMenu>
			</Container>
		</Wrapper>
	)
}

export default TenderSearchMenu
