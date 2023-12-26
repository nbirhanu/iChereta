import { IoImagesOutline } from 'react-icons/io5'
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

function ChoosePublishedOn() {
	const [rotateArrow, setRotateArrow] = useState(false)

	const handleRotate = function () {
		setRotateArrow(!rotateArrow)
	}
	return (
		<SelectWrapper>
			<TitleContainer>
				<Icon>
					<IoImagesOutline />
				</Icon>
				<H1>Published On</H1>
			</TitleContainer>
			<SelectContainer>
				<Select onClick={handleRotate}>
					<Option>All</Option>
					<Option>Addis Zemen</Option>
					<Option>Reporter</Option>
					<Option>Ethiopia Heraid</Option>
					<Option>Fortune</Option>
				</Select>
				<SelectIcon rotate={rotateArrow === true}>
					<FaChevronDown />
				</SelectIcon>
			</SelectContainer>
		</SelectWrapper>
	)
}

export default ChoosePublishedOn
