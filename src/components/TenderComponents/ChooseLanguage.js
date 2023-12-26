import { styled } from 'styled-components'
import { HiLanguage } from 'react-icons/hi2'
import { FaChevronDown } from 'react-icons/fa6'
import { useState } from 'react'

export const SelectWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	margin-bottom: 1rem;
`
/// LANGUAGE TITLE
export const TitleContainer = styled.div`
	display: flex;
	gap: 0.8rem;
	align-items: center;
`
export const Icon = styled.div`
	font-size: 1.4rem;
	color: rgba(107, 114, 128, 1);
`
export const H1 = styled.h1`
	font-size: 1.2rem;
	font-weight: 500;
	color: rgba(107, 114, 128, 1);
`
//// LANGUAGE SELECT OPTION

export const SelectContainer = styled.div`
	position: relative;
	width: 100%;
`

export const Select = styled.select`
	width: 100%;
	height: 3.8rem;
	appearance: none; /* Remove default arrow in some browsers */
	-webkit-appearance: none; /* Remove default arrow in Webkit browsers */
	-moz-appearance: none; /* Remove default arrow in Firefox */
	font-size: 1.4rem;
	outline: none;
	border: 1px solid rgba(219, 234, 254, 1);
	color: rgba(107, 114, 128, 1);
	background-color: rgba(239, 246, 255, 0.5);
	padding-left: 1.6rem;
	padding-right: 1.25rem;
	border-radius: 0.25rem;
	cursor: pointer;
`
export const SelectIcon = styled.div`
	position: absolute;
	color: rgba(107, 114, 128, 1);
	right: 1.6rem;
	top: 38%;
	align-items: center;
	transition-duration: 0.5s;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
		skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
		scaleY(var(--tw-scale-y));
	transform: rotate(${({ rotate }) => (rotate ? '180deg' : '')});
`

///// STYLE OPTION

export const Option = styled.option`
	border: none;
	outline: none;
`

///
function ChooseLanguage() {
	const [rotateArrow, setRotateArrow] = useState(false)

	const handleRotate = function () {
		setRotateArrow(!rotateArrow)
	}

	return (
		<SelectWrapper>
			<TitleContainer>
				<Icon>
					<HiLanguage />
				</Icon>
				<H1>Language</H1>
			</TitleContainer>
			<SelectContainer>
				<Select onClick={handleRotate}>
					<Option>All</Option>
					<Option>English</Option>
					<Option>Amharic</Option>
					<Option>Afaan oromoo</Option>
					<Option>Somali</Option>
				</Select>
				<SelectIcon rotate={rotateArrow === true}>
					<FaChevronDown />
				</SelectIcon>
			</SelectContainer>
		</SelectWrapper>
	)
}

export default ChooseLanguage
