import { BiCategoryAlt } from 'react-icons/bi'
import { FaChevronDown } from 'react-icons/fa6'
import { useState } from 'react'
import {
	SelectWrapper,
	TitleContainer,
	Icon,
	H1,
	SelectContainer,
	Select,
	SelectIcon,
	Option,
} from './ChooseLanguage'
function ChooseCategory() {
	const [rotateArrow, setRotateArrow] = useState(false)

	const handleRotate = function () {
		setRotateArrow(!rotateArrow)
	}
	return (
		<SelectWrapper>
			<TitleContainer>
				<Icon>
					<BiCategoryAlt />
				</Icon>
				<H1>Category</H1>
			</TitleContainer>
			<SelectContainer>
				<Select onClick={handleRotate}>
					<Option>All</Option>
					<Option>Art</Option>
					<Option>Education and Training</Option>
					<Option>Rent</Option>
					<Option>Advertising and Promotion</Option>
				</Select>
				<SelectIcon rotate={rotateArrow === true}>
					<FaChevronDown />
				</SelectIcon>
			</SelectContainer>
		</SelectWrapper>
	)
}

export default ChooseCategory
